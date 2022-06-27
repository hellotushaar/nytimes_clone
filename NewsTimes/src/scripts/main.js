

// showing/hiding the side menu ---------------------------------------
const sideMenuOverlay = document.querySelector('.sideMenuOverlay');
const sideMenuToggler = document.querySelectorAll('.open-side-menu');
const sideMenu = document.querySelector('.side-menu');

// sideMenuToggler.addEventListener('click', function() {
// 	sideMenu.classList.add('active');
// 	sideMenuOverlay.classList.add('active');
// });

for (var i = 0; i < sideMenuToggler.length; i++) {
	sideMenuToggler[i].addEventListener('click', function() {
		sideMenu.classList.add('active');
		sideMenuOverlay.classList.add('active');
	});
}
sideMenuOverlay.addEventListener('click', function() {
	sideMenu.classList.remove('active');
	sideMenuOverlay.classList.remove('active');
});


// Showing the search box in the header section ----------------------
const hsbxToggler = document.querySelector('.hsbx-toggler');
const hsbx = document.querySelector('.hsbx');

hsbxToggler.addEventListener('click', function() {
	hsbx.classList.toggle('active');
});


// showing the fixed menu when scrolled down
var headerNav = document.querySelector(".header-nav");

window.onscroll = function() {
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		headerNav.classList.add("fixed");
	} else {
		headerNav.classList.remove("fixed");
	}
}