/** final-frontier.js
 * JavaScript for the final frontier CMS app 
 * 
 * Place your custom JavaScript in this document 
 */

"use strict";

//Making the gallery expand buttons broke the article expand buttons. They should
//work, and the code is all here. If you move the EventListener for "readMore"
//and "close" to the top, the functions work properly and actually expand the article
//but then the gallery buttons stop working
//I really can't figure out why only the top 2 buttons work on this .js

document.getElementById("bigGal").addEventListener("click", bigGal);

function bigGal(){
//     alert("this works");   
    
    var element = document.getElementById("gallery");
    element.classList.replace("imgGallery", "imgGrid");
    
    var element = document.getElementById("img2");
    element.classList.replace("imageHide", "imageShow");
    
    var element = document.getElementById("img3");
    element.classList.replace("imageHide", "imageShow");
    
    var element = document.getElementById("img4");
    element.classList.replace("imageHide", "imageShow");
    
    var element = document.getElementById("img5");
    element.classList.replace("imageHide", "imageShow");
    
    var element = document.getElementById("img6");
    element.classList.replace("imageHide", "imageShow");
    
    var element = document.getElementById("img7");
    element.classList.replace("imageHide", "imageShow");
    
    var element = document.getElementById("img8");
    element.classList.replace("imageHide", "imageShow");
    
    document.getElementById("bigGal").style.visibility="hidden";
    
    var element = document.getElementById("closeImg");
    element.classList.replace("invis", "vis");
    
    var element = document.getElementById("content");
    element.classList.replace("card", "expandedCard"); 
    
    return;
}

document.getElementById("closeImg").addEventListener("click", closeImage);

function closeImage() { 
    
    
    var element = document.getElementById("gallery");
    element.classList.replace("imgGrid", "imgGallery");
    
    var element = document.getElementById("content");
    element.classList.replace("expandedCard", "card");
    
    var element = document.getElementById("closeImg");
    element.classList.replace("vis", "invis");
    
    var element = document.getElementById("img2");
    element.classList.replace("imageShow", "imageHide");
    
    var element = document.getElementById("img3");
    element.classList.replace("imageShow", "imageHide");
    
    var element = document.getElementById("img4");
    element.classList.replace("imageShow", "imageHide");
    
    var element = document.getElementById("img5");
    element.classList.replace("imageShow", "imageHide");
    
    var element = document.getElementById("img6");
    element.classList.replace("imageShow", "imageHide");
    
    var element = document.getElementById("img7");
    element.classList.replace("imageShow", "imageHide");
    
    var element = document.getElementById("img8");
    element.classList.replace("imageShow", "imageHide");

    document.getElementById("bigGal").style.visibility="visible";
    return;
}

document.getElementById("readMore").addEventListener("click", expand);


function testFunc(){
    alert("good");
}

function expand() {    
alert("works");    
var element = document.getElementById("content");
element.classList.replace("card", "expandedCard"); 
    
var element = document.getElementById("articleForm");
element.classList.replace("small", "expand");
    
document.getElementById("readMore").style.visibility="hidden";
    
var element = document.getElementById("close");
element.classList.replace("invis", "vis");
return;
}

document.getElementById("close").addEventListener("click", makeSmall);

function makeSmall() {
        
var element = document.getElementById("content");
element.classList.replace("expandedCard", "card");
    
var element = document.getElementById("articleForm");
element.classList.replace("expand", "small");
    
document.getElementById("readMore").style.visibility="visible";
    
var element = document.getElementById("close");
element.classList.replace("vis", "invis");
return;
}



