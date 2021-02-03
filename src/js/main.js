$(document).ready(function () {

	$("img.icon").click(function () {
		$(".ul-liste").slideToggle();
		$('.ul-liste a').click(function () {
			$('.ul-liste').slideUp();
		});
	});

	$(".ul-liste a").on('click', function () {
		$("html, body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 64
		}, 1000);
	});

	$(".home a").on('click', function () {
		$("html, body").animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 64
		}, 1000);
	})
})