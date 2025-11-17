$(document).ready(function () {
    $(".nav-btn").click(function () {
        let page = $(this).data("page");

        $("section").removeClass("active");
        $("#" + page).addClass("active");
    });
});
