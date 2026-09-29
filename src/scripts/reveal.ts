// Scroll reveals ([data-reveal] fades/rises once) and off-screen pausing for sections
// with looping animation ([data-loop] gets .is-offscreen while out of view).
export function initReveal(): void {
  if (!('IntersectionObserver' in window)) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealables = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduce) {
    revealables.forEach((el) => el.classList.add('is-visible'));
  } else {
    const reveal = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            el.style.animationDelay = `${Math.min(i, 4) * 80}ms`;
            el.classList.add('is-visible');
            reveal.unobserve(el);
          });
      },
      { threshold: 0.15 },
    );
    revealables.forEach((el) => reveal.observe(el));
  }

  const loops = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-offscreen', !entry.isIntersecting));
    },
    { rootMargin: '100px 0px' },
  );
  document.querySelectorAll('[data-loop]').forEach((el) => loops.observe(el));
}
