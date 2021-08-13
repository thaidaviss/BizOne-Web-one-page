function count(option){
    let min = option[0].end -option[0].start;
    let rules_arr = [];
    for(var i in option)
    {   
        counts = option[i].end - option[i].start;
        rules_arr.push(counts)
        if (counts<min){
            min = counts
        }
    }
    rules_arr=rules_arr.map(function(x){
         return parseInt(x/min);
    })
    let timer = setInterval(function(){
        let check =true;
        for(var i in option){
            if(option[i].start<option[i].end){
                if (option[i].start+ rules_arr[i] >option[i].end){
                    option[i].start = option[i].end;
                }
                else{
                    option[i].start = option[i].start + rules_arr[i]
                }
                $(option[i].div).text(option[i].start)
                check =false;
                }
        }  
        if(check ==true){
            clearInterval(timer)
        }  

    },30)
}
