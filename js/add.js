

class Movies{
    movieName;
    rating;
    synopsis;
    image;
    linkToMovie;
    constructor(movieName,rating,synopsis,image,linkToMovie){
        this.movieName = movieName;
        this.rating = rating;
        this.synopsis = synopsis;
        this.image = image; 
        this.linkToMovie = linkToMovie;
    }
    
}

// function addPic(imageInp) {
//    ` <img src="${imageInp}" >`   
// }



btn.onclick=()=>{
    let movie = new Movies(nameInp.value ,ratingInp.value ,synopsisInp.value ,imageInp.value,linkToMovieInp.value)
    // addPic(imageInp.value)
   
    const option = {
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(movie),
    }
    addToApi("https://moviesmern.herokuapp.com/movies/saveMovie",option)
  
    console.log(option)

}
async function addToApi(api,option) {
    try{
        return await fetch(api,option)
    }
    catch (error){
        return error

    }
}

