$(document).ready(function () {

    var participant = [];
    var matchFriend = {};



    $("#survey").on("submit", function (event) {
        event.preventDefault();

        // Here we grab the form elements
        var surveyData = {
            name: $("#name").val().trim(),
            occupation: $("#occupation").val().trim(),
            quote: $("#quote").val().trim(),
            image: $("#image").val().trim(),
            scores: [
                $("#answerOne").val(),
                $("#answerTwo").val(),
                $("#answerThree").val(),
                $("#answerFour").val(),
                $("#answerFive").val(),
                $("#answerSix").val(),
                $("#answerSeven").val(),
                $("#answerEight").val(),
                $("#answerNine").val(),
                $("#answerTen").val()
            ]
        };

        console.log(surveyData);

        $.post("/api/participant", surveyData,
            function (data) {

                console.log(data);
                participant.push(surveyData);
                console.log(participant);

                addResults(data);
            });
    });

    function addResults(data) {
        $("#matchPhoto").attr("src", data.image);
        $("#matchName").html(data.name);
        $("#matchJob").html("Occupation: " + data.occupation);
        $("#matchQuote").html("Quote: " + data.quote);
    }

    // $("#modalResult").on("#submit"), function (event) {
    //     event.preventDefault();
    //     window.location.href="/home";
    // }
});