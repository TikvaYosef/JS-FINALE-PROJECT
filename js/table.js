function showOnScreen(object) {

    for (const item of object) {
        table.innerHTML += `
 
         <tr> <td> ${item.movieName}</td>  <td>${item.rating}</td>  <td>"${item.image}" </td> <td>${item.date}</td> <td>${item.linkToMovie}</td> <td>${item.synopsis}</td> <td>${item._id}</td></tr> `
    }
}

async function allMovies() {
    try {
        return await fetch('https://moviesmern.herokuapp.com/movies/all')
            .then((response) => response.json())
    }
    catch (error) {
        return error
    }

}
allMovies()
    .then(res => showOnScreen(res.data))
    .catch(rej => console.log(rej))


 