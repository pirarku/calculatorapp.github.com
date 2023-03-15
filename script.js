let themenumber = document.querySelectorAll('.num');
let themeselector = document.querySelectorAll('.ball');
let clickableselector = document.getElementsByClassName('circle')[0];
let bodytheme = document.querySelector('body');
let clickhandler = 1;
let clicks = 0;

//themes
let themes = ()=>{
    themeselector.forEach(value =>{
        value.classList.remove('active');
    });
    themeselector[clickhandler-1].classList.add('active');
    switch(clickhandler){
        case 1:
            bodytheme.classList.remove('body2');
            bodytheme.classList.remove('body3');
            break;
        case 2:
            bodytheme.classList.add('body2');
            bodytheme.classList.remove('body3');
            break;
        case 3:
            bodytheme.classList.add('body3');
            bodytheme.classList.remove('body2');
            break;
    }
};

themenumber.forEach(count =>{
    count.addEventListener('click',()=>{
        clickhandler = parseInt(count.dataset.value);
        themes();
    });
});

clickableselector.addEventListener('click', ()=>{
      if(clickhandler === 3){
        clickhandler = 0;
      }
      clickhandler++;
      themes();
});
//end themes


//--keys section--
let keys = document.querySelectorAll('.keys');
let screen = document.getElementById('screen');
let screnprev = document.getElementById('previous');


let numbers = '';
let operators = '';




keys.forEach(key=>{
    key.addEventListener('click',(e)=>{
        let check = key.dataset.set;
        screen.textContent = numbers;

        if(check === 'delete'){
            if(numbers === ''){
                screnprev.textContent = numbers;
            }else if(numbers === 'error'){
                 numbers = '';
                 screen.textContent  = numbers;
                 screnprev.textContent  = numbers;
            }
            numbers = numbers.substring(0, numbers.length-1);
            screen.textContent  = numbers; 
        }
        if(check === 'number'){
            numbers += key.textContent;
            screen.textContent  = numbers;
            
        }
        if(check === 'reset'){
            numbers = '';
            operators = '';
            screen.textContent  = numbers;
            screnprev.textContent = previous;
        }
        if(check === 'operator'){
            operators = key.textContent; 
            numbers += operators;
         
            screen.textContent  = numbers ;
            console.log(numbers);  
           
            
        }
        if(check === 'equals'){
            screnprev.textContent  = numbers;
            try{
                let change = numbers.replace('x', '*');
                numbers = eval(change).toString();
                screen.textContent  = numbers ;
            }catch{
                numbers = 'error';
                screen.textContent = numbers ;
                screnprev.textContent  = numbers;

            }
            
            
        }
        console.log(numbers);
        
     });

});

// keys.forEach(key=>{
//     key.addEventListener('click',(e)=>{
//         let check = key.dataset.set;
//         screen.value = numbers;

//         if(check === 'delete'){
//             if(numbers === ''){
//                 screnprev.value = numbers;
//             }else if(numbers === 'error'){
//                  numbers = '';
//                  screen.value = numbers;
//                  screnprev.value = numbers;
//             }
//             numbers = numbers.substring(0, numbers.length-1);
//             screen.value = numbers; 
//         }
//         if(check === 'number'){
//             numbers += key.textContent;
//             screen.value = numbers;
            
//         }
//         if(check === 'reset'){
//             numbers = '';
//             operators = '';
//             screen.value = numbers;
//             screnprev.value = previous;
//         }
//         if(check === 'operator'){
//             operators = key.textContent; 
//             numbers += operators;
//             screen.value = numbers ;
//             console.log(numbers);  
           
            
//         }
//         if(check === 'equals'){
//             screnprev.value = numbers;
//             try{
//                 let change = numbers.replace('x', '*');
//                 numbers = eval(change).toString();
//                 screen.value = numbers ;
//             }catch{
//                 numbers = 'error';
//                 screen.value = numbers ;
//                 screnprev.value = numbers;

//             }
            
            
//         }
//         console.log(numbers);
        
//      });

// });

















// keys.forEach(key=>{
//     key.addEventListener('click',(e)=>{
//         let check = key.dataset.set;
//         screen.value = numbers;

//         if(check === 'delete'){
//             numbers = numbers.substring(0, numbers.length-1);
//             screen.value = numbers;
//             if(numbers === ''){
//                 operators = '';
//                 previous = [];
//                 screnprev.value = previous;
//             }
//         }
//         if(check === 'number'){
//             numbers += key.textContent;
//             screen.value = numbers;
            
//         }
//         if(check === 'reset'){
//             numbers = '';
//             operators = '';
//             previous = [];
//             screen.value = numbers;
//             screnprev.value = previous;
//         }
//         if(check === 'operator'){
//             operators = key.textContent; 
//             previous.push(numbers);
//             numbers = '';
//             screen.value = numbers;
//             if(operators !== 'x'){
//                 screnprev.value = operators +' '+ previous[0];
                
//             }else{   
//                 screnprev.value = previous[0] + '' + operators;
//             }     
           
            
//         }
//         if(check === 'equals'){
//             console.log('equal');
//             switch(operators){
//                 case '+':
//                     screen.value = parseFloat(previous[0]) + parseFloat(numbers);
//                     numbers = '';
//                     operators = '';
//                     previous = [];
//                     screnprev.value = previous;
//                     break;
//                 case '-':
//                     screen.value = parseFloat(previous[0]) - parseFloat(numbers);
//                     numbers = '';
//                     operators = '';
//                     previous = [];
//                     screnprev.value = previous;
//                     break;
//                 case '/':
//                     screen.value = parseFloat(previous[0]) / parseFloat(numbers);
//                     numbers = '';
//                     operators = '';
//                     previous = [];
//                     screnprev.value = previous;
//                     break;
//                 case 'x':
//                     screen.value = parseFloat(previous[0]) * parseFloat(numbers);
//                     numbers = '';
//                     operators = '';
//                     previous = [];
//                     screnprev.value = previous;
//                     break;
//             }
//         }
        
//      });

// });






