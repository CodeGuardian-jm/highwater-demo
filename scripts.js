// =========================================
// BASIC INTERACTIVITY
// - Mobile nav toggle
// - Smooth scrolling for internal links
// - Dynamic year in footer
// =========================================

document.addEventListener("DOMContentLoaded", function () {
  // Cache commonly used elements
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  const yearSpan = document.getElementById("year");

  // -----------------------------------------
  // Mobile navigation toggle
  // - Controls showing/hiding the mobile menu
  // - Also updates ARIA attributes for accessibility
  // -----------------------------------------
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile menu when a mobile nav link is clicked
    mobileNavLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // -----------------------------------------
  // Smooth scrolling for internal navigation
  // - Scrolls to sections with a small offset
  // - Works on both header and mobile nav links
  // -----------------------------------------
  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      // Only handle on-page anchors (starting with "#")
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          event.preventDefault();

          const headerOffset = 70; // adjust if header height changes
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // -----------------------------------------
  // Dynamic year in footer
  // - Keeps copyright year up to date
  // -----------------------------------------
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // -----------------------------------------
  // PLACEHOLDER: add project-specific JS here
  // - For example: simple sliders, FAQ toggles, etc.
  // - Keep it small and focused for each client
  // -----------------------------------------
});