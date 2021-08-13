function displayToggle(checkDisplay,elementIndex,callback){
    if($(window).scrollTop()>elementIndex){
        if (checkDisplay==false){
            callback()
            checkDisplay =true;
        }
        
    }
    $(window).scroll(function () { 
        if($(window).scrollTop()>elementIndex){
            if (checkDisplay==false){
               
                callback()
                checkDisplay =true;
            }
            
        }
     });
     
}