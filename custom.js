$(document).ready(function(){
    $("button:contains(?)").click(function(){
        $("button:hover + p").toggle();
        });
});
