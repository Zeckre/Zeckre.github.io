/**
 * CodeNexo - Main JavaScript
 * Handles: mobile menu toggle, form submission, smooth scroll
 */

// ==========================================================================
// DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initContactForm();
  initSmoothScrollLinks();
});

// ==========================================================================
// Mobile Menu Toggle
// ==========================================================================

/**
 * Toggles the mobile navigation menu visibility
 * Uses the hamburger button in the header
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuBtn.classList.toggle('active', isOpen);

    // Update aria-expanded for accessibility
    menuBtn.setAttribute('aria-expanded', isOpen);

    // Toggle body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking a nav link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ==========================================================================
// Contact Form Handler
// ==========================================================================

/**
 * Handles the CTA form submission
 * Validates email and shows confirmation
 */
function initContactForm() {
  const form = document.querySelector('.cta-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput?.value.trim();

    // Basic email validation
    if (!email || !isValidEmail(email)) {
      shakeElement(emailInput);
      return;
    }

    // Show success feedback
    const btn = form.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '¡Enviado!';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      emailInput.value = '';
    }, 2000);
  });
}

/**
 * Validates email format using regex
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Adds a shake animation to an element for validation feedback
 * @param {HTMLElement} element
 */
function shakeElement(element) {
  if (!element) return;
  element.style.animation = 'shake 0.5s ease';
  element.addEventListener('animationend', () => {
    element.style.animation = '';
  }, { once: true });
}

// ==========================================================================
// Smooth Scroll for Anchor Links
// ==========================================================================

/**
 * Adds smooth scroll behavior to all anchor links
 * Handles offset for the fixed header
 */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}
