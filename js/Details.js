




async function getData(id) {
    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`)
            .then((response) => response.json());

    } catch (error) {
        return error;
    }
}

let movieId = location.search.substr(4);
getData(movieId)
.then((res) => {
    showD.innerHTML = `
    <div id = "imgh3" ><div id="container">
      <h1>${res.data.movieName}</h1>
      <h3> Rating: ${res.data.rating}</h3>
      <h3>${res.data.synopsis}</h3>
      </div>
     <div id = "imgContainer" ><img class="image" src="${res.data.image}"></div>
     </div>
     `
});