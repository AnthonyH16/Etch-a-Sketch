let userInput;
const button = document.querySelector('#start');
button.addEventListener('click', () => {
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
          const grid = document.createElement('div');
            
            container.appendChild(grid);
            
        }
    }

}