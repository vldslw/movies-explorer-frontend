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


