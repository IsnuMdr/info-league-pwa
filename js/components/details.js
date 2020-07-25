function showDetails(club) {
    let playerHTML = "";
    club.squad.forEach(player => {
        playerHTML += `
            <tr>
                <td>${player.name}</td>
                <td>${player.position}</td>
                <td>${player.shirtNumber}</td>
            </tr>
                `;
    });
    let imgSrc = club.crestUrl.replace(/^http:\/\//i, 'https://')
  
    $('.progress').show();
    const detailHTML = `
        <h4 class="grey-text center-align">Detail Club</h4>
        <div class="divider"></div>
        <div class="row">
            <div class ="col s1 m2"></div>
            <div class="col s10 m8">
            <div class="card" style="margin-top: 30px;">
                <div class="card-image" style="padding: 50px;">
                    <img class="responsive-img" src="${imgSrc}" alt="club">
                </div>
                <div class="card-content">
                    <h5 class="blue-text center-align">${club.name}</h5>
                    <div class="divider"></div>
                    <h6 class="center-align">Stadium : ${club.venue}</h6>
                    <div class="divider"></div>
                    <h6 class="center-align">Address : ${club.address}</h6>
                    <div class="divider"></div>
                    <h6 class="center-align">Email : ${club.email}</h6>
                    <div class="divider"></div>
                    <h6 class="center-align">Website : <a href =" ${club.website}">${club.website}</a></h6>
                </div>
            </div>
            </div>
            <div class ="col s1 m2"></div>
        </div>
        <h3 class="grey-text center-align">Players</h3>
        <div class="divider"></div>
        <div class="row">
            <div class="card">
            <table class="striped centered responsive-table" style="margin-top: 30px;">
                <thead class="blue darken-4 white-text">
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Shirt Number</th>
                    </tr>
                </thead>
                <tbody>
                    ${playerHTML}
                </tbody>
            </table>
            </div>
        </div>
        `;
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("body-content").innerHTML = detailHTML;
    
    $('.progress').hide();
}

export default showDetails;