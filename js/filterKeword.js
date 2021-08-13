function filterKey(time){
    const listKey = $('.last-project__nav-item');
    const listItem = $('.last-project__item')
    listKey1 = listKey.map((index,item)=> {return $(item).text()})
    for(var element of listKey){
        $(element).click(function (e) { 
            e.preventDefault();
            for(var item of listKey){
                $(item).removeClass('last-project__nav-active');
                
            }
            $(this).addClass('last-project__nav-active');
            if ($(this).text()=="All"){
                for(var item of listItem){
                    if ($(item).hasClass('last-project__item-small')){
                        $(item).animate({  
                            width: "50%"  
                        },time);
                    }
                    else
                        $(item).animate({
                            width: "100%"  
                        },time);
                }
            }
            else{
                for(var item of listItem){
                    if ($(item).hasClass($(this).text())){
                            
                        $(item).animate({
                                width: "100%"  
                            },time);
                    }
                    else
                        $(item).animate({
                            width: "0"
                        },time);
                }
            }
        });
    };
}
$(document).ready(function () {
    filterKey(500)
}); 