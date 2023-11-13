'use strict';

const feedbacksKey = 'feedbacks';

function addFeedback(productname, feedbacktext) {
    const feedbacksArr = getFeedbacks();
    feedbacksArr.push({productname, feedbacktext});
    saveFeedbacks(feedbacksArr);
}

function getFeedbacks() {
    const data = localStorage.getItem(feedbacksKey);
    if (data === null) {
        return [];
    } 
    return JSON.parse(data);    
}

function checkForm() {
    if (inputProductName.value === '' && inputFeedback.value === '') {
        throw new Error(alert('Заполните поля'))
    }
}

function saveFeedbacks(feedbacksArr) {
    const json = JSON.stringify(feedbacksArr); 
    localStorage.setItem(feedbacksKey, json);
}