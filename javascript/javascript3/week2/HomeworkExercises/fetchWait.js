// fetching data from some api and display it after some time
// using promises and .then

const apiURL = 'https://api.github.com/users/deekshasharma';
new Promise((resolve) => {
    setTimeout(() => {
        fetch(apiURL)
        .then(response => response.json())
        .then(jsonData => {
            resolve(jsonData);
            console.log('the location from api using promise .then is :', jsonData.location);
        })
    }, 4000)
})

// above exercise using async/await
function newPromiseAsync(){
    setTimeout(async() => {
        const response = await fetch(apiURL)
        const responseData = await response.json();
        console.log('The company name from api using async/await is :', responseData.company);
    }, 4000);
}
newPromiseAsync();

// Question : Which way do you prefer, the promise way or the async/await way?
// My answer is : I prefer async/await way because of following reasons:
//1. it makes asynchronous code synchronous that helps human for readability and maintainability
//2. await eliminates the use of callbacks in .then and .catch
//3. syntactically async/await looks better
//4. may be also reduces the code size 
//5. can use try - catch approach for error handling
//6. it removes .then chaining 