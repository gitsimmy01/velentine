$( document ).ready(function() {
    $(".mainR").mouseenter(function () {
        $(".blood1,.blood2," +
            ".blood3,.blood4,.blood5,.blood6," +
            ".blood7,.blood8,.blood9,.blood10,.blood11," +
            ".blood12").addClass("feed");
    });
    $(".mainR").mouseleave(function () {
        $(".blood1,.blood2," +
            ".blood3,.blood4,.blood5,.blood6," +
            ".blood7,.blood8,.blood9,.blood10,.blood11," +
            ".blood12").addClass('afterFeed');
    })
    $(".mainR").mouseenter(function () {
        $(this).html("<b style='position: absolute;" +
            "top: 35%;" +
            "left: 26%;font-size: 2rem;color: white;text-shadow:2px 2px 2px 2px black;'>I ❤ U️</b>")
    })
});
