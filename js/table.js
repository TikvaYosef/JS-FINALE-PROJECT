

// const jsonApi = JSON.stringify({"success":true,"data":[{"_id":"6182d48e7df14206307896b8","movieName":"Harry Potter","linkToMovie":"String","synopsis":"String hhhhhh","image":"https://wallpaperaccess.com/full/3421252.jpg","rating":3,"date":"2021-11-03T18:27:26.573Z","__v":0},{"_id":"6187e7f4a65c7f0016a126e3","movieName":"spider-man  Far From Home","rating":6,"image":"https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg","synopsis":"Spider-Man: Far From Home was released on July 2, 2019.[266][267] Watts returned to direct,[268] from a script by McKenna and Sommers.[269] Holland, Favreau, Zendaya, Tomei, and Batalon reprise their roles,[270][271] with Jake Gyllenhaal joining as Mysterio.[272] Samuel L. Jackson and Cobie Smulders also reprised their roles as Nick Fury and Maria Hill, respectively, from previous MCU media.[273]","linkToMovie":"https://en.wikipedia.org/wiki/Spider-Man:_Far_From_Home","date":"2021-11-07T14:51:32.722Z","__v":0},{"_id":"6187e826a65c7f0016a126fd","movieName":"spider-man No Way Home","rating":8,"image":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Spider-Man_No_Way_Home_logo.jpg/330px-Spider-Man_No_Way_Home_logo.jpg","synopsis":"Spider-Man: Far From Home was released on July 2, 2019.[266][267] Watts returned to direct,[268] from a script by McKenna and Sommers.[269] Holland, Favreau, Zendaya, Tomei, and Batalon reprise their roles,[270][271] with Jake Gyllenhaal joining as Mysterio.[272] Samuel L. Jackson and Cobie Smulders also reprised their roles as Nick Fury and Maria Hill, respectively, from previous MCU media.[273]","linkToMovie":"https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home","date":"2021-11-07T14:52:22.181Z","__v":0},{"_id":"6188f9dd7e079d0016127504","movieName":"Black Panter","rating":5,"image":"https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg","synopsis":"Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and it stars Chadwick Boseman as T'Challa / Black Panther alongside Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya, Letitia Wright, Winston Duke, Angela Bassett, Forest Whitaker, and Andy Serkis. In Black Panther","linkToMovie":"https://en.wikipedia.org/wiki/Black_Panther_(film)","date":"2021-11-08T10:20:13.143Z","__v":0},{"_id":"61895abe3143600016238e94","movieName":"matrix","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The.Matrix.glmatrix.1.png/1200px-The.Matrix.glmatrix.1.png","synopsis":"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.","linkToMovie":"https://www.imdb.com/title/tt0133093/","rating":9,"date":"2021-11-08T17:13:34.675Z","__v":0},{"_id":"618961db314360001623947a","movieName":"superman","image":"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F03%2Fman_of_steel-1200x800.jpg","synopsis":"An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.","linkToMovie":"https://www.imdb.com/title/tt0770828/","rating":6,"date":"2021-11-08T17:43:55.454Z","__v":0},{"_id":"618a75db42e78f0016d2215e","movieName":"joker","image":"https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg","synopsis":"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.","linkToMovie":"https://www.imdb.com/title/tt7286456/","rating":9,"date":"2021-11-09T13:21:31.064Z","__v":0},{"_id":"618a8acf33a37b0016c0174a","movieName":"The Dark Knight","image":"https://artbup.com/storage/pictures/pic_5fa66f54b08fd_orig.jpg","linkToMovie":"https://www.imdb.com/title/tt0468569/?ref_=hm_fanfav_tt_i_24_pd_fp1","synopsis":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","rating":2,"date":"2021-11-09T14:50:55.916Z","__v":0},{"_id":"618a8b4e33a37b0016c017ce","movieName":"Breaking Bad","image":"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg","linkToMovie":"https://www.imdb.com/title/tt0903747/?ref_=hm_fanfav_tt_i_30_pd_fp1","synopsis":"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.","rating":4,"date":"2021-11-09T14:53:02.741Z","__v":0}]});
// const ObjApi = JSON.parse(jsonApi);
// const arrayApi = ObjApi.data;
// console.log(arrayApi);





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


 