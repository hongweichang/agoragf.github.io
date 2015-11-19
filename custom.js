$(document).ready(function(){
    $("p").click(function(){
        $("p:hover + p").toggle();
        });
});
