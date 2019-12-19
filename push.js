var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BOHha0zYsZ37u7FcArwzncrRa0OyKzYojMdFsYqW9nqm8IkyBLunnJoMptdWAVMaj9qE0HkC_wayOnsE8KDXcrA",
   "privateKey": "ay9GSvE9mW-5anU5HzYOW_DbFVJTvenKihK7BVGks64"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/d-WCweul83E:APA91bEn4IosuLpxRrsAUA8jEL6DEV_FxI7Lp-mTBGcYkiejrvXYCTZo_LY5R7lkWhYbIbriUb8-WgfyEKWdoM4yTex5EJgnJLmNrH0d1lvJ13pmi381zUr2aMk8WdDvmjzI8zjv9Gxg",
   "keys": {
       "p256dh": "BGSsKdi0wM05eTM5g8amwZeY/v6EvKmW7jRM/4B61mFYrgOqs31/E4Srfx8fHfj9WY+6LUmwNvX0trHd1/9NWE0=",
       "auth": "FjyuJHjFwOEcuNMfuQavRw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '635413979738',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);