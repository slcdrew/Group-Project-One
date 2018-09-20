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
        console.log("emotions: anger",anger,"disgust",disgust,"fear",fear,"happiness",happiness,"neutral",neutral,"sadness",sadness,"surprise",surprise);
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

        var synAnger = [
            "jealousy",
            "spite",
            "hatred",
            "outrage",
            "rage"
        ]
        var synDisgust = [
            "disgust",
            "sick",
            "gross",
            "disturbed",
            "dislike"
        ]
        var synFear = [
            "anxiety",
            "doubt",
            "terror",
            "worry",
            "concern"
        ]
        var synHappiness = [
            "joy",
            "bliss",
            "delight",
            "euphoria",
            "pleasure"
        ]
        var synInspire = [
            "excitement",
            "gratitude",
            "success",
            "enlightenment",
            "impression"
        ]
        var synSadness = [
            "sorrow",
            "depression",
            "worry",
            "heartache",
            "remorse"
        ]
        var synSurprise = [
            "amazement",
            "shock",
            "epiphany",
            "wow",
            "bewilderment"
        ]

        var emotionSynonymArray = [
            synAnger,
            synDisgust,
            synFear,
            synHappiness,
            synInspire,
            synSadness,
            synSurprise
        ]

        
        var max = Math.max.apply(null,emotionArray);
        var indexMax = emotionArray.indexOf(max);
        console.log("indexMax",indexMax);
        var emo = emotionArrayString[indexMax];
        console.log("emo",emo);
        var categoryData = emotionSynonymArray[indexMax];
        console.log(emotionSynonymArray[indexMax]);
        
        for(i=0; i<5; i++){
            var category = "?category=" + categoryData[i];
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

        }

    })
}



var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzphyexnz/image/upload";
var CLOUDINARY_UPLOAD_PRESET = "uqgawuvl";

var imgPreview = document.getElementById('jobImage2');
var fileUpload = document.getElementById("input");

fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function (res) {
        console.log(res);
        // document.getElementById('uploaded').setAttribute("src", res.data["secure_url"]);
        // document.getElementById('uploaded').style.border = "2px solid black";
        $("#uploaded").attr("src", res.data["secure_url"]);
        $(".container2").hide();
        $(".selectBtn").hide();
        $("#angleTitle").show();
        $(".picContainer").show();
        // document.getElementById('results').innerText = this.responseText;
        faceQuote(res.data.secure_url)
        
    }).catch(function (err) {
        console.error(err);
    });
});


$(".start").on("click", function () {
    $(".start").hide();
    $(".container2").show();
    $(".selectBtn").show();
})

// $(".selectBtn").on("click", function() {
//     $("#angleTitle").show();
//     $(".picContainer").show();
// });

