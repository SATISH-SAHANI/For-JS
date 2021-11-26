const movies = [];

function favouriteMovie(operation, movie) {


    if (operation == 'add') {
        movies.push(movie);
    }
    else if (operation == 'remove') {
        if (movies.length > 0) {
            movies.pop();
        }
    }

    return movies;
}

module.exports = favouriteMovie;
