$(document).ready(function(){
    $( "dd > dl" ).addClass( "hidden" );
    $("html").one("click", function(){
	$("dd > dl").removeClass("hidden");
        });
   

    $("h1").click(function(){
        $("body").toggleClass("inverted");
        });
});
