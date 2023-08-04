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
                event.target.style.backgroundColor ="orange";
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

