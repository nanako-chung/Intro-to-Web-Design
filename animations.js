$(document).ready(function(){
    $(".column").hide(500).show(500);
    $("#nav").css({color: 'blue'});
    $("#footer").html('Click here to bolden the footer!');
    $("#footer").on('click', function(){
        $("#footer").css({fontWeight: 'bold'});
    });
});