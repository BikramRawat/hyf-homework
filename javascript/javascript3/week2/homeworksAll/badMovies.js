// Creating array of bad movies since 2000 using given api
const moviesApiUrl = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(moviesApiUrl)
.then(response => response.json())
.then(data => {
    const badMovies = data.filter(movie => movie.rating < 4.5);
    console.log('The bad movies are: ', badMovies);
    const badMoviesAfter2K = badMovies.filter(movie => movie.year > 2000);
    console.log `Bad movies since 2000 are : ${badMoviesAfter2K}`;;
})
