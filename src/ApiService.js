const token = 'dc00d08c75cf058d4c17c8f61a6ef1c974430807'
export class API {
  static updateMovie(movie, body) {
    return fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  }

  static createMovie(body) {
    return fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  }

  static deleteMovie(movie) {
    return fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
  }
}
