$(document).ready(function(){
    $( "body > div" ).addClass( "hidden" );
    $( ".hidden" ).click(function(){
	$("*").removeClass("hidden");
        });
   

    $("h1").click(function(){
        $("h1").toggleClass("xx-small");
        $("body").toggleClass("inverted");
        });
});
