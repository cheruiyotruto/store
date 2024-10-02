let slide = document.getElementById("slide");
let angleRight = document.getElementById("angleright");
let angleLeft = document.getElementById("angleleft");
     let slideImage = [
      "image/adven14.jpg","image/adven2.jpg","image/adven3.jpg","image/adven4.jpg"
     ];
     let i = 0;
     
     angleRight.onclick = function() {
         if(i < 3) {
            slide.src = slideImage[i + 1];
            i++;
         }
     }
     angleLeft.onclick = function() {
         if(i > 0) {
            slide.src = slideImage[i - 1];
            i--;
         }
     }


let navSection = document.getElementById("nav");
let openNav = document.getElementById("bars");
let closeNav = document.getElementById("times");
let myLinks = document.getElementById("links");
let myLink1 = document.getElementById("link1");
let myLink2 = document.getElementById("link2");
let myLink3 = document.getElementById("link3");
let myLink4 = document.getElementById("link4");
let myLink5 = document.getElementById("link5");


    openNav.onclick = function() {
       navSection.style.transform = "translateX(100%)";
    }
    
    closeNav.onclick = function() {
       navSection.style.transform = "translateX(0%)"; 
    }
    myLinks.onclick = function() {
       navSection.style.transform = "translateX(0%)";
    }
    myLink1.onclick = function() {
       navSection.style.transform = "translateX(0%)";
    }
    myLink2.onclick = function() {
       navSection.style.transform = "translateX(0%)";
    }
    myLink3.onclick = function() {
       navSection.style.transform = "translateX(0%)";
    }
    myLink4.onclick = function() {
       navSection.style.transform = "translateX(0%)";
    }
    myLink5.onclick = function() {
       navSection.style.transform = "translateX(0%)";
    }
