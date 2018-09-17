
function faceQuote(yourMomsFace){
    var URL = "https://api-us.faceplusplus.com/facepp/v3/detect";
    var APIkey = "?api_key=xZw11Mwma4o31epWqSrnYdxMVP2CQVw-";
    var secretKey = "&api_secret=XNA10V8mGxa4Hk03EU7TGZyKUZnkx6Hj";
    var yourFace = "&image_url=";
    var faceTokens = yourFace + yourMomsFace;
    var attrArray = [
        'gender',
        'age',
        'smiling',
        'headpose',
        'facequality',
        'blur',
        'eyestatus',
        'emotion',
        'ethnicity',
        'beauty',
        'mouthstatus',
        'eyegaze',
        'skinstatus'
    ];
    var returnAttributes = "&return_attributes=" + attrArray;
    console.log("attribute array: ",attrArray);

    var queryURL = URL + APIkey + secretKey + faceTokens + returnAttributes;

    var anger;
    var disgust;
    var fear;
    var happiness;
    var neutral;
    var sadness;
    var surprise;

    $.ajax({
        url: queryURL,
        method: "POST"
    }).then(function(response){
        anger = response.faces[0].attributes.emotion.anger;
        disgust = response.faces[0].attributes.emotion.disgust;
        fear = response.faces[0].attributes.emotion.fear;
        happiness = response.faces[0].attributes.emotion.happiness;
        neutral = response.faces[0].attributes.emotion.neutral;
        sadness = response.faces[0].attributes.emotion.sadness;
        surprise = response.faces[0].attributes.emotion.surprise;
        console.log("emotions",anger,disgust,fear,happiness,neutral,sadness,surprise);
        var emotionArray = [
            anger,
            disgust,
            fear,
            happiness,
            neutral,
            sadness,
            surprise
        ]
        var emotionArrayString = [
            "anger",
            "disgust",
            "fear",
            "happiness",
            "inspire",
            "sadness",
            "surprise"
        ]

// http://quotes.rest/quote/search?category=anger&minlength=100&maxlength=300&private=false

        var max = Math.max.apply(null,emotionArray);
        var indexMax = emotionArray.indexOf(max);
        console.log("emotion",indexMax,emotionArrayString[indexMax]);
        category = "?category=" + emotionArrayString[indexMax];
        var Qurl = "http://quotes.rest/quote/search";
        var Qapi = "&api_key=lUUqEhaz6FZnQ4lxr_WHoAeF";
        var maxLength = 100;
        var Qlength = "&maxlength=" + maxLength;
        var QQurl = Qurl + category + Qapi + Qlength;
        $.ajax({
            url: QQurl,
            method: "GET"
        }).then(function(data){
            console.log("data",data.contents.quote);
            finalQuote = $("<p>");
            finalQuote.addClass("quote");
            finalQuote.text(data.contents.quote);
            $("#quotes").append(finalQuote);
    
        })
    })
}