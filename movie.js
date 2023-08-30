




// let dumyData = [
//     {Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
//     Awards: "Won 6 Oscars. Another 52 wins & 29 nominations.",
//     Genre: "Action, Adventure, Fantasy, Sci-Fi",
//     Title: "Star Wars: Episode IV - A New Hope",
//     Runtime: "121 min",
//     Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
//     Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
//     imdbRating: "8.6",
//     Year: "1977",
//     imdbID: "tt0076759"},
//     {Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
//     Awards: "Won 1 Oscar. Another 24 wins & 20 nominations.",
//     Genre: "Action, Adventure, Fantasy, Sci-Fi",
//     Title: "Star Wars: Episode V - The Empire Strikes Back",
//     Runtime: "124 min",
//     Plot: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
//     Poster: "https://m.media-amazon.com/images/I/71rgQlCE3WL._AC_SL1000_.jpg",
//     imdbRating: "8.7",
//     Year: "1980",
//     imdbID: "tt0080684"},
// ]


class Movie {
    constructor (data) {
        Object.assign(this, data)
    }
    logtest () {
        console.log(this)
    }
    getDataHtml () {
        const {Title, Runtime, Genre, Plot, Poster, imdbRating, imdbID} = this
        let html = `    
                <div class="object" id="${imdbID}">
                <img src="${Poster}">
                <div class="first-info-line">
                    <h4 id="film-title">${Title}</h4>
                    <i class="fa-solid fa-star"></i>
                    <p class="rating-score" id="rating-score">${imdbRating}</p>
                </div>
                <div class="second-info-line">
                    <p class="min-info" id="min-info">${Runtime}</p>
                    <p class="category-info" id="category-info">${Genre}</p>
                    <i class="fa-solid fa-plus"></i>
                    <p class="watchlist-info" id="watchlist-info">Watchlist</p>
                </div>
                <p class="movie-description">${Plot}<a href="#" style="color: white; text-decoration: none;">Read more</a></p>
                </div>
                <hr style="border: 1px solid #2C2C2C;">
                `
        return html
    }
}

export  { Movie }