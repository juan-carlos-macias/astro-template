// Theme Preservation for View Transitions
// This must run inline to prevent FOUC
document.addEventListener('astro:before-swap', (e) => {
	// Save current theme before swap
	const currentTheme = document.documentElement.getAttribute('data-theme');
	if (currentTheme) {
		localStorage.setItem('theme', currentTheme);
	}
	// Apply theme to new document
	const theme = localStorage.getItem('theme') || 'light';
	e.newDocument.documentElement.setAttribute('data-theme', theme);
});

// Apply theme immediately on first load
(function() {
	const theme = localStorage.getItem('theme') || 'light';
	document.documentElement.setAttribute('data-theme', theme);
})();
