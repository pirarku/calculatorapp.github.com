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
