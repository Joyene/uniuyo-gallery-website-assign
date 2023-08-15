let index = 0;
let transitionDelay = 2000;

let slideContainer = document.querySelector(".slideshow");
4;
let slides = slideContainer.querySelectorAll(".slide");

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay / 1000}s linear`;
}

showSlide(index);

function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });

  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

// transition to next slide every x seconds
setInterval(() => showSlide(index), transitionDelay);
//header code
const header = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve(`University of uyo is a brand. <br> Protect it.`);
  }, 3000);
});

header.then(function (value) {
  document.getElementById("demo").innerHTML = value;
});
//paragraph
const paragraph = new Promise((myResolve, myReject) => {
  setTimeout(function () {
    myResolve(
      `A uniuyo gallery website project that display different learning locations in university of uyo.`
    );
  }, 4000);
});
paragraph.then(function (value1) {
  document.getElementById("para").innerHTML = value1;
});
//image enlargement
let img1 = document.getElementById("eimag1");
function enlarge1() {
  img1.style.width = "500px";
  img1.style.height = auto;
  img1.style.transition = "width 0.5s ease";
}
function reset1() {
  img1.style.width = "300px";
  img1.style.height = "200px";
  img1.style.transition = "width 0.5s ease";
}

let img2 = document.getElementById("img2");
function reset2() {
  img2.style.width = "500px";
  img2.style.height = auto;
  img2.style.transition = "width 0.5s ease";
}
function enlarge2() {
  img2.style.width = "350px";
  img2.style.height = "200px";
  img2.style.transition = "width 0.5s ease";
}

let img3 = document.getElementById("img3");
function reset3() {
  img3.style.width = "500px";
  img3.style.height = auto;
  img3.style.transition = "width 0.5s ease";
}
function enlarge3() {
  img3.style.width = "350px";
  img3.style.height = "200px";
  img3.style.transition = "width 0.5s ease";
}

let img4 = document.getElementById("img4");
function reset4() {
  img4.style.width = "500px";
  img4.style.height = auto;
  img4.style.transition = "width 0.5s ease";
}
function enlarge4() {
  img4.style.width = "350px";
  img4.style.height = "200px";
  img4.style.transition = "width 0.5s ease";
}

let img5 = document.getElementById("img5");
function reset5() {
  img5.style.width = "500px";
  img5.style.height = auto;
  img5.style.transition = "width 0.5s ease";
}
function enlarge5() {
  img5.style.width = "350px";
  img5.style.height = "200px";
  img5.style.transition = "width 0.5s ease";
}

let img6 = document.getElementById("img6");
function reset6() {
  img6.style.width = "500px";
  img6.style.height = auto;
  img6.style.transition = "width 0.5s ease";
}
function enlarge6() {
  img6.style.width = "350px";
  img6.style.height = "200px";
  img6.style.transition = "width 0.5s ease";
}

let img7 = document.getElementById("img7");
function reset7() {
  img7.style.width = "500px";
  img7.style.height = auto;
  img7.style.transition = "width 0.5s ease";
}
function enlarge7() {
  img7.style.width = "350px";
  img7.style.height = "200px";
  img7.style.transition = "width 0.5s ease";
}

let img8 = document.getElementById("img8");
function reset8() {
  img8.style.width = "500px";
  img8.style.height = auto;
  img8.style.transition = "width 0.5s ease";
}
function enlarge8() {
  img8.style.width = "350px";
  img8.style.height = "200px";
  img8.style.transition = "width 0.5s ease";
}

let img9 = document.getElementById("img9");
function reset9() {
  img9.style.width = "500px";
  img9.style.height = auto;
  img9.style.transition = "width 0.5s ease";
}
function enlarge9() {
  img9.style.width = "350px";
  img9.style.height = "200px";
  img9.style.transition = "width 0.5s ease";
}

let img10 = document.getElementById("img10");
function reset10() {
  img10.style.width = "500px";
  img10.style.height = auto;
  img10.style.transition = "width 0.5s ease";
}
function enlarge10() {
  img10.style.width = "350px";
  img10.style.height = "200px";
  img10.style.transition = "width 0.5s ease";
}

let img11 = document.getElementById("img11");
function reset11() {
  img11.style.width = "500px";
  img11.style.height = auto;
  img11.style.transition = "width 0.5s ease";
}
function enlarge11() {
  img11.style.width = "350px";
  img11.style.height = "200px";
  img11.style.transition = "width 0.5s ease";
}
let img = document.getElementById("imglg");

function enlargeimg() {
  img.style.width = "500px";
  img.style.height = auto;
  img.style.transition = "width 0.5s ease";
}
function resetimg() {
  img.style.width = "300px";
  img.style.height = "200px";
  img.style.transition = "width 0.5s ease";
}
//nav function
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
