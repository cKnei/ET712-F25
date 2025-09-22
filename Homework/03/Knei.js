/*
 * Knei
 * Homework 3 | Objects and exception handling in JS
 */

let Movie = {
    title: "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    director: "Haruo Sotozaki",
    year: 2025,

    getDetails() {
        return "Title: " + this.title + ", Director: " + this.director + ", Release Year: " + this.year;
    }
}

let MovieCollection = {
    movies: [],

    addMovie(movie) {
        this.movies.push(movie);
    },

    removeMovie(title) {
        if ( this.movies.length < 1 ) {
            console.log("Error: No Movies in Collection");
            return;
        }

        let tMovies = [];
        for ( let movie in this.movies ) {
            if ( movie.title !== title ) 
                tMovies.push(movie);
        }

        if ( this.movies.length === tMovies.length ) {
            console.log("Error: Title not found");
            return;
        }

        this.movies = tMovies;
    },

    showMovies() {
        if ( this.movies.length < 1 ) {
            console.log("Error: No Movies in Collection");
            return;
        }
        
        for ( let movie in this.movies )
            console.log(movie.getDetails());
    }
}
