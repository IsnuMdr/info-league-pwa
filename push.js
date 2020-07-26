const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BKnCV_UsihtVBCNCpnFLlKi6x6IF7yxlfMB9AxtBuci6qwWTEO4Zjz29geSrW9e8g-wIYSdUk7iklqk6hoSt4Yg",
    "privateKey": "nqI0yh6WvXY4fsfaLkn9Wht_nO0-GOg1mooSBPb-nc8"
};


webPush.setVapidDetails(
    'mailto:isnu.mdr@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dl9EwdqmzTg:APA91bE6z9y8HiLUygFh9u5k_SayqprWRoY6cpGHJjLpXXp_N8YA_WAe_0y_5MbxcfFPYs2_RlAnqnxMdBq6_vy94tTfLD6cS9wO_n_xll77L7PIbMXXW7hCrO3ZoaUYGD3QkdhEx3Nw",
    "keys": {
        "p256dh": "BJNmp1h0bxrAFm9NkhSmT+H3WEt+bzLi4rP6DFnLUyaQxF4GO+01PYRFFnLi+PLUXKFtgALitl9OIFGMqtY9WD4=",
        "auth": "DPYnEh4z9w8oGebw7i0BhQ=="
    }
};

const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
    gcmAPIKey: '184581507792',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
).then(function (data) {
    console.log(data)
}).catch(function (e){
    console.log(e)
})
