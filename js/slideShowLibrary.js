
  var display = function(number){
    $('.banner').css('marginLeft', number*(-100) +"%"); 
}   
function slider(divList,divPrev,divNext,time){
    var display = function(number){
        $(divList).css('marginLeft', number*(-100) +"%"); 
    }   
    let count =0;
    let len = $(divList).children.length +1
   
    let timer = setInterval(()=>{
        count++;
        if (count==len){
            count=0;
        }
        display(count);
      
        
    },time);
    let togglePrev = function(){
        clearInterval(timer)
        count--;
        if (count==-1){
            count = len-1;
        }
        display(count)
         timer = setInterval(()=>{
            count ++;
            if (count==len){
                count=0;
            }
            display(count);
            
        },time);
    }
    let toggleNext = function(){
        clearInterval(timer)
        count++;
        if (count==len){
            count = 0;
        }
        display(count)
         timer = setInterval(()=>{
            count ++;
            if (count==len){
                count=0;
            }
            display(count);
            
        },time);
    }

    $(divPrev).click(function (e) { 
        e.preventDefault();
        togglePrev()
        
    });
    $(divNext).click(function (e) { 
        e.preventDefault();
        toggleNext()
    });
}



$(document).ready(function () {

    let count = 0;
    var s;
    $('.banner_content').hide();
    display(count);
    Margin= count*(-100) +"%";
    $('.banner_content').slideDown(2000).delay(5000).slideUp(1000)
    timer = setInterval(function(){
        count++;
        $('.banner_content').slideDown(2000).delay(5000).slideUp(1000);
        if(count ==3)
            count=0
        display(count);    
    },9000)
    /// prev button event
    $('.banner_pn-prev').click(function (e) { 
        clearInterval(timer);
        $('.banner_content').stop();
        $('.banner_content').hide();
        count = count-1;
        if(count==-1){
            count=2;
        }
        Margin= count*(-100) +"%";
        $('.banner_content').slideDown(2000).delay(5000).slideUp(1000);
        display(count)

        timer = setInterval(function(){
            count++;
            $('.banner_content').slideDown(2000).delay(5000).slideUp(1000);
            if(count ==3)
                count=0
                
            display(count)
    
     
        },9000)
        
    });
    ///next button event
    $('.banner_pn-next').click(function (e) { 
        clearInterval(timer);
        $('.banner_content').stop();
        $('.banner_content').hide();
        count = count+1;
        if(count==3){
            count=0;
        }
        Margin= count*(-100) +"%";
        $('.banner_content').slideDown(2000).delay(5000).slideUp(1000);
        display(count)

        timer = setInterval(function(){
            count++;
            $('.banner_content').slideDown(2000).delay(5000).slideUp(1000);
            if(count ==3)
                count=0
            display(count)
    
        },9000)
        
    });
    slider('.slider-bottom__list','.slider-bottom__prev','.slider-bottom__next',5000)
});