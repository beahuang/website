"use strict";
/* global $ */
$(document).ready(function(){

	$("#slider").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

	$("#txt").fadeIn(1500);

	$(".icon").click(function() {
		$('.nav').slideToggle('500');
	});

	var sections = $('.section'),
	nav = $('.link');

	$(window).scroll(function() {
		var currentPosition = $(this).scrollTop();
		nav.removeClass('selected');

		sections.each(function() {
			var top = $(this).offset().top,
			bottom = top + $(this).height();

			if (currentPosition >= top && currentPosition <= bottom) {
				$('a[href="#' + this.id + '"]').addClass('selected');
			}

		});

		if($(window).scrollTop() + 100 > $(document).height() - $(window).height() ){
			nav.removeClass('selected');
			$('a[href="#contactSec"]').addClass('selected');
		}
	});

//click function
$(".img1").click(function() {
	$("#bigimg").html("<img src='assets/images/bigbull.jpg' class='img-responsive'>");
	$("#desc").html("This is a 3D Carving of a Bull from a Dry Foam Block");
});
$(".img2").click(function() {
	$("#bigimg").html("<img src='assets/images/bigcolor.jpg' class='img-responsive'>");
	$("#desc").html("This a photoshop color collage that combined paintings and nature");
});
$(".img3").click(function() {
	$("#bigimg").html("<img src='assets/images/bigpaint.jpg' class='img-responsive'>");
	$("#desc").html("This is the painted version of my photoshop color collage using acrylic paint");
});
$(".img4").click(function() {
	$("#bigimg").html("<img src='assets/images/bigdrag.jpg' class='img-responsive'>");
	$("#desc").html("This is an art piece that used grids and was drawn using sharpie");
});
$(".img5").click(function() {
	$("#bigimg").html("<img src='assets/images/bigfish.jpg' class='img-responsive'>");
	$("#desc").html("This is an art installation inside a building made with tape and saran wrap");
});
$(".img6").click(function() {
	$("#bigimg").html("<img src='assets/images/bigmaze.jpg' class='img-responsive'>");
	$("#desc").html("This is a lazer-cut model of a 3D maze");
});
$(".img7").click(function() {
	$("#bigimg").html("<img src='assets/images/hoodie.jpg' class='img-responsive'>");
	$("#desc").html("Front-side sweatshirt design for a club Ultimate Frisbee Team");
});
$(".img8").click(function() {
	$("#bigimg").html("<img src='assets/images/hoodie2.jpg' class='img-responsive'>");
	$("#desc").html("Back-side sweatshirt design for a club Ultimate Frisbee Team");
});

$("a[href*=#]:not([href=#])").click(function() {
	if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
		if (target.length) {
			$("html,body").animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

var offset = 150;
var duration = 500;
$(window).scroll(function() {
	if ($(this).scrollTop() > offset) {
		$(".back-to-top").fadeIn(duration);
	} else {
		$(".back-to-top").fadeOut(duration);
	}
});
}); 