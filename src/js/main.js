$(document).ready(function () {

	$("img.icon").click(function () {
		$(".ul-liste").slideToggle();
		$('.ul-liste a').click(function () {
			$('.ul-liste').slideUp();
		});
	});

	$(window).scroll(function () {
		var sc = $(this).scrollTop();
		if (sc > 50) {
			$('header').addClass('sticky');
		} else {
			$('header').removeClass('sticky');
		}
	});

	$(".ul-liste a").on('click', function () {
		$("html, body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 120
		}, 1000);
	});
})