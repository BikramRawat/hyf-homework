
function displayGif(){
    const userInput = document.getElementById('input').value;
    const numberInput = document.getElementById('number').value;
    const div = document.createElement('div');
    console.log(userInput);
    console.log(numberInput);
    const giphyApiKey = 'Vw1ofly2GK49lIzWNp8mkPTEgbVGmSnL'; 
    const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&limit=${numberInput}&api_key=${giphyApiKey}&lang=en`;
    if(userInput && numberInput){
        fetch(giphyApiUrl)
        .then(res => res.json())
        .then(api => {
        console.log(api.data[0].images.fixed_height.url);
        const imgPath = api.data[0].images.fixed_height.url;
        const img = document.createElement('img');
        img.setAttribute('src', imgPath);
        div.appendChild(img);
        document.body.appendChild(div);
    });
    } else {
        alert('Enter the search gif and the number ...');
    }
}
const btnElement = document.getElementById('btn');
btnElement.addEventListener('click',displayGif);