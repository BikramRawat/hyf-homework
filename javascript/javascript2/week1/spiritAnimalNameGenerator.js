
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
    const getName = document.querySelector('#name');
    const message = document.querySelector('#spiritName');
    if (getName.value !== '') {
        message.innerHTML = `${getName.value} - ${spiritAnimalNameGenerator(getName)}`;
    } else {
        message.innerHTML = 'Provide a name:';
    }
}
const select = document.querySelector("#selectOption")
select.addEventListener("change",eventListenerOption)


const button = document.querySelector(".clickButton");
button.addEventListener("click", spiritAnimalOutput);


function eventListenerOption()
{
    if(select.selectedIndex == 1)
    {
        button.addEventListener("click", spiritAnimalOutput);
        button.removeEventListener("mouseover",spiritAnimalOutput);

    }
    else if(select.selectedIndex == 2)
    {
        button.addEventListener("mouseover",spiritAnimalOutput);
        button.removeEventListener("click", spiritAnimalOutput);
        // on mouseover the spriritAnimalOutput function is not working, i dont know why?? 
        //when we hover the mouse over the button, the function is not running
    }
    else
    {
        button.addEventListener("click", spiritAnimalOutput);
        button.removeEventListener("mouseover",spiritAnimalOutput);
    }
}