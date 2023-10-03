export class API {
  static getMovies(token) {
    return fetch('http://127.0.0.1:8000/api/movies/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json())
  }
  static updateMovie(movie, body, token) {
    return fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mr-token']}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  }

  static loginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  }
  static registerUser(body) {
    return fetch(`http://127.0.0.1:8000/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  }

  static createMovie(body, token) {
    return fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mr-token']}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
  }

  static deleteMovie(movie, token) {
    return fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token['mr-token']}`,
      },
    })
  }
}
