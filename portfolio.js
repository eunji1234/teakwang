$(function(){
    //slide
    var idx = 0;
        function movement(start,end,target){
             $('.slide li').eq(target).css({
                'left':start,
                'display':'block'
            }).animate({
                'left':end
            },700)
        }
        var slideInter = setInterval(function(){
            $('.port_next').click();
        },2500)

        $('.slide_arrow .port_next').click(function(){
            movement('0','-100%',idx);
            idx++
            movement('100%','0',idx);

            if(idx ==$('.slide li').length){
                idx = 0
                 movement("100%","0",idx);
            }
        })
        $('.slide_arrow .port_next').trigger('click')

       $('.slide_arrow .port_prev').click(function(){
           movement('0','100%',idx);
           idx--
           movement('-100%','0',idx);
           if(idx < 0){
               idx == 4
               movement('100%','0',idx);
           }
        })

    // slide button
    $('.btn_group a').click(function(){

    })





})
