document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-links').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle the menu icon 
		menuBtn.addEventListener('click', () => {
			navLinks.classList.toggle('active');
			menuBtn.classList.toggle('open');

		  // Toggle ARIA attribute
		  const isExpanded = menuBtn.classList.contains('open');
		  menuBtn.setAttribute('aria-expanded', isExpanded);
		});
	});
	const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
    });
});
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
    document.body.classList.toggle('no-scroll');

    // Toggle ARIA attribute
    const isExpanded = menuBtn.classList.contains('open');
    menuBtn.setAttribute('aria-expanded', isExpanded);
	});
});