// //////// sliders
const swiperMain = new Swiper('.main-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.main__slider .swiper-button-next',
		prevEl: '.main__slider .swiper-button-prev',
	},
	pagination: {
		el: '.main__slider .swiper-pagination',
		clickable: true,
	},
});
const swiperCleaning = new Swiper('.cleaning-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.cleaning .swiper-button-next',
		prevEl: '.cleaning .swiper-button-prev',
	},
	breakpoints: {
		320: { spaceBetween: 15, slidesPerView: 1.4 },
		550: { spaceBetween: 15, slidesPerView: 2 },
		769: { spaceBetween: 15, slidesPerView: 3 },
		1025: {
			slidesPerView: 1.9,
		},
	},
});
const swiperNews = new Swiper('.news-swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.news__slider .swiper-button-next',
		prevEl: '.news__slider .swiper-button-prev',
	},
	breakpoints: {
		320: { spaceBetween: 15, slidesPerView: 1.5 },
		550: { spaceBetween: 15, slidesPerView: 1.8 },
		700: { spaceBetween: 15, slidesPerView: 2 },
		1024: {
			slidesPerView: 3,
		},
	},
});

// tabs
const tabsPopular = document.querySelector('.popular__wrapper');

if (tabsPopular) {
	const tabsBtn = tabsPopular.querySelectorAll('.popular__tab ');

	tabsPopular.addEventListener('click', (e) => {
		if (e.target.classList.contains('popular__tab')) {
			const tabsPath = e.target.dataset.tabsPath;
			tabsBtn.forEach((el) => {
				el.classList.remove('active');
			});
			document
				.querySelector(`[data-tabs-path="${tabsPath}"]`)
				.classList.add('active');
			tabsHandler(tabsPath);
		}
	});
}

const tabsHandler = (path) => {
		const tabsContent = document.querySelectorAll('.popular__content');
		tabsContent.forEach((el) => {
				el.classList.remove('active');
		});
		document
				.querySelector(`[data-tabs-target="${path}"]`)
				.classList.add('active');
};

// map

function init() {
	let map = new ymaps.Map('contacts-map', {
			center: [56.021365, 37.005553],
			zoom: 10,
			controls: [],
		}),
		myPlacemark = new ymaps.Placemark(
			[56.021365, 37.005553],
			{
				hintContent: 'Собственный значок метки',
				balloonContent:
					'МО, Солнечногорский р-н, д. Лыткино, с 2, Технопарк Лыткино',
			},
			{
				iconLayout: 'default#image',

				iconImageHref: '/files/img_mainpage24/map-icon.svg',
			}
		);

		map.geoObjects.add(myPlacemark);

		map.controls.remove('geolocationControl'); // удаляем геолокацию
		map.controls.remove('searchControl'); // удаляем поиск
		map.controls.remove('trafficControl'); // удаляем контроль трафика
		map.controls.remove('typeSelector'); // удаляем тип
		map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		map.controls.remove('zoomControl'); // удаляем контрол зуммирования
		map.controls.remove('rulerControl'); // удаляем контрол правил
		map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
const contacts = document.querySelector('.contacts');
if (contacts) {
		ymaps.ready(init);
}

// search

const searchIconBtn = document.querySelector('.header__search-icon');
if (searchIconBtn) {
	const close = document.querySelector('.header__search-close');
	searchIconBtn.addEventListener('click', () => {
		const searchAbsolute = document.querySelector(
			'.header__search-absolute'
		);
		searchAbsolute.classList.add('active');
	});
	close.addEventListener('click', () => {
		const searchAbsolute = document.querySelector(
			'.header__search-absolute'
		);
		searchAbsolute.classList.remove('active');
	});
}

// burger

const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const header = document.querySelector('.header__menu-mobile');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	body.classList.toggle('active');
	header.classList.toggle('active');
});

// accordion

const accordions = document.querySelectorAll('.accordion .nav__link-mob');
accordions.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		const self = e.currentTarget;
		const content = self.nextElementSibling;

		self.parentNode.classList.toggle('open');
		if (self.parentNode.classList.contains('open')) {
			el.setAttribute('aria-expanded', true);
			content.setAttribute('aria-hidden', false);
			content.style.maxHeight = content.scrollHeight + 'px';
		} else {
			el.setAttribute('aria-expanded', false);
			content.setAttribute('aria-hidden', true);
			content.style.maxHeight = null;
			if (content.classList.contains('active')) {
				content.classList.remove('active');
			}
		}
	});
});
