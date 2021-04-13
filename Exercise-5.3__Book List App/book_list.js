$(document).ready(function() {
    $("#categories h2").click(function() {
        $(this).toggleClass("minus");
        $(this).next().toggle();
    });

    $("#web_images a, #java_images a, #net_images a").click(function(evt) {
        $("#image").attr("src", $(this).attr("href"))
        evt.preventDefault();
    });
});