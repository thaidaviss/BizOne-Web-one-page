function callBackService(){
            list_SI = $('.service__item')
            for(var i=0;i<list_SI.length;i++){
                list_SI[i].style["padding-top"] = -2*(i+2)  +'rem';
                $(list_SI[i]).animate({
                    paddingTop: "2rem",
                    opacity: "1",
                },(i+1)*300);
            }

}

function callBackUniques(){
    let list_SI = $('.uniques .container').children();
            $(list_SI[0]).animate({
                    marginLeft: "-13rem",
                    opacity: "1",
                },1000);
                $(list_SI[1]).animate({
                    marginLeft: "0rem",
                    opacity: "1",
                },1000);
            checkDisplayUniques =true;
} 

function callBackCount(){
    count(
        [
            {start:60,end: 125,div:'.count-interactive__count-1'},
            {start:300,end: 865,div:'.count-interactive__count-2'},
            {start:200,end: 510,div:'.count-interactive__count-3'},
            {start:200,end: 1350,div:'.count-interactive__count-4'}
        ]);
           let list_SI = $('.count-interactive').children();
            for(var i=0;i<list_SI.length;i++){    
                $(list_SI[i]).animate({
                    marginTop: "0",
                    opacity: "1",
                },(i+1)*300);
            }
   
}   

function callbackPerformance(){
    listChartCircle.forEach(element => {
        spinCircle(element.divProcess,element.divPercent,element.percent)
            
    }); 
}

function CallBackWeDo(){
    let list_SI = $('.we-do__item');
    for(var i=0;i<list_SI.length;i++){    
        $(list_SI[i]).animate({
            marginTop: "0",
            opacity: "1",
        },(i+1)*300);
    }
}
function callbackContact(){
    let list_SI = $('.contact__list').children();
            $(list_SI[0]).animate({
                    left: "0",
                    opacity: "1",
                },1000);
                $(list_SI[1]).animate({
                    right: "0",
                    opacity: "1",
                },1000);
            checkDisplayContact =true;
} 

$(document).ready(function () {
    
    let checkDisplayService =false;
    let checkDisplayUniques =false;
    let checkCount =false;
    let checkPerformance = false;
    let checkWeDo = false;
    let checkDisplayContact = false;
    listChartCircle = 
       [ 
           {divProcess:'.performance__item-1 .process',divPercent:'.performance__item-1 .performance_percent',percent:86},
           {divProcess:'.performance__item-2 .process',divPercent:'.performance__item-2 .performance_percent',percent:90},
           {divProcess:'.performance__item-3 .process',divPercent:'.performance__item-3 .performance_percent',percent:75},
           {divProcess:'.performance__item-4 .process',divPercent:'.performance__item-4 .performance_percent',percent:79},
           {divProcess:'.performance__item-5 .process',divPercent:'.performance__item-5 .performance_percent',percent:92}, 
        ];
       
    displayToggle(checkDisplayService,280,callBackService);
    displayToggle(checkDisplayUniques,1450,callBackUniques);
    displayToggle(checkCount,2040,callBackCount)
    displayToggle(checkPerformance,2500,callbackPerformance);
    displayToggle(checkWeDo,2900,CallBackWeDo);
    displayToggle(checkDisplayContact,3200,callbackContact);
});