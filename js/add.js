

class Movie {
    movieName;
    rating;
    synopsis;
    image;
    linkToMovie;
    constructor(movieName, rating, synopsis, image, linkToMovie) {
        this.movieName = movieName;
        this.rating = rating;
        this.synopsis = synopsis;
        this.image = image;
        this.linkToMovie = linkToMovie;
    }
}

async function addToApi(api, option) {
    try {
        return await fetch(api, option)
            .then(response => response.json())
    }
    catch (error) {
        return error

    }
}
async function upDate(_id ,option) {
    try{
        return await fetch(api,option)
        .then(response=>response.json())
    }
    catch{
        return error;
    }
    
}



btn.onclick = () => {
    let movie = new Movie(nameInp.value, ratingInp.value, synopsisInp.value, imageInp.value, linkToMovieInp.value)

    let option = {
        method: "POST",
        body: JSON.stringify({ movie }),
        headers: { 'Content-Type': 'application/json' },

    }
    addToApi("https://moviesmern.herokuapp.com/movies/saveMovie", option)

    console.log(option)

}

btnUp.onclick = () => {
    let movie = new Movie(nameInp.value, ratingInp.value, synopsisInp.value, imageInp.value, linkToMovieInp.value)

    let option = {
        method: "PUT",
        body: JSON.stringify({ movie }),
        headers: { 'Content-Type': 'application/json' },
    }

    upDate(`https://moviesmern.herokuapp.com/movies/movie/${_id}`, option)
    console.log(option)
}


