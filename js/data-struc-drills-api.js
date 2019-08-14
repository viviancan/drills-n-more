"use strict";

// $.ajax({
//     method: "GET",
//     url: "https://www.reddit.com/r/learnjavascript/new.json?sort=new&limit=100",
//     data: { key: "value" }
// })
// .done(function( data ) {
//     console.log(data);
// })
// .fail(function( err ) {
//     // error
// });
//



var redditUrl = "https://www.reddit.com/r/learnjavascript/new.json?sort=new&limit=100"
$.get(redditUrl).done(function(data) {
    console.log(">>>>>> MAKING REQUEST TO REDDIT!!!");
    console.log(data);


});



var starWarsUrl = "https://swapi.co/api/people"
$.get(starWarsUrl).done(function(data) {
    console.log(">>>>>> MAKING REQUEST TO STAR WARS!!!");
    console.log(data);
});



var dummyApi = "https://dummyapi.io/api/user"
$.get(dummyApi).done(function(data) {
    console.log(">>>>>> MAKING REQUEST TO dummyApi!!");
    console.log(data);
});



var aphorismsApi = "https://aphorisms.glitch.me/api/all"
$.get(aphorismsApi).done(function(data) {
    console.log(">>>>>> MAKING REQUEST TO Aphorisms API!!");
    console.log(data);
});


