function teamHtml(data) {

    var isi = "";
    data.teams.forEach(function (team) {
        var logo_team = team.crestUrl.replace(/^http:\/\//i, 'https://')
        isi += `
          <div class="card horizontal">
            <div class="card-image">
                <img src="${logo_team}" alt="${team.name}" class="responsive-img" style="width:70px; padding-top: 20px; padding-left: 20px;">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <h4 style="margin-top: -10px;">${team.name}</h4>
                    <p>
                        <b>Club Color : </b> ${team.clubColors} <br>
                        <b>Venue : </b> ${team.venue} <br>
                        <b>Address : </b> ${team.address} <br>
                        <b>Website : </b> ${team.website}<br>
                    </p>
                </div>
                <a href="#" class="fav right-align" style="padding-right: 30px;">
                  <i class="small material-icons">favorite_border</i>
                </a>
                <div class="card-action">
                <a href="detailteam.html?id_team=${team.id}">More Detail</a>
                </div>
            </div>
            </div>
          `
    });

    document.getElementById("teams").innerHTML = isi;

    const el = document.getElementById("teams").getElementsByClassName("fav");
    for (let i = 0; i < el.length; i++) {
        el[i].onclick = () => {
            const saveTeam = {
                id: data.teams[i].id,
                name: data.teams[i].name,
                crestUrl: data.teams[i].crestUrl,
                venue: data.teams[i].venue,
                address: data.teams[i].address,
                website: data.teams[i].website
            };
            DbSaveTeam(saveTeam)
        }
    }

}