$(document).ready(function(){
			//click function
			$("#img1").click(function() {
				$('#bigimg').html("<img src='images/bigbull.jpg'>");
				$('#desc').html('This was a 3D Carving of a Bull from a Dry Foam Block');
			});
			$("#img2").click(function() {
				$('#bigimg').html("<img src='images/bigcolor.jpg'>");
				$('#desc').html('This a photoshop color collage that combined paintings and nature');
			});
			$("#img3").click(function() {
				$('#bigimg').html("<img src='images/bigpaint.jpg'>");
				$('#desc').html('This was the painted version of my photoshop color collage using acrylic paint');
			})
			$("#img4").click(function() {
				$('#bigimg').html("<img src='images/bigdrag.jpg'>");
				$('#desc').html('This was an art piece that used grids and was drawn using sharpie');
			});
			$("#img5").click(function() {
				$('#bigimg').html("<img src='images/bigfish.jpg'>");
				$('#desc').html('This was an art installation inside a building made with tape and saran wrap');
			});
			$("#img6").click(function() {
				$('#bigimg').html("<img src='images/bigmaze.jpg'>");
				$('#desc').html('This was a lazer-cut model of a 3D maze');
			});

			$('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
});