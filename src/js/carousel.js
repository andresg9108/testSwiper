$(function(){
	let oSwiper = configSwiperSlider('.carousel1',
		1, 10,
		'.swiper-pagination',
		'.swiper-button-next',
		'.swiper-button-prev');

	resizeSlider(oSwiper, 4, 3, 1);
	$(window).resize(function(){
		resizeSlider(oSwiper, 4, 3, 1);
	});
});