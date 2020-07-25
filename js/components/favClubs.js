
function showFavClubById(data) {
    // Menyusun komponen card artikel secara dinamis
    $('.progress').show();
    let clubsHTML = "";

    if (data.length === 0) {
        document.getElementById("clubs").innerHTML = '<h5 class="center">There are no favorite clubs.</h5>';
    } else {
        data.forEach(function (club) {
            let imgSrc = club.crestUrl.replace(/^http:\/\//i, 'https://');

            clubsHTML += `
                      <div class="col s12 m4">
                          <div class="card small">
                              <a href="./detail.html?id=${club.id}&saved=true">
                                  <div class="card-image waves-effect waves-block waves-light" style="padding : 20px;">
                                      <img class="responsive-img" src="${imgSrc}" alt="${club.shortName}" title="${club.shortName}">
                                  </div>
                              </a>
                              <div class="card-action blue darken-4 white-text">
                                  <span class="card-title truncate">${club.shortName}</span>
                                  <a href="./detail.html?id=${club.id}&saved=true">SEE DETAILS</a>
                              </div>
                          </div>
                      </div>`;
        });
        $('.progress').hide();
        // Sisipkan card ke #body-content
        document.getElementById("clubs").innerHTML = clubsHTML;
    }
}

export default showFavClubById;