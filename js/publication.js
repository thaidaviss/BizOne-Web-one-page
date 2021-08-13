

function sliderPublic(divList,divPrev,divNext,time){
    let count =0;
    let len = $(divList).children().length
    console.log(len)
    let percent =200/len;
    
    function display(count){
        $(divList).css('marginLeft', count*(- percent) +"%")
    
    }
   
    // let display = function(number){
        
    //   

        
    // }
    let timer = setInterval(()=>{
        count++;
        if (count==len-2){
            count=0;
        }
        display(count);
      
        
    },time);
    let togglePrev = function(){
        clearInterval(timer)
        count--;
        if (count==-1){
            count = len-3;
        }
        display(count)
         timer = setInterval(()=>{
            count ++;
            if (count==len-2){
                count=0;
            }
            display(count);
            
        },time);
    }
    let toggleNext = function(){
        clearInterval(timer)
        count++;
        if (count==len-2){
            count = 0;
        }
        display(count)
         timer = setInterval(()=>{
            count ++;
            if (count==len-2){
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
    sliderPublic(".publications__list",'.publications__btn--left','.publications__btn--right',5000)
});