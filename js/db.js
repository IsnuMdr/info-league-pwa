// membuat database dan object store
const dbPromised = idb.open("ligue1", 1, function (upgradeDb) {
    const teamsObjectStore = upgradeDb.createObjectStore("teams", {
        keyPath: "id"
    });
    teamsObjectStore.createIndex("shortName", "shortName", {
        unique: false
    });
});

// function save for later
function saveForLater(team) {
    dbPromised
        .then(function (db) {
            const tx = db.transaction("teams", "readwrite");
            const store = tx.objectStore("teams");
            // console.log(team);
            store.put(team);
            return tx.complete;
        })
        .then(function () {
            console.log("Team berhasil disimpan.");
            M.toast({
                html: `Added to favorite.`
            });
        })
        .catch(error => console.log(error));
}

// mengambil semua saved team
function getAll() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                const tx = db.transaction("teams", "readonly");
                const store = tx.objectStore("teams");
                return store.getAll();
            })
            .then(function (teams) {
                resolve(teams);
            });
    });
}

// mengambil detail saved team
function getById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                const tx = db.transaction("teams", "readonly");
                const store = tx.objectStore("teams");
                return store.get(id);
            })
            .then(function (team) {
                resolve(team);
            })
            .catch(error => {
                reject(error);
            })
    });
}

// function delete team
function deleteFavTeam(team) {
    dbPromised
        .then(function (db) {
            const tx = db.transaction("teams", "readwrite");
            const store = tx.objectStore("teams");
            store.delete(team);
            return tx.complete;
        })
        .then(function () {
            console.log("Team berhasil dihapus.");
            M.toast({
                html: `Removed from favorite.`
            });
        })
        .catch(error => console.log(error));
}

export {saveForLater, getAll, getById, deleteFavTeam};