$(document).ready(function(){
    $("button:contains(+)").click(function(){
        $("dt:hover + dd").toggle();
        });
});
