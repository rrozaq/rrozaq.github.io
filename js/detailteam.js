function teamDetail(data) {

    var isi = '';
    
    isi = `
          <div class="card-panel white">
            <table>
            
            <tr>
              <td colspan="3"><center><img src="${data.crestUrl}"><h4>${data.name}</h4></center></td>
            </tr>  
            <tr>
              <td><b>Address</b> : ${data.address}</td>
              <td><b>Phone</b> : ${data.phone}</td>
            </tr>
            <tr>
              <td><b>Founded</b> : ${data.founded}</td>
              <td><b>Venue</b> : ${data.venue}</td>
            </tr>
            <tr>
            <td><b>Website</b> : <a href="${data.address}">${data.website}</a></td>
            <td><b>Email</b> : ${data.email}</td>
            </tr>

              </table>
          </div>
      `

    var isiPlayer = '';
    data.squad.forEach(function (player) {
        isiPlayer += `
          
            <li class="collection-item avatar">
              <img src="image/player.png" alt="" class="circle">
                <span class="title">
                <b>${player.name}</b></span>
                <p>${player.position}<br>
                    ${player.dateOfBirth}<br>
                    ${player.countryOfBirth}<br>
                    ${player.nationality}
                </p>
              </li>
          `
    });

    document.getElementById("detail_team").innerHTML = isi;
    document.getElementById("team_player").innerHTML = isiPlayer;

}