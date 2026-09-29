// Contact form: intent preselect (URL query or in-page CTA), inline validation,
// fetch submit to Web3Forms with loading / success / error states.
const INTENTS = ['project', 'investor', 'firro', 'other'] as const;
type Intent = (typeof INTENTS)[number];

const LABELS: Record<Intent, string> = {
  project: 'Start a project',
  investor: 'Investor',
  firro: 'Firro demo',
  other: 'Other',
};

const PLACEHOLDERS: Record<Intent, string> = {
  project: 'Tell us about your operation and what you’d like AI to take off your plate.',
  investor: 'Tell us a little about you and what you’d like to see in the deck.',
  firro: 'Tell us about your kitchen: meals a day, number of subscribers and your city.',
  other: 'How can we help?',
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isIntent = (v: string | null | undefined): v is Intent => INTENTS.includes(v as Intent);

export function initContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form) return;
  form.noValidate = true;

  const radios = [...form.querySelectorAll<HTMLInputElement>('[data-intent-radio]')];
  const message = form.querySelector<HTMLTextAreaElement>('[data-field="message"]');
  const subject = form.querySelector<HTMLInputElement>('[data-subject]');
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]');
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]');
  const status = form.querySelector<HTMLElement>('[data-status]');
  const success = document.querySelector<HTMLElement>('[data-success]');
  const successText = document.querySelector<HTMLElement>('[data-success-text]');
  const configured = form.dataset.configured === 'true';

  if (!configured) {
    console.warn(
      '[contact] Form not configured: PUBLIC_WEB3FORMS_KEY is empty. Add it to .env (local) and to Vercel env vars. Submissions will not be sent.',
    );
  }

  const currentIntent = (): Intent => {
    const v = radios.find((r) => r.checked)?.value;
    return isIntent(v) ? v : 'project';
  };

  const applyIntent = (intent: Intent): void => {
    radios.forEach((r) => (r.checked = r.value === intent));
    syncIntent();
  };

  function syncIntent(): void {
    const intent = currentIntent();
    if (message) message.placeholder = PLACEHOLDERS[intent];
    if (subject) subject.value = `Website enquiry — ${LABELS[intent]}`;
  }

  radios.forEach((r) => r.addEventListener('change', syncIntent));

  // Preselect from /?intent=…#contact
  const fromUrl = new URLSearchParams(window.location.search).get('intent');
  applyIntent(isIntent(fromUrl) ? fromUrl : 'project');

  // In-page CTAs with data-intent: set the intent and scroll, no reload.
  document.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[data-intent]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const url = new URL(link.href);
    const intent = link.dataset.intent;
    if (url.pathname !== window.location.pathname || !isIntent(intent)) return;
    event.preventDefault();
    applyIntent(intent);
    history.replaceState(null, '', `${url.pathname}?intent=${intent}#contact`);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contact')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    radios.find((r) => r.checked)?.focus({ preventScroll: true });
  });

  const setError = (name: string, text: string): void => {
    const field = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
    const error = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    if (field) field.setAttribute('aria-invalid', text ? 'true' : 'false');
    if (error) {
      error.textContent = text;
      error.hidden = !text;
    }
  };

  const validate = (): boolean => {
    const data = new FormData(form);
    const value = (k: string): string => String(data.get(k) ?? '').trim();
    const errors: [string, string][] = [
      ['name', value('name') ? '' : 'Please enter your name.'],
      ['email', !value('email') ? 'Please enter your email.' : EMAIL.test(value('email')) ? '' : 'Please enter a valid email address.'],
      ['message', value('message') ? '' : 'Please add a short message.'],
      ['consent', data.get('consent') ? '' : 'Please agree to the Privacy Policy so we can reply.'],
    ];
    errors.forEach(([name, text]) => setError(name, text));
    const first = errors.find(([, text]) => text);
    if (first) form.querySelector<HTMLElement>(`[name="${first[0]}"]`)?.focus();
    return !first;
  };

  // Clear a field's error as soon as it is fixed.
  form.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.getAttribute('aria-invalid') === 'true') setError(target.name, '');
  });

  const setBusy = (busy: boolean): void => {
    if (!submit) return;
    submit.disabled = busy;
    submit.setAttribute('aria-busy', String(busy));
    if (submitLabel) submitLabel.textContent = busy ? 'Sending…' : 'Send enquiry';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (status) status.hidden = true;
    if (!validate()) return;
    syncIntent();

    if (!configured) {
      console.warn('[contact] Form not configured: PUBLIC_WEB3FORMS_KEY is empty. Nothing was sent.');
      if (status) status.hidden = false;
      return;
    }

    setBusy(true);
    try {
      const payload: Record<string, FormDataEntryValue> = Object.fromEntries(new FormData(form));
      delete payload.redirect; // only for the no-JS POST
      const body = JSON.stringify(payload);
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body,
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || !json.success) throw new Error(`Web3Forms responded ${res.status}`);

      const name = String(new FormData(form).get('name') ?? '').trim().split(/\s+/)[0];
      if (successText) successText.textContent = `Thanks, ${name}. We’ll reply within one business day.`;
      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus();
      }
    } catch (err) {
      console.error('[contact] Submit failed', err);
      if (status) status.hidden = false;
    } finally {
      setBusy(false);
    }
  });
}
