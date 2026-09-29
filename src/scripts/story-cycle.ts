// Story section: the active step follows scroll while the section is pinned (desktop),
// and a click on a statement activates it everywhere.
type Step = { card: string; state: string };

const PINNED = '(min-width: 1025px) and (min-height: 820px) and (prefers-reduced-motion: no-preference)';

export function initStory(): void {
  const root = document.querySelector<HTMLElement>('[data-story]');
  if (!root) return;
  const steps: Step[] = JSON.parse(root.dataset.steps ?? '[]');
  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-step]')];
  const label = root.querySelector<HTMLElement>('[data-story-label]');
  const state = root.querySelector<HTMLElement>('[data-story-state]');
  const pinned = window.matchMedia(PINNED);
  let active = 0;
  let ticking = false;

  const activate = (index: number): void => {
    if (index === active) return;
    active = index;
    buttons.forEach((b, i) => b.setAttribute('aria-pressed', String(i === index)));
    if (label) label.textContent = steps[index].card;
    if (state) state.textContent = steps[index].state;
  };

  const travel = (): number => root.offsetHeight - window.innerHeight;

  const onScroll = (): void => {
    ticking = false;
    if (!pinned.matches) return;
    const progress = Math.min(1, Math.max(0, -root.getBoundingClientRect().top / Math.max(1, travel())));
    activate(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true },
  );

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      if (pinned.matches) {
        // Scroll to the middle of this step's band so scroll and state stay in sync.
        const top = root.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + travel() * ((i + 0.5) / steps.length), behavior: 'smooth' });
      }
      activate(i);
    });
  });

  pinned.addEventListener('change', () => (pinned.matches ? onScroll() : activate(0)));
  onScroll();
}
