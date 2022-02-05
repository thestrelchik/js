

const сounterElement = document.querySelector('.counter')
let start = 0 ;


function a(){
    сounterElement.textContent = start;
    start++;
}
setInterval(a,200);