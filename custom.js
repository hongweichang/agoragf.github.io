$(document).ready(function(){
    $( "p:last-child" ).addClass( "xx-small" );
    $("p").click(function(){
        $("p:hover").toggleClass("xx-small");
        });
});
