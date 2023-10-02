import React from "react"
const MovieList = (props) => {
  const selectMovie = (movie) => {
    props.selectMovie(movie)
  }
  return (
    <div>
      <h2>Movie Name</h2>
      {props.movies && props.movies.map((movie) => {
        return (
          <h4 key={movie.id} onClick={() => selectMovie(movie)}>
            {movie.title}
          </h4>
        )
      })}
    </div>
  )
}
export default MovieList