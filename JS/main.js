$(document).ready(function () {
    $(".login").hide();
    $(".register_li").addClass("active");
    $(".register_li").click(function () {
        $(this).addClass("active");
        $(".register").show();
    })
});