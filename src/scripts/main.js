const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');

document.querySelector('.btn-prev').addEventListener('click', () => {
	if (document.querySelector('.w-slider-arrow-left').style.display !== 'none') {
		document.querySelector('.hero__left-arrow').click();
	}
});
document.querySelector('.btn-next').addEventListener('click', () => {
	if (document.querySelector('.w-slider-arrow-right').style.display !== 'none') {
		document.querySelector('.hero__right-arrow').click();
	}
});

const openNavbar = (event) => {
	event.stopPropagation();
	body.classList.toggle('no-scroll');
	navbar.classList.toggle('js-opened');
};

const changeHeader = () => {
	if (window.pageYOffset < 1) {
		navbar.classList.remove('js-scrolled');
	} else {
		navbar.classList.add('js-scrolled');
	}
};


const cangeServicesImage = (className) => {
	console.log(className);
	document.querySelector('.services__figure').classList.toggle(className);
};

const formBlocked = (event) => {
	event.preventDefault();
};

const checkOpenNavBar = () => {
	if (document.querySelector('.no-scroll')) {
		body.classList.remove('no-scroll');
		navbar.classList.remove('js-opened');
	}
};

navbar.addEventListener('click', checkOpenNavBar);
document.querySelectorAll('.header__nav-link').forEach((link) => link.addEventListener('click', openNavbar));

document.getElementById('header-form').addEventListener('submit', formBlocked);
document.getElementById('footer-form').addEventListener('submit', formBlocked);

document.querySelector('.header__burger').addEventListener('click', openNavbar);


document.querySelector('.services__link-licensing').addEventListener('mouseover', () => cangeServicesImage('services__figure_licensing'));
document.querySelector('.services__link-solutions').addEventListener('mouseover', () => cangeServicesImage('services__figure_solutions'));
document.querySelector('.services__link-support').addEventListener('mouseover', () => cangeServicesImage('services__figure_support'));
document.querySelector('.services__link-consultation').addEventListener('mouseover', () => cangeServicesImage('services__figure_consultation'));
document.querySelector('.services__link-licensing').addEventListener('mouseout', () => cangeServicesImage('services__figure_licensing'));
document.querySelector('.services__link-solutions').addEventListener('mouseout', () => cangeServicesImage('services__figure_solutions'));
document.querySelector('.services__link-support').addEventListener('mouseout', () => cangeServicesImage('services__figure_support'));
document.querySelector('.services__link-consultation').addEventListener('mouseout', () => cangeServicesImage('services__figure_consultation'));


window.addEventListener('load', changeHeader);
window.addEventListener('scroll', changeHeader);

