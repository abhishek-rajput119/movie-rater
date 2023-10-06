import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Rating from './Rating'
import { useCookies } from 'react-cookie'

const MovieDetails = (props) => {
  const [token] = useCookies(['mr-token'])

  const mov = props.movie
  const [highlight, setHighlight] = useState(-1)
  const rateClicked = (rate) => (evt) => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mr-token']}`,
      },
      body: JSON.stringify({ stars: rate + 1 }),
    })
      .then(() => getDetails())
      .catch((error) => console.log(error))
  }

  const getDetails = () => {
    fetch(`http://127.0.0.1:8000/api/movies/${mov.id}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mr-token']}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => props.updateMovie(resp))
      .catch((error) => console.log(error))
  }
  return mov ? (
    <>
      <div>
        <h2>Movie Details</h2>
        <h4>{mov.description}</h4>
        <Rating mov={mov} />({mov.no_of_ratings})
        <div className="rate-container">
          <h2>Rate it</h2>
          {[...Array(5)].map((e, i) => {
            return (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={highlight > i - 1 ? 'purple' : ''}
                onMouseEnter={() => setHighlight(i)}
                onMouseLeave={() => setHighlight(-1)}
                onClick={rateClicked(i)}
              />
            )
          })}
        </div>
      </div>
    </>
  ) : null
}
export default MovieDetails
