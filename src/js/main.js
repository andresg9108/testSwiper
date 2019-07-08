function configSwiperSlider(selector, views, space, pag, btnNext, btnPrev){
	var swiper = new Swiper(selector, {
	  slidesPerView: views,
	  spaceBetween: space,
	  loop: true,
	  pagination: {
	    el: pag,
	    clickable: true,
	  },
	  navigation: {
	    nextEl: btnNext,
	    prevEl: btnPrev,
	  },
	});

	return swiper;
}

function resizeSlider(swiper, pc, tablet, mobile){
	var windowWidth = window.innerWidth;
	if(windowWidth >= 1000){
		swiper.params.slidesPerView = pc;
	}else if(windowWidth >= 770){
		swiper.params.slidesPerView = tablet;
	}else{
		swiper.params.slidesPerView = mobile;
	}

	swiper.update();
}