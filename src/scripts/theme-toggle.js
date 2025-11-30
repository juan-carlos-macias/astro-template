// Initialize theme toggle - runs after swap to setup new DOM
function setupThemeToggle() {
	const themeToggle = document.getElementById('theme-toggle');
	const html = document.documentElement;
	
	if (!themeToggle) return;
	
	// Remove old listener by cloning (cleanest way to remove all listeners)
	const newButton = themeToggle.cloneNode(true);
	themeToggle.parentNode.replaceChild(newButton, themeToggle);
	
	// Add click listener
	newButton.addEventListener('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		const theme = html.getAttribute('data-theme');
		const newTheme = theme === 'light' ? 'dark' : 'light';
		
		html.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
	});
}

// Run on DOM ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', setupThemeToggle);
} else {
	setupThemeToggle();
}

// Re-run after view transitions complete
document.addEventListener('astro:after-swap', setupThemeToggle);
