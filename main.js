'use strict';
const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answers = ['Tak', 'Nie', 'Być może', 'To by się zgadzało'];


const activeBall = () => {
    answer.textContent = '';

    ball.classList.add('shake-animaton');
    setTimeout(checkAnswer, 1000);
}

const checkAnswer = () => {
    const lastLetter = input.value.slice(-1);
    
    if(input.value !== '' && lastLetter === '?') {
        drawAnswer();        
    }else if(input.value !== '' && lastLetter !== '?' ) {
        showError('Pytanie na końcu powinno zawierać "?"');
    }else {
        showError('Nie podałeś pytania!');
    }
    ball.classList.remove('shake-animaton');
}

const showError = errorText => {
    answer.textContent = '';
    error.textContent = errorText;
}

const drawAnswer = () => {
    showError('');
    const draw = Math.floor(Math.random() * 4, 1);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answers[draw]}`;
}

ball.addEventListener('click', activeBall);