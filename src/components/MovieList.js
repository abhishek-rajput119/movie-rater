import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { API } from '../ApiService'
import { useCookies } from 'react-cookie'
const MovieList = (props) => {
  const [token] = useCookies(['mr-token'])
  const selectMovie = (movie) => {
    props.selectMovie(movie)
  }

  const editClicked = (movie) => {
    props.updateMovie(movie)
  }
  const deleteClicked = (movie) => {
    API.deleteMovie(movie, token)
      .then(props.removeClicked(movie))
      .catch((error) => console.log(error))
  }
  return (
    <>
      <div>
        <h2>Movie Name</h2>
        {props.movies &&
          props.movies.length > 0 &&
          props.movies.map((movie) => {
            return (
              <div key={movie.id} className="movie-item">
                <h4 onClick={() => selectMovie(movie)}>{movie.title}</h4>
                <FontAwesomeIcon
                  onClick={() => editClicked(movie)}
                  icon={faEdit}
                />
                <FontAwesomeIcon
                  onClick={() => deleteClicked(movie)}
                  icon={faTrash}
                />
              </div>
            )
          })}
      </div>
    </>
  )
}
export default MovieList
