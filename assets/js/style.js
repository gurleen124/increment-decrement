$(document).ready(function () {

    function test() {
        $(".btn-close").click(function () {
            $(this).parent('li').addClass('hide');
        });
    };

    test();

    $("#addToList").click(function () {
        var a = $("#input-value").val();
        $("ul").append('<li>' + a + '<button type="button" class="btn-close ms-4" aria-label="Close"></button></li>')
        test();
    });
});