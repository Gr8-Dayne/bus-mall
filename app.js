'use strict';

/// This code was used with the aid of fellow classmates and various internet recources. ///

// Img sources/designations
var img = [
  { imageSrc:'assets/bag.jpg', name:'bag'},
  { imageSrc:'assets/banana.jpg', name:'banana'},
  { imageSrc:'assets/bathroom.jpg', name:'bathroom'},
  { imageSrc:'assets/boots.jpg', name:'boots'},
  { imageSrc:'assets/breakfast.jpg', name:'breakfast'},
  { imageSrc:'assets/bubblegum.jpg', name:'bubblegum'},
  { imageSrc:'assets/chair.jpg', name:'chair'},
  { imageSrc:'assets/cthulhu.jpg', name:'cthulhu'},
  { imageSrc:'assets/dog-duck.jpg', name:'dog-duck'},
  { imageSrc:'assets/dragon.jpg', name:'dragon'},
  { imageSrc:'assets/pen.jpg', name:'pen'},
  { imageSrc:'assets/pet-sweep.jpg', name:'pet-sweep'},
  { imageSrc:'assets/scissors.jpg', name:'scissors'},
  { imageSrc:'assets/shark.jpg', name:'shark'},
  { imageSrc:'assets/sweep.jpg', name:'sweep'},
  { imageSrc:'assets/tautaun.jpg', name:'tautaun'},
  { imageSrc:'assets/unicorn.jpg', name:'unicorn'},
  { imageSrc:'assets/usb.jpg', name:'usb'},
  { imageSrc:'assets/water-can.jpg', name:'water-can'},
  { imageSrc:'assets/wine-glass.jpg', name:'wine-glass'},
];

// Global containers
var container = document.getElementById('main-container');
var leftImage = document.getElementById('left-image');
var centerImage = document.getElementById('center-iamge');
var rightImage = document.getElementById('right-image');
var leftImagePara = document.getElementById('left-page');
var centerImagePara = document.getElementById('center-page');
var rightImagePara = document.getElementById('right-page');

// Counter
var totalClicks = 0;
var previousImage = [];
var allImages = [];

var Images = function(name, imageUrl){
  this.name = name;
  this.imageSrc = imageUrl;
  this.clicks = 0;
  this.views = 0;
}

// random image generator
var randomImages = function(){
  return Math.floor(Math.floor(Math.random() * img.length));
}

// pick random images
var pickRandomImages = function(){
  previousImage = [];
  var leftIndex = randomImages();
  var leftImage = allImages[leftIndex];
  previousImage.push(leftImage);
  var centerIndex = randomImages();
  centerImage = allImages[centerIndex];
  previousImage.push(centerImage);
}

/// Chart time
// var ctx = document.getElementById('myChart');

// looping through the images?
for(var i = 0; i < img.length; i++){
  allImages.push(new Images(img[i].name, img[i].imageSrc));
}

console.log(allImages);

// render
var renderRandomImages = function(){
  console.log('1st image', previousImage[0]);
  console.log(leftImage);
var leftEl = document.getElementById('left-image');
var centerEl = document.getElementById('center-image');
var rightEl = document.getElementById('right-image');
  leftEl.setAttribute('src', allImages[0].imageSrc);
  centerEl.setAttribute('src', allImages[1].imageSrc);
  rightEl.setAttribute('src', allImages[2].imageSrc);
  leftImagePara.textContent = allImages[0].name;
  centerImagePara.textContent = allImages[1].name;
  rightImagePara.textContent = allImages[2].name;
}

renderRandomImages();
pickRandomImages();