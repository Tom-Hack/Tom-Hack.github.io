var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/gothic.jpg') {
      myImage.setAttribute ('src','bilder/Koala.jpg');
    } else {
      myImage.setAttribute ('src','bilder/gothic.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Bitte geben deinen Namen ein....BROCHA!.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Alles klar, lass endlich Titanfall zocken, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ist cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
