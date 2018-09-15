var URL = "https://api-us.faceplusplus.com/facepp/v3/detect";
var APIkey = "?api_key=xZw11Mwma4o31epWqSrnYdxMVP2CQVw-";
var secretKey = "&api_secret=XNA10V8mGxa4Hk03EU7TGZyKUZnkx6Hj";
var faceTokens = "&image_url=" + "https://designyoutrust.com/wp-content/uploads/2018/06/0-24.jpg";
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
console.log(attrArray[7]);
console.log("attribute array: ",attrArray);

var queryURL = URL + APIkey + secretKey + faceTokens + returnAttributes;
// var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=xZw11Mwma4o31epWqSrnYdxMVP2CQVw-&api_secret=XNA10V8mGxa4Hk03EU7TGZyKUZnkx6Hj&image_url=file:///C:/Users/owner/dev/fun/clock/images/kit-lens-blurry-background-portrait.jpg&return_attributes=emotion"
// var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=xZw11Mwma4o31epWqSrnYdxMVP2CQVw-&api_secret=XNA10V8mGxa4Hk03EU7TGZyKUZnkx6Hj&image_url=http://f2f.org/wp-content/uploads/2015/03/meditationimage.jpg&return_attributes=emotion";
console.log("queryURL",queryURL);

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
        "neutral",
        "sadness",
        "surprise"
    ]
    console.log("array",emotionArray);
    var max = Math.max.apply(null,emotionArray);
    var indexMax = emotionArray.indexOf(max);
    console.log("max",max);
    console.log(indexMax);
    console.log(emotionArrayString[indexMax]);
})
