import {Modal}  from './modal.js'

import {AlertError} from './alert-error.js'

import {calculateIMC,notNumber } from './utils.js'
// ======= VARIAVEIS ==========
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal .close')


form.onsubmit = (event) => {
    event.preventDefault();
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
    
        AlertError.open()
        return
    }
    AlertError.close()

    const result = calculateIMC(weight, height);

    displayResultMessage(result)
}

inputHeight.oninput = () => {AlertError.close()}
inputWeight.oninput = () => {AlertError.close()}

        
    


function displayResultMessage(result){
    const message = `Seu IMC é de ${result}` 
    Modal.message.innerText = message
    Modal.open();
}