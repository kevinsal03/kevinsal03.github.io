  videoPlayer.on('timeupdate', function() {
    $("#sobytes-liveplayer-offline-message").hide();
    if (videoPlayer.currentTime() === last_value) {
        if (offline_test > 3) {
            videoPlayer.userActive(true);
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
    last_value = videoPlayer.currentTime();
});
