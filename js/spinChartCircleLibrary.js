function spinCircle(divProcess,divPercent,percent){
    
    strokeOffSet= $(divProcess).css('stroke-dashoffset').split("px")[0];
    strokeArray = $(divProcess).css('stroke-dasharray').split("px")[0];
    offset = parseInt(strokeOffSet/100);
    let temp=strokeOffSet ;
    let i =0;
    let timer = setInterval(function(){
            temp = temp-offset;
            $(divPercent).text((i+1)+"%")
            $(divProcess).css('stroke-dashoffset',temp)
            i++;
            if(i>=percent){
                clearInterval(timer);
            }
    },10)
       
}

