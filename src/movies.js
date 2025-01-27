// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(list) {
  let mapArray = list.map( function(movie) {
    return movie.director 

  })
  console.log(mapArray)
  return mapArray
}
// getAllDirectors(movies)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(dramaMovies) {
  let nameFilter = dramaMovies.filter( function (name){
    return name.director === `Steven Spielberg` && name.genre.includes(`Drama`)
  })
  console.log(nameFilter.length)
  return nameFilter.length
}

// howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(sum) {
  if(sum.length === 0) {
    return 0 
  }
  let avg = sum.reduce( function(total, nextVal){
    return total + nextVal.score
  }, 0)
  console.log(Number((avg / sum.length).toFixed(2)))
  return Number((avg / sum.length).toFixed(2))
}

// scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaScore) {
let avgDrama = dramaScore.filter( function(dramaFilter) {
    return dramaFilter.genre.includes(`Drama`)
})
return scoresAverage(avgDrama)
}

// dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(orderYear) {
  let order = [...orderYear]
   order.sort( function(a, b) {
    if(a.year === b.year) {
     return a.title.localeCompare(b.title)
    }   
    return a.year - b.year
  })
  return order
}
// console.log(movies)
// orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(list) {
  let movieTitle = [...list]
  movieTitle.sort( function(a, b){
  return a.title.localeCompare(b.title)
  })
  return movieTitle.slice(0, 20).map( function(mov){
    return mov.title
  })
}

// console.log(orderAlphabetically(movies))
// orderAlphabetically(movies)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically
  };
}