
$(document).ready(function() {
	$("#image_rollovers img").map(function() {
		
		var oldURL = $(this).attr("src");
		var newURL = $(this).attr("id");
		
		$(this).hover(
			function() {
				$(this).attr("src", newURL)
			},
			function() {
				$(this).attr("src", oldURL)
			}
		);
	})
});