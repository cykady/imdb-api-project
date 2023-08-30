import { Movie } from "./movie.js"

const list = document.getElementById("list")

list.innerHTML = `
<div class="empty-list">
<i class="fa-solid fa-film"></i>
<h5>Start exploring</h5>
</div>
`


document.getElementById("search").addEventListener("click", async () => {
    let string = document.getElementById('user-input').value.split(' ').join('+')

    let myUrl = `http://www.omdbapi.com/?s=${string}&apikey=f58282b1`

    const request = await fetch(myUrl)
    const data = await request.json()

    list.innerHTML = ``
    let moviesIdsArray = []
    data.Response === "True" ? data.Search.forEach((movie) => {
        moviesIdsArray.push(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=f58282b1`)
    })

    : list.innerHTML = `
    <div class="empty-list">
    <i class="fa-solid fa-film"></i>
    <h5>Can not find any results</h5>
    </div>
    `
    moviesIdsArray.forEach(async (url) => {
        const request = await fetch(url)
        const data = await request.json()
        const movie = new Movie(data)
        list.innerHTML += movie.getDataHtml()

    })

})




