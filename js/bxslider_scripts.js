$(document).ready(function() {

$('.bxslider.top-slider').bxSlider({
	  minSlides: 1,
	  maxSlides: 1,
	  pagerCustom: '#slider_navigation'
	});

$('.bxslider.news-slider').bxSlider({
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 340,
	  pagerCustom: '#news_navigation',
	  nextText: "",
	  prevText: ""
	});
$('.bxslider.visualization-slider').bxSlider({
	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 195,
	  auto: true,
	  nextText: "",
	  prevText: ""
	});
$('.bxslider.photos-slider').bxSlider({
	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 195,
	  auto: true,
	  nextText: "",
	  prevText: ""
	});
$('.bxslider.single-slider').bxSlider({
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 263,
	  nextText: "",
	  prevText: "",
	  pagerCustom: '#single_navigation'
	});
$('.bxslider.apartment-popup-slider').bxSlider({
	  minSlides: 1,
	  maxSlides: 1,
	  slideWidth: 797,
	  auto: true,
	  nextText: "",
	  prevText: ""
	});

});