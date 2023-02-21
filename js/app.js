(function($) {
    $(window).on("load", function () {
        $('.carouselTicker').not('.reverse').carouselTicker();
        $('.carouselTicker.reverse').carouselTicker({
            direction: "next"
        });
    });

    $(window).on("resize", function () {
        carouselTickerWidthResize.resizeTicker();
    });

    var totalSeconds = 0;
    function countTimer() {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds /3600);
        var minute = Math.floor((totalSeconds - hour*3600)/60);
        var seconds = totalSeconds - (hour*3600 + minute*60);
            if (hour < 10)
                hour = "0"+hour;
            if (minute < 10)
                minute = "0"+minute;
            if (seconds < 10)
                seconds = "0"+seconds;
        $('.timer').each(function() {
            $(this).text(hour + ":" + minute + ":" + seconds);
        });
    }
    setInterval(countTimer, 1000);
})(jQuery);