'use strict';

const button = document.querySelector('button');

const parent = document.querySelector('.balls');

const addElement = (elem, number) => {
    const element = document.createElement(elem);
    element.textContent = number;
    parent.appendChild(element);
}

button.addEventListener('click', () => {

    const howManyNumbers = 6;

    parent.innerText = '';

    const maxValue = 42;

    const tabRandomNumbers = [];

    const tabFinalNumbers = [];

    for(let i = 0; i < howManyNumbers; i++){
        const randomNumber = Math.floor(Math.random () * maxValue + 1)
        tabRandomNumbers.push(randomNumber);

        if(tabFinalNumbers.indexOf(randomNumber) === -1){
            tabFinalNumbers.push(randomNumber);
            addElement('div', randomNumber);

        }else{
            i--;
            continue;
        }

    
    }

    console.log(tabRandomNumbers)

});

const tab = [9,4,6,7];
console.log(tab.indexOf(9))
console.log(Math.random)