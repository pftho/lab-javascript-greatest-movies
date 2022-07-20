// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //filter movies by S Spilberg
  let stevenSpilbergMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return stevenSpilbergMovies.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let avgScore =
    moviesArray.reduce((accumulator, movie) => {
      if (!movie.score) {
        movie.score = 0;
      }

      return accumulator + movie.score;
    }, 0) / moviesArray.length;
  return Math.round(avgScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return Math.round(scoresAverage(dramaMovies) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      if (movieA.title.toLowerCase() < movieB.title.toLowerCase()) {
        return -1;
      }
      if (movieA.title.toLowerCase() > movieB.title.toLowerCase()) {
        return 1;
      }
      return 0;
    }
    return movieA.year - movieB.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
    .sort((movieA, movieB) => {
      if (movieA.title.toLowerCase() < movieB.title.toLowerCase()) {
        return -1;
      }
      if (movieA.title.toLowerCase() > movieB.title.toLowerCase()) {
        return 1;
      }
      return 0;
    })
    .slice(0, 20)
    .map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
