
// Parallax hero effect
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero-inner");
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  hero.style.transform = `translate3d(${x * 10}px, ${y * 6}px, 0)`;
});

// Reveal sections on scroll
const sections = document.querySelectorAll(".section");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);
sections.forEach((sec) => revealObserver.observe(sec));

// Accordion
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.closest(".accordion-item");
    const panel = item.querySelector(".accordion-panel");
    const isOpen = item.classList.contains("open");
    if (isOpen) {
      panel.style.maxHeight = "0px";
      item.classList.remove("open");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      item.classList.add("open");
    }
  });
});

// Modal
const modalBackdrop = document.querySelector("[data-modal-backdrop]");
if (modalBackdrop) {
  const openButtons = document.querySelectorAll("[data-open-modal]");
  const closeBtn = modalBackdrop.querySelector(".modal-close");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalBackdrop.classList.add("open");
    });
  });

  closeBtn.addEventListener("click", () => {
    modalBackdrop.classList.remove("open");
  });

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove("open");
    }
  });
}
