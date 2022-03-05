$(function(){
   $(window).on('scroll',function(){
      var scrollTop = $(window).scrollTop();

      if(scrollTop > 500) {
         $('#backToTop').fadeIn(500);
      }else{
         $('#backToTop').fadeOut(500);
      }

   })

   $('#backToTop').on('click',function(){
      $('html,body').animate({
          scrollTop: 0
      }, 500)
   })
})