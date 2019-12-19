function klasemenHtml(data) {

data.standings.forEach(function (season) {
    if (season.type == "TOTAL") {
      season.table.forEach(function (standing) {
        var logo_team = standing.team.crestUrl.replace(/^http:\/\//i, 'https://')
        var isi = ""
        isi += `
              <tr>
                <td>${standing.position}</td>
                <td>
                  <img src="${logo_team}" class="responsive-img" width="20px">
                </td>
                <td>
                  <b>${standing.team.name}</b>
                </td>
                <td>${standing.playedGames}</td>
                <td>${standing.won}</td>
                <td>${standing.draw}</td>
                <td>${standing.lost}</td>
                <td>${standing.goalsFor}</td>
                <td>${standing.points}</td>
              </tr>
            `;

        var html = document.getElementById("klasemen_team").innerHTML + isi;
        document.getElementById("klasemen_team").innerHTML = html;
      })
    }
  });
}