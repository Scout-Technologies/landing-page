document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  document.querySelectorAll('.faq-q').forEach((q) => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
});


