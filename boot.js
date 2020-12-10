$(document).ready(function()
{
  $("#mark").animate({
    fontSize: '20px',marginBottom: '170px', marginTop: '20px'
  },2000);




  $("#hide").click(function () {
    $(".col-lg").toggle(1000);
    $
  });
  $("#show").click(function () {
    $("#read").toggle(1000);
    $
  });





    $('.next').on('click',function(){
      
       
        
      var currentImg = $('.active');
    
      var nextImg = currentImg.next();
      $(nextImg).fadeOut(1000,function(){
      

      if(nextImg.length){                    //ccheck the length of the image not equal to Zero

          currentImg.removeClass('active')                                    //.css('z-index',-10);
          nextImg.addClass('active');
          $(".active").fadeIn(1000);


      }

    });
    });


    $('.prev').on('click',function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        $(prevImg).fadeOut(1000,function(){
  
  
        if(prevImg.length){
            currentImg.removeClass('active');
            prevImg.addClass('active');
            $(".active").fadeIn(1000);
        }
  
      });
}); 
});
