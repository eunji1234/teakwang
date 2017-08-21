$(function(){
    //slide
    var idx = 0;
        function movemuent(start,end,target){
             $('.slide li').eq(target).css({
                'left':start,
                'display':'block'
            }).animate({
                'left':end
            },700)
        }

        $('.slide_arrow .port_next').click(function(){
            movemuent('0','-100%',idx);
            idx++
            movemuent('100%','0',idx);

            if(idx ==$('.slide li').length){
                idx = 0
                 movemuent("100%","0",idx);
            }
        })
        $('.slide_arrow .port_next').trigger('click')

       $('.slide_arrow .port_prev').click(function(){
           movemuent('0','100%',idx);
           idx--
           movemuent('-100%','0',idx);
           if(idx < 0){
               idx == 4
               movemuent('100%','0',idx);
           }
        })

    // slide button
    $('.btn_group a').click(function(){

    })





})
