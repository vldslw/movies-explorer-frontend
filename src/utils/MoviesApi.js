class MoviesApi {
  constructor({
    baseUrl,
  }) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResStatus);
  }

  _checkResStatus (res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;


