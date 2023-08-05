let userInput;
const button = document.querySelector('#start');
button.addEventListener('click', () => {
    byeBye();
    userInput = prompt("How many?");
    makeDivs(userInput);
});

const container = document.querySelector('#container');

function makeDivs(){
    if (userInput > 100){
        alert("Use a number less than 100");
       
    }
    else if (userInput <= 100) {
        for (i = 0 ; i < userInput ; i++){
          const column = document.createElement('div');
          column.classList.add('column');
          for (j = 0 ; j < userInput ; j++){
            const row = document.createElement('div');
              row.classList.add('row');
              column.appendChild(row);
              row.addEventListener('mouseover', (event) => {
                
                event.target.style.backgroundColor = darkenColor();
                
            });
          }
            container.appendChild(column);
            
        }
        
    }

}

function byeBye(){
    const parent = document.querySelector('#container');
    while (parent.firstChild){
        parent.firstChild.remove();
    }
}

/*
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
*/

function darkenColor(){
    let color = [];
    for (let i = 0; i < 3; i++) {
        
        color.push(Math.floor(255 - ((10/100) * 255)));
    }  
    return 'rgb(' + color.join(', ') + ')';
    
}
/*
let r = Math.floor(color.slice(0,1) - ((10/100) * 255));
let g = Math.floor(color.slice(1,2) - ((10/100) * 255));
let b = Math.floor(color.slice(2,3) - ((10/100) * 255)); */
