import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import MovieForm from './components/MovieForm'
import { useCookies } from 'react-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import useFetch from './hooks/useFetch'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditedMovie] = useState(null)
  const [token, setToken, deleteToken] = useCookies(['mr-token'])
  const [data, , loading, error] = useFetch()

  useEffect(() => {
    setMovies(data)
  }, [data])
  useEffect(() => {
    if (!token['mr-token']) window.location.href = '/'
  }, [token])
  const selectMovie = (movie) => {
    setSelectedMovie(movie)
    setEditedMovie(null)
  }

  const loadMovie = (movie) => {
    setEditedMovie(movie)
    setSelectedMovie(null)
  }
  const updateMovies = (movie) => {
    const newMovies = movies.map((mov) => {
      if (mov.id === movie.id) return movie
      return mov
    })
    setMovies(newMovies)
  }

  const newMovie = () => {
    setEditedMovie({ title: '', description: '' })
    setSelectedMovie(null)
  }

  const newMovieCreate = (movie) => {
    setMovies([...movies, movie])
  }
  const removeClicked = (movie) => {
    const newMovies = movies.filter((mov) => mov.id !== movie.id)
    setMovies(newMovies)
  }

  const logoutUser = () => {
    deleteToken(['mr-token'])
  }
  if (loading) return <h1>Loading......</h1>
  if (error) return <h1>Error: {error}</h1>
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FontAwesomeIcon icon={faFilm} />
          Movie Rater
        </h1>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          onClick={logoutUser}
          className="fa-sign-out-alt"
        />
      </header>
      <div className="layout">
        <div>
          <MovieList
            movies={movies}
            selectMovie={selectMovie}
            updateMovie={loadMovie}
            removeClicked={removeClicked}
          />
          <button onClick={newMovie}>Add Movie</button>
        </div>
        {selectedMovie ? <MovieDetails movie={selectedMovie} /> : null}
        {editedMovie ? (
          <MovieForm
            movie={editedMovie}
            updateMovies={updateMovies}
            newMovie={newMovieCreate}
          />
        ) : null}
      </div>
    </div>
  )
}

export default App
