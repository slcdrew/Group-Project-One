//on click upload image (nested functions)
//image saves to cloudinary DB
//image is scanned by Face++ returns tags in an object   need to bring in variable emotion attribute and sort by math.max() (see slack group)
//Object tags are stored in an array?
//API call to quote rest service (theysaidso.com/api) and pass face tags as paramters to return quote object
//Does Face++ tagging and quote object tag write back to cloudinary???? R&D is needed here!!
//Display image with  quote on DOM


//**If image tag is neautral the quote service must be passed a value of 'indifferent' */

//http://quotes.rest/#!/quote/get_quote_search
//API KEY lUUqEhaz6FZnQ4lxr_WHoAeF

//https://cloudinary.com/console
//UN: andrew.mpederson@gmail.com
//PW: Inmoment1!


//CLOUDINARY PULL REQUEST

var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzphyexnz";
var CLOUDINARY_UPLOAD_PRESET = 'uqgawuvl';

var imgPreview = document.getElementById("img-preview");
var fileUpload = document.getElementById("file-upload");

fileUpload.addEventListener("change", function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('upload_present', CLOUDINARY_UPLOAD_PRESET);

axios ({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
}).then(function(res) {
    console.log(res);
}).catch(function(err) {
    console.log(err);
});
});


