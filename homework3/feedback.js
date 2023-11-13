'use strict';

const btnEl = document.querySelector('.feedback_btn');
const inputProductName = document.querySelector('.productname');
const inputFeedback = document.querySelector('.text_feedback');
const messageEl = document.querySelector('.message');

btnEl.addEventListener('click', () => {
    checkForm();
    addFeedback(inputProductName.value, inputFeedback.value); 
    inputProductName.value = '';
    inputFeedback.value = '';
});