// Mobile navigation, footer year, fee calculator and demo contact form.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  const feeForm = document.querySelector("#fee-form");
  if (feeForm) {
    feeForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const rate = Number(document.querySelector("#experience").value);
      const players = Number(document.querySelector("#players").value);
      const hours = Number(document.querySelector("#hours").value);
      const result = document.querySelector("#fee-result");

      if (!Number.isFinite(rate) || players < 1 || players > 20 || hours < 1 || hours > 12) {
        result.textContent = "Please enter valid values for players and hours.";
        return;
      }

      const total = rate * players * hours;
      result.textContent = `Estimated total: R${total.toFixed(2)} (${players} player(s) × ${hours} hour(s)).`;
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value.trim();
      const result = document.querySelector("#contact-result");
      result.textContent = `Thanks, ${name}! This demo form has checked your details, but it does not send an email yet.`;
      contactForm.reset();
    });
  }
});
