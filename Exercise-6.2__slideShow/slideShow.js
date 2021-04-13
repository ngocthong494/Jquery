
$(document).ready(function() {

	var image, imageCounter = 0, imageCache = [];
	$("#slides img").each(function() {
		image = new Image;
		image.src = $(this).attr("src");
		image.alt = $(this).attr("alt");
		imageCache[imageCounter] = image;
		imageCounter++
	})

	imageCounter = 0;
	var nextImage;
		setInterval(function() {
			$("#caption").fadeOut(1000, "linear");
			$("#slide").fadeOut(1000, "linear" , function(){
				imageCounter = (imageCounter + 1) % imageCache.length;
				nextImage = imageCache[imageCounter];
				$("#slide").attr("src", nextImage.src).fadeIn(2000, "linear");					
				$("#caption").text(nextImage.alt).fadeIn(2000, "linear");
			})
		}, 5000)

	// $("#slide").click(function() {
	// 	if(timer1 != null) {
	// 		clearInterval(timer1);
	// 		timer1 = null;
	// 	} else {
	// 		timer1 = setInterval(slideShow, 3000);
	// 	}
	// });
});
