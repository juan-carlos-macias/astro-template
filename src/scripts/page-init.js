// Initialize page functionality
function initializePage() {
	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const href = e.currentTarget.getAttribute('href');
			const target = href ? document.querySelector(href) : null;
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});

	// Form submission handling
	const contactForm = document.querySelector('.contact-form');
	
	contactForm?.addEventListener('submit', (e) => {
		e.preventDefault();
		const successMessage = contactForm.getAttribute('data-success-message') || 'Thanks for reaching out!';
		alert(successMessage);
		contactForm.reset();
	});
}

// Run on initial page load
initializePage();

// Re-run after view transitions
document.addEventListener('astro:page-load', initializePage);
