$(document).ready(function(){
    $( "p, body > div" ).addClass( "hidden" );
    $( "p" ).click(function(){
	$( this ).toggleClass("hidden");
        $( this ).parent().removeClass("hidden");
        $( this ).parent().parent().removeClass("hidden");
        });
    $( "body > p" ).click(function(){
	$( this ).next().toggleClass("hidden");
        });5
   

    $("h1").click(function(){
        $("h1").toggleClass("xx-small");
        $("body").toggleClass("inverted");
        });
});
