function showClubs(data) {
    let clubHTML = "";
    $('.progress').show();
    data.standings.forEach(function (club) {
        const {
            table,
            type
        } = club;
  
        if (type == "TOTAL") {
            table.forEach(function (t) {
                let imgSrc = t.team.crestUrl.replace(/^http:\/\//i, 'https://');
                clubHTML += `<div class="col s12 m4">
                                <div class="card small" style="margin: 15px auto; ">
                                    <a href="./detail.html?id=${t.team.id}">
                                        <div class="card-image waves-effect waves-block waves-light" style="padding : 20px;">
                                            <img class="responsive-img" src="${imgSrc}" alt="${t.team.name}">
                                        </div>
                                    </a>
                                    <div class="card-action blue darken-4 white-text">
                                        <span class="card-title truncate">${t.team.name}</span>
                                        <a href="./detail.html?id=${t.team.id}">SEE DETAILS</a>
                                    </div>
                                </div>
                            </div>
                                `;
            })
        }
    });
    $('.progress').hide();
    // Sisipkan komponen card ke dalam elemen dengan id #content
    document.getElementById("clubs").innerHTML = clubHTML;
  }
  
export default showClubs;