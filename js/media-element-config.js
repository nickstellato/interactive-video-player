(function($){
    $('video').mediaelementplayer({
        features:   ['playpause', 'current', 'progress', 'duration', 'volume','fullscreen'],
        videoHeight: "100%",
        videoWidth: "100%"
    });
})(jQuery);