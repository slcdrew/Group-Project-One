var URL = "https://api-us.faceplusplus.com/facepp/v3/detect";
var APIkey = "?api_key=xZw11Mwma4o31epWqSrnYdxMVP2CQVw-";
var secretKey = "&api_secret=XNA10V8mGxa4Hk03EU7TGZyKUZnkx6Hj";
var yourFace = "&image_url=";
var yourMomsFace = "https://i1.wp.com/www.holidaymatinee.com/wp-content/uploads/2010/06/crying-children-jill-greenberg2.jpg?resize=540%2C644";
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
    var emotionArray = [
        anger,
        disgust,
        fear,
        happiness,
        neutral,
        sadness,
        surprise
    ];
    var emotionArrayString = [
        "angry",
        "disgusted",
        "afraid",
        "happy",
        "indifferent",
        "sad",
        "surprised"
    ];
    var max = Math.max.apply(null,emotionArray);
    var indexMax = emotionArray.indexOf(max);
    emotion = String(emotionArrayString[indexMax]);
    secondCall(emotion);
})


function secondCall(emotion){
    var Qurl = "http://quotes.rest/quote/search.json";
    var category = "?category=" + emotion;
    var Qapi = "&api_key=lUUqEhaz6FZnQ4lxr_WHoAeF";
    var QuQurl = Qurl + category + Qapi + "&maxlength=100";
    $.ajax({
        url: QuQurl,
        method: "GET"
    }).then(function(data){
        console.log("quote data: ",data);
        var quote1 = $("<p>");
        quote1.addClass("quote");
        quote1.text(data.contents.quote);
        $("#quotes").append(quote1);
    })
}
