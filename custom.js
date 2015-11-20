$(document).ready(function(){
    $( "body > div" ).addClass( "hidden" );
    $("*").one("click", function(){
	$("body > div").removeClass("hidden");
        });
   

    $("h1").click(function(){
        $("h1").toggleClass("xx-small");
        $("body").toggleClass("inverted");
        });
});
