import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import MovieForm from './components/MovieForm'
function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditedMovie] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token dc00d08c75cf058d4c17c8f61a6ef1c974430807',
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => console.log(error))
  }, [])

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
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
