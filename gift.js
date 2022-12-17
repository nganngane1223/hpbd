var to = 'Friend!';
var gift_url = 'https://www.facebook.com/profile.php?id=100011499107596';
var gift_image_url = 'https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/313275847_1848271445566141_8758322731333997134_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t-nqepsq6AUAX8dXQLZ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDHhQxcByxoxJ2IUeybBTNnxEiyW0envGID-7hptk8lTA&oe=63A2B052';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementsByClassName('book')[0].classList.add('book-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

