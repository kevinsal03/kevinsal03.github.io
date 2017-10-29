var player = videojs('live-video');
live-video.on('timeupdate', function() {
    //$("#sobytes-liveplayer-offline-message").hide();
    if (live-video.currentTime() === last_value) {
        if (offline_test > 3) {
            live-video.userActive(true);
            $("#video .vjs-live-display").text("OFFLINE");
            $("#video .vjs-remaining-time-display").text("OFFLINE");
            //$("#sobytes-live-image").attr("src", "/images/circle_red.png");
            offline_test = 0;
        }
        offline_test++;
    } /*else {
        offline_test = 0;
        $("#video .vjs-live-display").text("LIVE");
        $("#video .vjs-remaining-time-display").text("LIVE");
        $("#sobytes-live-image").attr("src", "/images/circle_green.png");
    } */
    last_value = live-video.currentTime();
});
