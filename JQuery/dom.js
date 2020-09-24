$(document).ready(function () {
    let btn = $('<input type="button" value="new button" />');
    $("body").append(btn);

    btn.click(function () {
        alert("Button clicked");

    });




    $("#div1").mouseover(function () {
        $('#div1').css({
            'backgroundColor': 'blue',


        })

            .mouseleave(function () {
                $('#div1').css({
                    'backgroundColor': '',
                })
            })

        $("#myBtn").click(function () {
            var str = $("#myInput").val();
            alert(str);

        })



        var input = $("form input:text").css({
            background: "white",
            border: "1px black solid"



        });



    });

})