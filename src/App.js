import { useState } from 'react';
import './App.css';

export const MovieList = () => {
  const [movies, setMovies] = useState(['Movie 1', 'Movie 2'])
  return (
    <div className='layout'>
      <div>
        {movies.map(movie=>{
          return <h2 key={movie
          }>{movie}</h2>
        })}
      </div>
      <div>Movie Details</div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <MovieList />
    </div>
  )
}

export default App;
