"use strict";
/* global $ */
$(document).ready(function(){

// $("#comp").click(function(){
// 	if ($("#comp").hasClass('col-md-3')) {
// 	  $( "#comp").addClass( "col-md-10").removeClass('col-md-3');
// 	} else {
// 	   $( "#comp").addClass( "col-md-3").removeClass('col-md-10');
// 	}
// 	});

//click function
$("#img1").click(function() {
	$("#bigimg").html("<img src='images/bigbull.jpg' class='img-responsive'>");
	$("#desc").html("This is a 3D Carving of a Bull from a Dry Foam Block");
});
$("#img2").click(function() {
	$("#bigimg").html("<img src='images/bigcolor.jpg' class='img-responsive'>");
	$("#desc").html("This a photoshop color collage that combined paintings and nature");
});
$("#img3").click(function() {
	$("#bigimg").html("<img src='images/bigpaint.jpg' class='img-responsive'>");
	$("#desc").html("This is the painted version of my photoshop color collage using acrylic paint");
});
$("#img4").click(function() {
	$("#bigimg").html("<img src='images/bigdrag.jpg' class='img-responsive'>");
	$("#desc").html("This is an art piece that used grids and was drawn using sharpie");
});
$("#img5").click(function() {
	$("#bigimg").html("<img src='images/bigfish.jpg' class='img-responsive'>");
	$("#desc").html("This is an art installation inside a building made with tape and saran wrap");
});
$("#img6").click(function() {
	$("#bigimg").html("<img src='images/bigmaze.jpg' class='img-responsive'>");
	$("#desc").html("This is a lazer-cut model of a 3D maze");
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

var top1 = 600;
// var top2 = 3000;
$(window).scroll(function() {
	if ($(this).scrollTop() > top1) {
		$("#comp img").attr("src","assets/icons/comp1.png");
	}
});
});