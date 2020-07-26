import {getClubById, getSavedClubById} from "./api.js";
import { getById, saveForLater, deleteFavTeam } from "./db.js";

document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const isFromSaved = urlParams.get("saved");
    const idParam = Number(urlParams.get("id"));
    const btnSave = document.getElementById("save");
    let teamId;
    let item;

    if (isFromSaved) {
        // ambil artikel lalu tampilkan
        teamId = getSavedClubById();
    } else {
        getClubById()
            .then(res => {
                // console.log(res);
                item = res;
                teamId = item.id;
            })
            .catch(err => {
                console.error(err);
                M.toast({
                    html: `Can't connect to network or API request limit reached.`
                });
            });
    }

    // cek team saved/belum
    getById(idParam)
        .then(team => {
            if (team) {
                btnSave.firstElementChild.innerText = 'favorite';
            } else {
                btnSave.firstElementChild.innerText = 'favorite_border';
            }
        });

    btnSave.addEventListener("click", async () => {
        console.log("Saved button clicked.");
        const isTeamSaved = await getById(idParam);

        if (!isTeamSaved) {
            btnSave.firstElementChild.innerText = 'favorite';
            saveForLater(item);
            console.log(item);
        } else {
            if (isFromSaved) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You will remove this team from favorite.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, remove it!'
                }).then((result) => {
                    if (result.value) {
                        btnSave.firstElementChild.innerText = 'favorite_border';
                        deleteFavTeam(teamId);
                        window.location.href = 'index.html#favorite-clubs';
                    }
                })
            } else {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You will remove this team from favorite.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, remove it!'
                })
                btnSave.firstElementChild.innerText = 'favorite_border';
                deleteFavTeam(item.id);
            }
        }
    })
});
