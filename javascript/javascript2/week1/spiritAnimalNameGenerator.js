
const spiritAnimalNameList = [
    'Sensible Fuchsia Mocking Bird',
    'Steady Plumboa',
    'Purple Cottontail',
    'Contemplative Tea Beetle',
    'Big eyes rhinos',
    'the fullmoon wolf',
    'Cute blue cat',
    'the sharp shark',
    'long tailed monkey',
    'so cute white dove'
];

function spiritAnimalNameGenerator(name) {
    return `${spiritAnimalNameList[parseInt(Math.random() * 10)]}`;
}

function spiritAnimalOutput() {
    const nameInput = document.querySelector('#name');
    const message = document.querySelector('#spiritName');
    if (nameInput.value !== '') {
        message.innerHTML = `${nameInput.value} - ${spiritAnimalNameGenerator(nameInput)}`;
    } else {
        message.innerHTML = 'Provide a name:';
    }
}
const select = document.querySelector("#selectOption")
select.addEventListener("change",eventListenerOption)


const button = document.querySelector(".clickButton");
button.addEventListener("click", spiritAnimalOutput);


function eventListenerOption(){
    
    switch(select.value){

        case 'Click':
            button.addEventListener("click", spiritAnimalOutput);
            button.removeEventListener("mouseover",spiritAnimalOutput);
            break;

        case 'Hover':
            button.addEventListener("mouseover",spiritAnimalOutput);
            button.removeEventListener("click", spiritAnimalOutput);
            break;

        default:
            button.addEventListener("click", spiritAnimalOutput);
            button.removeEventListener("mouseover",spiritAnimalOutput);
    }
}