



function showOnScreen(object) {

    for (const item of object) {
        allMoviesDiv.innerHTML += `<div class="card"> <h4 class="title">${item.movieName}</h4> <p class = "rating">rating ${item.rating}</p> <a href ="./Details.html?id=${item._id}"> <img src ="${item.image}" class="imgMovies"> </a> <button id="${item._id}" onclick = "deleteFromApi(this.id)" class = "btnDelete"> <img src="../images/delete button2.jpg" width="40px" height="40px" class= "deleteImg"></button> </div>`
    }

}


async function allMovies() {
    try {
        return await fetch('https://moviesmern.herokuapp.com/movies/all')
            .then((response) => response.json());

    }
    catch (error) {
        return error

    }

}
allMovies().then(res => showOnScreen(res.data));



async function searchByName(inp) {
    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/searchByName/${inp}`)
            .then(res => res.json());
    } catch (error) {
        return error;
    }
}

inp.oninput = () => {
    if (inp.value.length > 2) {

        searchByName(inp.value)
            .then(res => showOnlyOne(res.data))

    }

    if (inp.value.length < 2) {
        allMoviesDiv.innerHTML = " ";

    }
}



async function deleteMovie(idForDelete, optionsForDelete) {

    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${idForDelete}`, optionsForDelete)
            .then(response => response.json())
    }
    catch (error) {
        return error
    }

}

function deleteFromApi(id) {
    let options = {
        method: "DELETE",
    }

    deleteMovie(id, options)
    console.log(options)
}








