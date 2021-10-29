const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieRating = document.getElementById("movie-rating");
const submitBtn = document.getElementById("submit-btn");
const movieOutputDiv = document.getElementById("movie-output");

let movieData = {
    name: [],
    year: [],
    rating: [],
    id: [],
};

const getNewId = () => {
    return Math.floor(Math.random() * 1000000);
};

const pushNewMovie = () => {
    if (movieName.value != "" || movieYear.value != "") {
        movieData.name.push(movieName.value);
        movieData.year.push(movieYear.value);
        movieData.rating.push(movieRating.value);
        movieData.id.push(getNewId());
        movieName.value = "";
        movieYear.value = "";
        movieRating.value = 5;
        console.log(movieData);
        writeToOutputDiv();
    } else
        window.alert("Movie name or year must not be empty!");

}

const writeToOutputDiv = () => {
    movieOutputDiv.innerHTML = movieOutputDiv.innerHTML +
        `<div id="movie-modal">
            <div>    
                <p>Movie: ${movieData.name.at(-1)}</p>
                <p>Year: ${movieData.year.at(-1)}</p>
                <p>Your rating: ${movieData.rating.at(-1)}</p>
            </div>
            <img src="http://simpleicon.com/wp-content/uploads/movie-3.png" alt="">
        </div>`;
}


submitBtn.addEventListener('click', pushNewMovie)