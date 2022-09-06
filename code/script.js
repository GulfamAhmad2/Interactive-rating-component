const card = document.querySelector('.card');
const cardResults = document.querySelector('.card-results');
const button = document.querySelector('.submit');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const rateNum = document.querySelector('.rate-num')

one.addEventListener('click', () =>{
    rateNum.innerHTML = 1;
    one.style.background = "#7c8798"
    two.style.background = "#959eac11"
    three.style.background = "#959eac11"
    five.style.background = "#959eac11"
    four.style.background = "#959eac11"

    one.style.color = "white"
})
two.addEventListener('click', () =>{
    rateNum.innerHTML = 2;
    one.style.background = "#959eac11"
    three.style.background = "#959eac11"
    five.style.background = "#959eac11"
    four.style.background = "#959eac11"
    two.style.background = "#7c8798"
    two.style.color = "white"
})
three.addEventListener('click', () =>{
    rateNum.innerHTML = 3;
    three.style.background = "#7c8798"
    one.style.background = "#959eac11"
    two.style.background = "#959eac11"
    five.style.background = "#959eac11"
    four.style.background = "#959eac11"
    three.style.color = "white"
})
four.addEventListener('click', () =>{
    rateNum.innerHTML = 4;
    four.style.background = "#7c8798"
    one.style.background = "#7959eac11c8798"
    two.style.background = "#959eac11"
    three.style.background = "#959eac11"
    five.style.background = "#959eac11"
    four.style.color = "white"
})
five.addEventListener('click', () =>{
    rateNum.innerHTML = 5;
    five.style.background = "#7c8798"
    one.style.background = "#959eac11"
    two.style.background = "#959eac11"
    three.style.background = "#959eac11"
    four.style.background = "#959eac11"
    five.style.color = "white"
})

button.addEventListener('click', (e) =>{
    cardResults.classList.add('active');
    card.style.display = "none"
})