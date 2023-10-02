import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token dc00d08c75cf058d4c17c8f61a6ef1c974430807',
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => console.log(error))
  }, [])

  const selectMovie = (movie)=>{
    setSelectedMovie(movie)
  }

const loadMovie = (movie) => {
  setSelectedMovie(movie)
}
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} selectMovie={selectMovie}/>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
      </div>
    </div>
  )
}

export default App
