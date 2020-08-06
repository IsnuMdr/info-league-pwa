import showMatches from "./components/matches.js";
import showClubs from "./components/clubs.js";
import showStanding from "./components/standings.js";
import showDetails from "./components/details.js";
import showFavClubById from "./components/favClubs.js";
import {getById, getAll} from "./db.js";

const baseUrl = "https://api.football-data.org/v2/";
const apiKey = "9415cbb0d8864a0bbb0b7ca9da903fbf";
const idLeague = "2015";

function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

function json(response) {
    return response.json();
}

function error(error) {
    console.log("Error : " + error);
}

// Blok kode untuk melakukan request data json
function getMatches() {
    fetch(`${baseUrl}competitions/${idLeague}/matches`, {
            headers: {
                'X-Auth-Token': apiKey
            }
        })
        .then(status)
        .then(json)
        .then(function (data) {
            showMatches(data);
        })
        .catch(error);
}

function getClubs() {
    fetch(`${baseUrl}competitions/${idLeague}/standings`, {
            headers: {
                'X-Auth-Token': apiKey
            }
        })
        .then(status)
        .then(json)
        .then(function (data) {
            showClubs(data);
        })
        .catch(error);
}

function getClubById() {
    return new Promise(function (resolve, reject) {
        let urlParams = new URLSearchParams(window.location.search);
        let idParam = urlParams.get("id");

        fetch(`${baseUrl}teams/${idParam}/`, {
                headers: {
                    'X-Auth-Token': apiKey
                }
            })
            .then(status)
            .then(json)
            .then(function (data) {
                showDetails(data);
            })
            .catch(error);
    });
}

function getStandings() {

    fetch(`${baseUrl}competitions/${idLeague}/standings`, {
            headers: {
                'X-Auth-Token': apiKey
            }
        })
        .then(status)
        .then(json)
        .then(function (data) {
            showStanding(data);
        })
        .catch(error);
}

function getSavedClubs() {
    getAll().then(function (data) {
        showFavClubById(data);
    })
}

function getSavedClubById() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = Number(urlParams.get("id"));

    getById(idParam).then(function (club) {
        // console.log(club);
        showDetails(club);
    });
    return idParam;
}

export {getMatches, getClubs, getClubById, getStandings, getSavedClubs, getSavedClubById};
