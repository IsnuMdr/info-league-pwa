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
    "endpoint": "https://fcm.googleapis.com/fcm/send/fNpDoCtq6Oc:APA91bHrnr1MinkrIP6D1enLOs8ugvTC6OOWLutnWMiEhL4Jrp6p2bfATEktq-66ZCT96TPJdJshBvEXYaafBxv6WSeWfQW0QWNf2rnByzRFh1v6XEZ_2-XuL7I126ewKkfvJNQ8f5aw",
    "keys": {
        "p256dh": "BAK5qMCF4e8aO/O6BK/+BXB6FsdLIs+Ev8Z1aZJAq27qQJoorUJ67ZsI4OBgeHCy82DF1bZDJGpWPIibkyvK4aQ=",
        "auth": "79OpIKKH2/uMhRui1xG+7w=="
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