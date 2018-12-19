function xmas(){
    $.ajax({url: 'acttheme/js/snowfall.jquery.min.js', async: false, dataType: 'script'});
    $(document).ready(function() {
        var windowWidth = $(document).width();
        var santa = $('.santa');
        santa_right_pos = windowWidth + santa.width();
        santa.right = santa_right_pos;            
        function movesanta(){
        santa.animate({right : windowWidth +  santa.width()},15000, function(){
        santa.css("right","-500px");
        setTimeout(function(){
        movesanta();
        },60000);
        });
        }
        movesanta();
        });

    $('head').append('<link rel="stylesheet" href="/acttheme/css/xmas.css" type="text/css" />');
    $('body').append('<div class="santa"><img src="images/christmas-sled-source_ulp.gif" alt="" /></div>');
    $(document).snowfall({flakeCount : 150, maxSpeed : 1, maxSize : 5});
    if (window.innerWidth > 767){
        $('body').append('<div class="xmas-tree"><img src="images/Animated_Xmas-tree-animation.gif" alt=""></div>');         
    }
}
