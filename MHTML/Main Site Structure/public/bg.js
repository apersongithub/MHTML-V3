var setCookie = function (n, val) {
       var exdays = 365;
       var d = new Date();
       d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
       var expires = "expires=" + d.toGMTString();
       document.cookie = n + "=" + val + "; " + expires;
   };
   
   var getCookie = function (n) {
       var name = n + "=";
       var ca = document.cookie.split(';');
       for (var i = 0; i < ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0) == ' ') c = c.substring(1);
           if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
           }
       }
       return "";
   };
   

//1
document.addEventListener('click', function(e) {
        if (e.target.className == 'btn') {
        var favColor = e.target.style.background;
        setCookie('color', favColor);
        document.getElementsByClassName('body-separator4')[0].style.background = favColor;
        console.log(favColor);
    }});


//2
window.addEventListener('load', function() {
    var favColor = document.getElementsByClassName("body-separator4")[0].style.background
    var color = getCookie('color');
    if (color === '') {
       document.getElementsByClassName('body-separator4')[0].style.background = favColor;
    } else {
      document.getElementsByClassName('body-separator4')[0].style.background = color;
    }
});

//avatar
document.addEventListener('click', function(e) {
        if (e.target.className == 'avatar') {
        var favAvatar = e.target.style.backgroundImage;
        setCookie('avatar', favAvatar);
        document.getElementsByClassName('avatar')[0].style.backgroundImage = favAvatar;
        console.log(favAvatar);
    }});


//2
window.addEventListener('load', function() {
    var favAvatar = document.getElementsByClassName("avatar")[0].style.backgroundImage
    var Avatar = getCookie('avatar');
    if (Avatar === '') {
       document.getElementsByClassName('avatar')[0].style.backgroundImage = favAvatar;
    } else {
      document.getElementsByClassName('avatar')[0].style.backgroundImage = Avatar;
    }
});

document.addEventListener('click', function(e) {
    if (e.target.className == 'cbtn') {
        var favbgColor = e.target.style.background;
        setCookie('bgcolor', favbgColor);
        document.getElementById("spotify-content").style.background = favbgColor;
        document.getElementsByClassName('back')[0].style.background = favbgColor;
      document.getElementsByClassName('back2')[0].style.background = favbgColor;
        console.log(favbgColor);
    }});

window.addEventListener('load', function() {
   var favbgColor = document.getElementById("spotify-content").style.background
    var bgcolor = getCookie('bgcolor');
    if (bgcolor === '') {
       document.getElementById("spotify-content").style.background = favbgColor;
      document.getElementsByClassName('back2')[0].style.background = favbgColor;
    } else {
        document.getElementById("spotify-content").style.background = bgcolor;
        document.getElementsByClassName('back')[0].style.background = bgcolor;
      document.getElementsByClassName('back2')[0].style.background = bgcolor;
    }
});


document.addEventListener('click', function(e) {
        if (e.target.className == 'buttona') {
        var favbanner = "opacity(0)";
        document.getElementsByClassName('centered')[0].style.filter = favbanner;
        setCookie('banner', favbanner);
        console.log(favbanner);
    }});


//2
window.addEventListener('load', function() {
    var favbanner = document.getElementsByClassName("centered")[0].style.filter
    var banner = getCookie('banner');
    if (banner === '') {
       document.getElementsByClassName('centered')[0].style.filter = favbanner;
    } else {
      document.getElementsByClassName('centered')[0].style.filter = banner;
    }
});

document.addEventListener('click', function(e) {
        if (e.target.className == 'buttona') {
        var favbanner = "opacity(0)";
        document.getElementsByClassName('centered')[0].style.filter = favbanner;
        setCookie('banner', favbanner);
        console.log(favbanner);
    }});


document.addEventListener('click', function(e) {
        if (e.target.className == 'buttonb') {
        document.cookie = 'banner' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        console.log("cookie deleted");
        document.getElementsByClassName('centered')[0].style.filter = "opacity(0.8)";
    }});


const interval1 = setInterval(function() {
   // method to be executed;
 }, 5000);

clearInterval(interval1); // thanks @Luca D'Amico

window.setInterval(function() {
if ( window !== window.parent ) 
{
   console.log("iframe")
  document.getElementById("incog").style.opacity = "1";
  document.getElementById("incog").style.webkitFilter = "brightness(0) saturate(100%) invert(78%) sepia(93%) saturate(430%) hue-rotate(38deg) brightness(100%) contrast(95%)";
} 
else 
{     
  console.log("no frame")
}

}, 1000); // 1000 milliseconds (1 second)

window.setInterval(function() {
var version = document.getElementById("classa"); 
version.innerHTML = `Version 3.0 Late Release`;
}, 1000); // 1000 milliseconds (1 second)

// ANNOUNCEMENT BANNER
window.setInterval(function() {
var version = document.getElementById("i1"); 
version.innerHTML = `MHTML is back up with a bunch of optimization fixes and better servers!`;
}, 1000); // 1000 milliseconds (1 second)

document.querySelector("html").style.height = '100vh';

console.log('                                                       ╢╣╬╬╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣╢╢')
console.log('                                                       ╢╣▒▒▒▒▒░░░░░░░░░░░░░░║╢')
console.log('   ▐▄▄▄    ▄▄▄  ▄▄    ▄▄ ╔▄▄▄▄▄▄▄ ▄▄▄    ▄▄▄▌ j▄▄      ╢╣▒▒▒░░░░░░░░░░░░░░░░║╢')
console.log('   ▐███▄  ████  ██    ██    ██    ████  ╓███▌ ▐██      ╢╣░░░░░░░░███░░░░░░░░║╢')
console.log('   ▐█r██ ▐█ ██  ████████    ██    ██└█▌ █▌▐█▌ ▐██      ╢╣░░░░╜╢░░░░░░░╢╜░░░░║╢')
console.log('   ▐█r ███r ██  ██    ██    ██    ██ ▐███ ▐█▌ ▐██,,,   ╢╣░░░╢╢▒███████▒╢╥░░░║╢')
console.log('   └▀  ▀▀   ▀▀  ▀▀    ▀▀    ▀▀    ▀▀  ▀▀  └▀▀  ▀▀▀▀▀   ╢╣░░░░░░░░░░░░░░░░░░░║╢')
console.log('                                                       ║╣░░░░░░░░░░░░░░░░░░░║╢')
console.log('                                                       ║╣╣╣╣╣╣╣╣╣╣╣╣╣╢╢╣╣╢╢╣╢╢')

console.log('%cCopyright MHTML @ 2023', 'font-size: 50px');

document.addEventListener('click', function(e) {
        if (e.target.className == 'move') {
        document.getElementById('spotify-content').scrollTo(0,1000);
    }});

document.addEventListener('click', function(e) {
        if (e.target.className == 'movearrow') {
        document.getElementById('spotify-content').scrollTo(0,1000);
    }});

document.addEventListener('click', function(e) {
        if (e.target.className == 'movearrow2') {
        document.getElementById('spotify-content').scrollTo(0,1000);
    }});

setTimeout(function() {

}, 400);


document.addEventListener('click', function(e) {
        if (e.target.className == "forward") {
            window.history.back();
    }});

document.addEventListener('click', function(e) {
        if (e.target.className == "backward") {
            window.history.back();
    }});