//async function- return promises
const button = document.getElementById('btn')
const input = document.getElementById('inp')
const movieslist= document.getElementById('movieslist')
button.addEventListener('click', function ()
{
    const searchText = input.value;
    searchMovies(searchText)
})//rrr
//fetch will return a promise - promise means an object which represents an eventual completion or failure of an async function. it will return state and response of operation
function searchMovies (st)
{
    const apikey = "399a3064"
    const apiurl = `https://www.omdbapi.com/?s=${st}&apikey=${apikey}`
    fetch(apiurl)
        .then(function (res) { return res.json() })
        .then(function (data)
        {
            console.log(data)
            displayMovies(data)
        })
        .catch(function (err)
        {
        console.error(err)
    })
}
function displayMovies (data)
{
    if (data.Response==='True')
    {
        data.Search.forEach(function (movie)
        {
            const movieCard = document.createElement('div')
            movieCard.classList.add('movieCard')
            movieCard.innerHTML = `
        <img src=${movie.Poster} alt=${movie.Title} />
        <h2>${movie.Title}</h2>
        <p>${movie.Year}</p>`
            movieslist.appendChild(movieCard)
        })
    }
    else
    {
        movieslist.innerHTML=`<strong>No movies Found.Search again</strong>`
    }
        
        
}
