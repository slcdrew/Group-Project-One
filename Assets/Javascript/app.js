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


window.ajaxSuccess = function () {
	response = JSON.parse(this.responseText);
  // console.log("ajaxSuccess", typeof this.responseText);
  // console.log("ajaxSuccess this", JSON.parse(this.response).secure_url);
  document.getElementById('uploaded').setAttribute("src", response["secure_url"]);
  // document.getElementById('results').innerText = this.responseText;
  faceQuote(JSON.parse(this.response).secure_url);
}

window.AJAXSubmit = function (formElement) {
  // console.log("starting AJAXSubmit");
  if (!formElement.action) { return; }
  var xhr = new XMLHttpRequest();
  xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {      
      document.getElementById('progress-bar').style.width = event.loaded / event.total 				* 100 + '%';
      document.getElementById('progress-bar').innerHTML = event.loaded / event.total * 				100 + '%';
      }
    }, false);
  xhr.onload = ajaxSuccess;
  xhr.open("post", "https://api.cloudinary.com/v1_1/dzphyexnz/image/upload");
  xhr.send(new FormData(formElement));
  // console.log("formElement",$(formElement));
}