$(function(){
    $('.gnb_menu li,.menu_bg').hover(function(){
        $('.menu_bg').stop().slideDown()
    },function(){
        $('.menu_bg').stop().slideUp()
    })

    $('.hamburger').click(function(a){
        var navOpen;
        navOpen = $('.nav_menu').stop().animate({
            'right':'0'
        })
        console.log(navOpen);
        if(navOpen == true){
            init(navOpen);
        }
        else{
            $('.hamburger').click(function(){
                $('.nav_menu').stop().animate({
                    'right':'-240px'
                })
            })
        }
    })


})
