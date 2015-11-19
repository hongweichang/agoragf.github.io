$(document).ready(function(){
    $( "p" ).addClass( "hidden" );
    $( "p" ).click(function(){
	$( this ).toggleClass("hidden");
        });
    $("h1").click(function(){
        $("h1").toggleClass("xx-small");
        });
   $("h1").click(function(){
        $("body").toggleClass("inverted");
        });
});
