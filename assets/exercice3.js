/*
let times = [1, 2, 3];

setTimeout(() => {console.log(times.at('1'))}, 2 * 1000);
setTimeout(() => {console.log(times.at('2'))}, 3 * 1000);
setTimeout(() => {console.log(times.at('0'))}, 1 * 1000);
*/

    let times = [1, 2, 3];
    
    let timeoutId = setTimeout(function(){
        console.log(times[1]);
        
            let timeoutId = setTimeout(function(){
                console.log(times[2]);
                
                    let timeoutId = setTimeout(function(){
                        console.log(times[0]);
                        
                        }, 3000);
                        
                },2000);
                
        },1000);   