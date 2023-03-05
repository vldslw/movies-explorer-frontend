class MainApi {
  constructor({
    baseUrl,
  }) {
    this._baseUrl = baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAzZjAxNDY2NWNkZjcwODU5NzZlYmYiLCJpYXQiOjE2Nzc5Nzk4NDEsImV4cCI6MTY3ODU4NDY0MX0.uzW4mVoNcnDL7ycmRYcnrd3yp8uDxk7_7yRLIWAB0nE',
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResStatus);
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
        method: "post",
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAzZjAxNDY2NWNkZjcwODU5NzZlYmYiLCJpYXQiOjE2Nzc5Nzk4NDEsImV4cCI6MTY3ODU4NDY0MX0.uzW4mVoNcnDL7ycmRYcnrd3yp8uDxk7_7yRLIWAB0nE',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `https://api.nomoreparties.co/${data.image.url}`, //отличается
          trailerLink: data.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`, //отличается
          movieId: data.id, //отличается
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        })
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

const mainApi = new MainApi({
  baseUrl: 'https://api.beatfilm-vldslw.nomoredomains.club',
});

export default mainApi;


