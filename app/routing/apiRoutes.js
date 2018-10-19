// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
var participant = require("../data/participant");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/participant", function(req, res) {
    res.json(participant);
  });

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/participant", function(req, res) {

    var matchFriend = {
      name: "",
      occupation: "",
      quote: "",
      image: "",
      matchDifference: "1000"
    }

    var surveyData = req.body;
    var surveyScores = surveyData.scores;

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {

      totalDifference = 0;

        for (var j = 0; j < friends[i].scores.length; j++) {

          totalDifference += Math.abs(parseInt(surveyScores[j]) - parseInt(friends[i].scores[j]));
        }

        console.log("Friends name: " + friends[i].name, "Total Score: ", totalDifference);

        if (totalDifference <= matchFriend.matchDifference) {
          matchFriend.name = friends[i].name;
          matchFriend.occupation = friends[i].occupation;
          matchFriend.quote = friends[i].quote;
          matchFriend.image = friends[i].image;
          matchFriend.matchDifference = totalDifference;

          console.log("the new match friend is: " + matchFriend.name + "\n");
        } else {
          console.log(friends[i].name + " is not your best friend \n");
        }

        
    }


    participant.push(surveyData);
    console.log(participant);
    res.json(matchFriend);
    console.log(matchFriend);
  });

};
