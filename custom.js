$(document).ready(function(){
    $( "p:nth-child(n+3)" ).addClass( "xx-small" );
    $("h1,p").click(function(){
        $("p:hover,h1:hover").toggleClass("xx-small");
        });
   $("h1").click(function(){
        $("body").toggleClass("inverted");
        });
});
