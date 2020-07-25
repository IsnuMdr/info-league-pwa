function showMatches(data) {
    let matchesHTML = "";
    let detailHTML = "";
    $('.progress').show();
    detailHTML += `
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>${data.competition.name}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>${data.competition.area.name}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>${data.matches[0].season.startDate} to ${data.matches[0].season.endDate}</td>
                        </tr>
                        <tr>
                            <td>Last Updated</td>
                            <td>${new Date(data.competition.lastUpdated)}</td>
                        </tr>
                        </tbody>
                    </table>
                    `;
    document.getElementById("detail").innerHTML = detailHTML;
    data.matches.forEach(function (matches) {
        const {
            homeTeam,
            awayTeam,
            score,
            utcDate,
            status,
            matchday
        } = matches;
  
        let scoreHome = score.fullTime.homeTeam;
        let scoreAway = score.fullTime.awayTeam;
  
        if (scoreHome === null) {
            scoreHome = 0;
        }
        if (scoreAway === null) {
            scoreAway = 0;
        }
  
        let date = new Date(utcDate);
        let newStatus = "";
  
        if (status == "FINISHED") {
            newStatus = `<span class="btn-small blue darken-4">${status}</span>`
        } else if (status == "SCHEDULED") {
            newStatus = `<span class="btn-small  yellow darken-4">${status}</span>`
        } else if (status == "CANCELLED") {
            newStatus = `<span class="btn-small red darken-4">${status}</span>`
        }
  
        $('.progress').show();
        matchesHTML += `
                            <div class="line-content"> 
                            <div class="col s12 m6">
                                <div class="card hoverable">
                                <div class="card-content">
                                    <p><b>Matchday ${matchday} of 38</b></p>
                                    <p class="center">${getNewDate(date)} WIB</p>
                                    <table class="responsive-table highligt striped">
                                    <thead>
                                        <th class="blue white-text center-align">Home</th>
                                        <th class="red white-text center-align">Away</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td class="center-align" width="50%">${homeTeam.name}</td>
                                        <td class="center-align" width="50%">${awayTeam.name}</td>
                                        </tr>
                                        <tr>
                                        <div>
                                            <td class="center-align" width="50%">${scoreHome}</td>
                                            <td class="center-align" width="50%">${scoreAway}</td>
                                        </div>
                                        </tr>
                                    </tbody>
                                    </table>
                                    ${newStatus}
                                </div>
                                </div>
                            </div>
                        </div>
                        `;
    });
    $('.progress').hide();
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("matches").innerHTML = matchesHTML;
  }

function getNewDate(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

export default showMatches;