
$(document).ready(function () {
    // 
    $(window).scroll(function () { 
       //console.log($(window).scrollTop())
        if($(window).scrollTop() > 0)
            
            {   
                $('.navbar').addClass('navbar-scroll');
                $( ".navbar-scroll" ).animate({
                    height: "slideDown"
                }, 1000,function(){});
            }
        else
            {
                $('.navbar').removeClass('navbar-scroll');
            } 
          
    });
    
});