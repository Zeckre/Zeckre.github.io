/**
 * CodeNexo - Main JavaScript
 * Handles: mobile menu toggle, form submission with EmailJS, smooth scroll
 */

// ==========================================================================
// EmailJS Configuration
// ==========================================================================

const EMAILJS_PUBLIC_KEY = 'LZNwN5BR1LuxyxsWF';
const EMAILJS_SERVICE_ID = 'service_cqcoh5o';
const EMAILJS_TEMPLATE_ENTERPRISE = 'template_3fl9vkl'; // Correo a tu empresa
const EMAILJS_TEMPLATE_CLIENT = 'template_cet73uq';     // Confirmación al cliente

// ==========================================================================
// DOM Ready
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS with public key
  emailjs.init(EMAILJS_PUBLIC_KEY);

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
// Contact Form Handler (EmailJS)
// ==========================================================================

/**
 * Handles the CTA form submission using EmailJS
 * Sends two emails: one to enterprise, one confirmation to client
 */
function initContactForm() {
  const form = document.querySelector('.cta-form');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const btn = form.querySelector('button');
    const email = emailInput?.value.trim();

    // Basic email validation
    if (!email || !isValidEmail(email)) {
      shakeElement(emailInput);
      return;
    }

    // Disable button and show loading state
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    let enterpriseOk = false;

    // Send email to enterprise
    try {
      const enterpriseResult = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ENTERPRISE,
        { email: email, reply_to: email }
      );
      console.log('Enterprise email sent:', enterpriseResult);
      enterpriseOk = true;
    } catch (err) {
      console.error('Enterprise email FAILED:', err.status, err.text);
    }

    // Send confirmation email to client
    try {
      const clientResult = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CLIENT,
        { email: email, reply_to: email }
      );
      console.log('Client email sent:', clientResult);
    } catch (err) {
      console.error('Client email FAILED:', err.status, err.text);
    }

    // Feedback
    if (enterpriseOk) {
      btn.textContent = '¡Enviado!';
      emailInput.value = '';
    } else {
      btn.textContent = 'Error. Revisa la consola (F12)';
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
    }, 3000);
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
