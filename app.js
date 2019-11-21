'use strict'

// Created with assitance from various websites and advice from fellow classmates.

// Assign Base Variables
var rand = [];
var products = [];
var voteCtr = 0;
var overAllCount = 0;
var workingImages = [];

// Create Products Array
function Product(name, imgURL, ) {
  this.name = name;
  this.imgURL = imgURL;
  this.clickCtr = 0;
  this.displayCount = 0;
  this.graphCount = 0;
}
 
products[0] = new Product('Bag', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/bag.jpg');
products[1] = new Product('Banana', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/banana.jpg');
products[2] = new Product('Bathroom', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/bathroom.jpg');
products[3] = new Product('Boots', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/boots.jpg');
products[4] = new Product('Breakfast', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/breakfast.jpg');
products[5] = new Product('Bubblegum', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/bubblegum.jpg');
products[6] = new Product('Chair', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/chair.jpg');
products[7] = new Product('Cthulhu', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/cthulhu.jpg');
products[8] = new Product('Dog-duck', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/dog-duck.jpg');
products[9] = new Product('Shark', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/shark.jpg');
products[10] = new Product('Dragon', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/dragon.jpg');
products[11] = new Product('Pen', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/pen.jpg');
products[12] = new Product('Pet-sweep', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/pet-sweep.jpg');
products[13] = new Product('Scissors', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/scissors.jpg');
products[14] = new Product('Taun-Taun', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/tauntaun.jpg');
products[15] = new Product('Unicorn', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/unicorn.jpg');
products[16] = new Product('Water-can', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/water-can.jpg');
products[17] = new Product('Pet-sweep', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/pet-sweep.jpg');
products[18] = new Product('Wine-Glass', 'https://raw.githubusercontent.com/codefellows/seattle-201d60/master/class-11/lab/assets/wine-glass.jpg');

function Product(name, imgURL, ) {
  this.name = name;
  this.imgURL = imgURL;
  this.clickCtr = 0;
  this.displayCount = 0;
  this.graphCount = 0;
}

function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

// Click count
Product.prototype.increaseClickCounter = function () {
    this.clickCtr++;
}

// Randomizor
addEventListener("click", function () {

    // Reset
    if (workingImages.length >= 18) {
    for (var i = 0; i < products.length; i++) {
            products[i].displayCount = 0;
        }
       workingImages = [];
    }

    // Adds to click counter
    for (var i = 0; i < products.length; i++) {

        if (event.target.src === products[i].imgURL) {
            products[i].clickCtr++;
            console.log(products[i].clickCtr, products[i].name);
        }

        if (event.target.src === products[i].imgURL) {
            overAllCount++;
            console.log(overAllCount, 'Over all');
        }
    }

    //image slot 1
    var img1 = document.getElementById('leftImage');
    var imgslot1 = products[Math.floor(Math.random() * products.length)];

    while (imgslot1.displayCount != 0) {
        imgslot1 = products[Math.floor(Math.random() * products.length)];

    }
    imgslot1.displayCount++;
    imgslot1.graphCount++;
    workingImages.push(imgslot1);
    img1.setAttribute('src', imgslot1.imgURL);

    var name1 = document.getElementById('leftImage-name');
    name1.textContent = imgslot1.name;


    //image slot 2
    var img2 = document.getElementById('middleImage');
    var imgslot2 = products[Math.floor(Math.random() * products.length)];

    while (imgslot2.displayCount != 0) {
        imgslot2 = products[Math.floor(Math.random() * products.length)];

    }
    imgslot2.displayCount++;
    imgslot2.graphCount++;
    workingImages.push(imgslot2);
    img2.setAttribute('src', imgslot2.imgURL);

    var name2 = document.getElementById('middleImage-name');
    name2.textContent = imgslot2.name;

    //image slot 3 
    var img3 = document.getElementById('rightImage');

    var imgslot3 = products[Math.floor(Math.random() * products.length)];

    while (imgslot3.displayCount != 0) {
        imgslot3 = products[Math.floor(Math.random() * products.length)];
    }
    img3.setAttribute('src', imgslot3.imgURL);
    imgslot3.displayCount++;
    imgslot3.graphCount++;
    workingImages.push(imgslot3);
    var name3 = document.getElementById('rightImage-name');
    name3.textContent = imgslot3.name;

    //chart below after 24 clicks
    if (overAllCount === 24) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            
            type: 'bar',
            data: {
                labels: ['Total Slections', products[0].name, products[1].name, products[2].name, products[3].name, products[4].name, products[5].name, products[6].name, products[7].name, products[8].name, products[9].name, products[10].name, products[11].name, products[12].name, products[13].name, products[14].name, products[15].name, products[16].name, products[17].name, products[18].name],
                datasets: [{
                    label: 'Your Favorite Products',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [overAllCount, products[0].clickCtr, products[1].clickCtr, products[2].clickCtr, products[3].clickCtr, products[4].clickCtr, products[5].clickCtr, products[6].clickCtr, products[7].clickCtr, products[8].clickCtr, products[9].clickCtr, products[10].clickCtr, products[11].clickCtr, products[12].clickCtr, products[13].clickCtr, products[14].clickCtr, products[15].clickCtr, products[16].clickCtr, products[17].clickCtr, products[18].clickCtr,]
                },
                {
                    label: "Total Times Shown",
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(255, 255, 255)',
                    data:
                        [, products[0].graphCount, products[1].graphCount, products[2].graphCount, products[3].graphCount, products[4].graphCount, products[5].graphCount, products[6].graphCount, products[7].graphCount, products[8].graphCount, products[9].graphCount, products[10].graphCount, products[11].graphCount, products[12].graphCount, products[13].graphCount, products[14].graphCount, products[15].graphCount, products[16].shown, products[17].graphCount, products[18].graphCount,],
                    type: 'bar'
                }]
            },
            options: {}
        });
    }
    if(overAllCount == 24){
        addLocalStorage();
    }
});

// Lab 13 add-on
function addLocalStorage(){
var localData = JSON.stringify(products);
localStorage.setItem('products', localData );
var retrieved = localStorage.getItem('products',localData);
JSON.parse(localData);
console.log(localData);
}

addLocalStorage();