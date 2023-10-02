import { useEffect, useState } from 'react'
import { API } from '../ApiService'

const MovieForm = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setTitle(props.movie.title)
    setDescription(props.movie.description)
  }, [props.movie])
  const updateMovie = () => {
    API.updateMovie(props.movie, { title, description })
      .then((resp) => props.updateMovies(resp))
      .catch((error) => console.log(error))
  }
  const createMovie = () => {
    API.createMovie({ title, description })
      .then((resp) => props.newMovie(resp))
      .catch((error) => console.log(error))
  }
  return (
    <div>
      {props.movie ? (
        <div>
          <h1>{title} Edit</h1>
          <br />
          <label htmlFor="title">Title</label>
          <br />
          <input
            placeholder="title"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            placeholder="description"
            name="description"
            id="description"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />
          <br />
          {props.movie.id ? (
            <button onClick={updateMovie}>Update</button>
          ) : (
            <button onClick={createMovie}>Create</button>
          )}
        </div>
      ) : null}
    </div>
  )
}
export default MovieForm
