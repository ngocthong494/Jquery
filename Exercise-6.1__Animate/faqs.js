$(document).ready(function() {
	
	// runs when an h2 heading is clicked
    $("#faqs h2").click(function() {
		$(this).toggleClass("minus", "linear");
		$(this).next().toggle(1000, "linear", function () {
			$("p, li").attr("class", "red")
		});
		
    }); // end click
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: "-=200" }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			   .animate( { fontSize: "175%", left: "-=200" }, 1000, function() {
				   var newLeft = parseInt($(this).css("left"));
				   if(newLeft > 875) {
					   newLeft = 0;
				   }
				   $(this).animate( { fontSize: "175%", left:  newLeft }, 1000)
			   } );
	}); // end click
    
}); // end ready
