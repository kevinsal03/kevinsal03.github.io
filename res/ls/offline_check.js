var player = videojs('live-video');
var last_value = 0;
var offline_test = 0;
player.on('timeupdate', function() {
    if (player.currentTime() === last_value) {
        if (offline_test > 3) {
            player.userActive(true);
            $("#video .vjs-live-display").text("OFFLINE");
            $("#video .vjs-remaining-time-display").text("OFFLINE");
            offline_test = 0;
        }
        offline_test++;
    }
    last_value = player.currentTime();
});
