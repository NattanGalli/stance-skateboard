// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navMobile = document.getElementById("navMobile");
  const iconOpen = document.getElementById("iconMenu");
  const iconClose = document.getElementById("iconClose");

  if (menuBtn && navMobile) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navMobile.classList.toggle("open");
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }
    });
  }

  // Highlight active nav based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((el) => {
    if (el.getAttribute("data-nav") === path) {
      el.classList.add("active");
    }
  });

  // Set footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Prevent contact form default submit
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada! (Demonstração — integre com um serviço real para envio.)");
      form.reset();
    });
  }
});
