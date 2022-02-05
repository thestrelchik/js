

const сounterElement = document.querySelector('.counter')
let start = 0 ;


function a(){
    сounterElement.textContent = start;
    start++;
}
setInterval(a,200);


// 2 вариант
// const counterElement = document.querySelector('.counter');
// let counter = 0;


// setInterval(function() {
//     counter++;
//     console.log(counter);
// }, 1000)

// setInterval(function() {
//     counterElement.innerText = counter;
// }, 1000)
