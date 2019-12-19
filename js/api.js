const base_url = "https://api.football-data.org/v2/competitions/2014/";
const api_token = "c5d0cb958edc4c4fbdf7df6e706c07d4";

const getApi = function (url) {
  return fetch(url, {
    headers: {
      'X-Auth-Token': api_token,
    }
  });
};

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  console.log("Error : " + error);
}

function klasemen() {
  if ('caches' in window) {
    caches.match(base_url + "standings").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          klasemenHtml(data)
        });
      }
    })
  }

  getApi(base_url + "standings")
    .then(status)
    .then(json)
    .then(function (data) {
      klasemenHtml(data);
    });
}


function teams() {
  if ('caches' in window) {
    caches.match(base_url + "teams").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          teamHtml(data);
        });
      }
    })
  }

  getApi(base_url + "teams")
    .then(status)
    .then(json)
    .then(function (data) {
      teamHtml(data);
    });
}


function teamById() {
  var url = new URLSearchParams(window.location.search);
  var idteam = url.get("id_team");

  if ('caches' in window) {
    caches.match("https://api.football-data.org/v2/teams/" + idteam).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          teamDetail(data);
        });
      }
    })
  }

  getApi("https://api.football-data.org/v2/teams/" + idteam)
    .then(status)
    .then(json)
    .then(function (data) {
      teamDetail(data);
    });
}

function teamFavorite() {
  dbteamFavorite();
}