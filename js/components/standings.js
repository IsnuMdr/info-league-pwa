
function showStanding(data) {
    let standingHTML = "";
    $('.progress').show();
    data.standings.forEach(function (standing) {
        const {
            table,
            type
        } = standing;
        if (type == "TOTAL") {
            table.forEach(function (t) {
                let imgSrc = t.team.crestUrl.replace(/^http:\/\//i, 'https://');
                standingHTML += `
                                <tr>
                                    <td>${t.position}</td>
                                    <td><a href="./detail.html?id=${t.team.id}"><img src="${imgSrc}" width="30px" height="30px"></a></td>
                                    <td>${t.team.name}</td>
                                    <td>${t.playedGames}</td>
                                    <td>${t.won}</td>
                                    <td>${t.draw}</td>
                                    <td>${t.lost}</td>
                                    <td>${t.goalsFor}</td>
                                    <td>${t.goalsAgainst}</td>
                                    <td>${t.goalDifference}</td>
                                    <td>${t.points}</td>
                                </tr>
                                `;
            })
        }
    });
    $('.progress').hide();
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("standings").innerHTML = standingHTML;
  }

export default showStanding;