$(function(){
    $('.gnb_menu li,.menu_bg').hover(function(){
        $('.menu_bg').stop().slideDown()
    },function(){
        $('.menu_bg').stop().slideUp()
    })

    // $('.hamburger').click(function(){
    //     console.log('asdf');
    //     if(true){
    //         $('.nav_menu').stop().animate({
    //         'right':'0'
    //         })
    //     }
    //     else{
    //         $('.wrap').click(function(){
    //             $('.nav_menu').stop().animate({
    //                 'right':'-240px'
    //             })
    //         })
    //     }
    // })


})
