$(document).ready(function(){
    $( "dd > dl" ).addClass( "hidden" );
    $("html").one("click", function(){
	$("dd > dl").removeClass("hidden");
        });
});
