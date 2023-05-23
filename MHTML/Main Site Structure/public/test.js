setTimeout(function() {
  var chromeOS = /(CrOS)/.test(navigator.userAgent);
  if (chromeOS) {
    console.log("chromeos")
    document.body.style.zoom = "65%";
    document.getElementById("searchframe").style.marginLeft = '-190px';
 document.getElementById("searchframe").style.marginBottom = '-35px';
    document.getElementById("searchframe").style.width = '1000';
    document.getElementById("searchframe").style.height = '100';
    document.getElementById("searchframe").style.border = '0px #ffffff hidden';
    document.getElementById("incog").style.height = '26';
    document.getElementById("incog").style.width = '26';
    document.getElementById("reload").style.height = '27';
    document.getElementById("reload").style.width = '27';
    document.getElementById("ac").style.height = '25';
    document.getElementById("ac").style.width = '25';
    document.getElementById("exp").style.height = '25';
    document.getElementById("exp").style.width = '25';
    document.getElementById("history").style.height = '25';
    document.getElementById("history").style.width = '25';
    document.getElementById("os").style.marginLeft = '885';
    const img = document.getElementById("os");
    img.src = "Media/OS/chrome.svg";
    const ua = document.getElementById('os');
    ua.setAttribute('title', window.navigator.userAgent);
    document.getElementById("os").style.filter = 'brightness(1.2)';
    document.getElementById("os").style.height = '27';
    document.getElementById("os").style.width = '27';
    document.getElementById("os").style.marginBottom = '.5';
  } else {
    console.log("no chromeos")
  }
}, 400);

setTimeout(function() {
 var Windows = /(Windows)/.test(navigator.userAgent);
  if (Windows) {
    console.log("windows")
    document.body.style.zoom = "90%";
    const img = document.getElementById("os");
    img.src = "Media/OS/microsoft.svg";
    const ua = document.getElementById('os');
    ua.setAttribute('title', window.navigator.userAgent);
    document.getElementById("os").style.filter = 'brightness(0) saturate(100%) invert(47%) sepia(72%) saturate(3323%) hue-rotate(177deg) brightness(104%) contrast(105%)';
  } else {
    console.log("no windowsos")
  }
}, 400);

setTimeout(function() {
 var Owner = /(107.0.1418.26)/.test(navigator.userAgent);
  if (Owner) {
    console.log("owner")
    document.body.style.zoom = "100%";
    const img = document.getElementById("os");
    img.src = "Media/OS/microsoft.svg";
    const ua = document.getElementById('os');
    ua.setAttribute('title', window.navigator.userAgent);
    document.getElementById("os").style.filter = 'brightness(0) saturate(100%) invert(47%) sepia(72%) saturate(3323%) hue-rotate(177deg) brightness(104%) contrast(105%)';
  } else {
    console.log("no owner")
  }
}, 400);

setTimeout(function() {
 var Firefox = /(Firefox)/.test(navigator.userAgent);
  if (Firefox) {
    document.getElementById("menu").style.marginTop = '-54px';
    document.body.style.zoom = "90%";
    document.querySelector("#navigation-links").style.scale = '0.9';
    document.querySelector("#navigation-links").style.marginTop = '-50px';
    document.querySelector("#navigation-items > li").style.position = 'unset';
    document.querySelector("#navigation-items > li > img").style.paddingTop = '-8px';
    document.querySelector("#navigation-items > li > img").style.position = 'unset';
    document.getElementsByName("d")[0].style.marginTop = '115px';     
    document.getElementsByName("d")[0].style.position = 'absolute';
    document.getElementById("banner").style.scale = '0.8';
    document.getElementById("player-section").style.zIndex = '999999';
    
  } else {
    console.log("no firefox")
  }
}, 400);

setTimeout(function() {
 var IE = /(Trident)/.test(navigator.userAgent);
  if (IE) {
    window.location.href = "/unsupported.html"
  } else {
    console.log("no bad browser")
  }
}, 400);

setTimeout(function() {
 var Linux = /(Linux)/.test(navigator.userAgent);
  if (Linux) {
    console.log("linux")
    const img = document.getElementById("os");
    img.src = "Media/OS/ubuntu.svg";
    const ua = document.getElementById('os');
    ua.setAttribute('title', window.navigator.userAgent);
    document.getElementById("os").style.filter = 'brightness(0) saturate(100%) invert(43%) sepia(94%) saturate(1992%) hue-rotate(4deg) brightness(108%) contrast(103%)';
    document.getElementById("os").style.marginTop = '2';
    document.getElementById("os").style.marginBottom = '.3';
  } else {
    console.log("no linuxos")
  }
}, 400);

setTimeout(function() {
 var Android = /(Android)/.test(navigator.userAgent);
  if (Android) {
    console.log("Android")
navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])
    const img = document.getElementById("os");
    img.src = "Media/OS/android.svg";
    const ua = document.getElementById('os');
    ua.setAttribute('title', window.navigator.userAgent);
    document.getElementById("os").style.filter = 'brightness(0) saturate(100%) invert(52%) sepia(77%) saturate(3117%) hue-rotate(81deg) brightness(131%) contrast(112%)';
    document.getElementById("os").style.marginTop = '2';
    document.getElementById("os").style.marginBottom = '.3';
    alert("Android/Mobile isn't supported but do what you please")
  } else {
    console.log("no androidos")
  }
}, 400);

setTimeout(function() {
 var Apple = /(Mac OS X)/.test(navigator.userAgent);
  if (Apple) {
    console.log("apple")
    const img = document.getElementById("os");
    img.src = "Media/OS/apple.svg";
    const ua = document.getElementById('os');
    ua.setAttribute('title', window.navigator.userAgent);
    document.getElementById("os").style.filter = 'brightness(0) saturate(100%) invert(46%) sepia(5%) saturate(57%) hue-rotate(21deg) brightness(91%) contrast(93%)';
    document.getElementById("os").style.marginBottom = '3';
    document.getElementById("os").style.height = '26';
    document.getElementById("os").style.width = '19';
  } else {
    console.log("no appleos")
  }
}, 400);

// import windows from "./docks.js"
let clockele = document.getElementById("time");


// clock
setInterval(function() {
  var dt = new Date();
  var h = dt.getHours().toLocaleString();
  var m = dt.getMinutes();

  var ap;
  // check if it is AM or PM then set ap to the correct value
  if (h < 12) {
    ap = "AM";
  } else {
    ap = "PM";
  }
  h = ("0" + h).slice(-2);
  if (h > 13) {
    h = (h - 12);
  } else if (h == 0) {
    h = 12;
  }
  h = (h > 12) ? h - 12 : h;
  m = ("0" + m).slice(-2);
  document.getElementById("time").innerHTML = h + ":" + m + " " + ap;
}, 1000)

setInterval(function() {
  var dt = new Date();
  var h = dt.getHours().toLocaleString();
  var m = dt.getMinutes();
  var s = dt.getSeconds();
  var ap = (h < 12) ? "AM" : "PM";

  h = (h > 12) ? h - 12 : h;
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);

  s = ("0" + s).slice(-2);

  // future reference document.getElementById("time").innerHTML = h + ":" + m + " " + ap;
      console.clear()
  console.log('                                                       ╢╣╬╬╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣╣╢╢')
console.log('                                                       ╢╣▒▒▒▒▒░░░░░░░░░░░░░░║╢')
console.log('   ▐▄▄▄    ▄▄▄  ▄▄    ▄▄ ╔▄▄▄▄▄▄▄ ▄▄▄    ▄▄▄▌ j▄▄      ╢╣▒▒▒░░░░░░░░░░░░░░░░║╢')
console.log('   ▐███▄  ████  ██    ██    ██    ████  ╓███▌ ▐██      ╢╣░░░░░░░░███░░░░░░░░║╢')
console.log('   ▐█r██ ▐█ ██  ████████    ██    ██└█▌ █▌▐█▌ ▐██      ╢╣░░░░╜╢░░░░░░░╢╜░░░░║╢')
console.log('   ▐█r ███r ██  ██    ██    ██    ██ ▐███ ▐█▌ ▐██,,,   ╢╣░░░╢╢▒███████▒╢╥░░░║╢')
console.log('   └▀  ▀▀   ▀▀  ▀▀    ▀▀    ▀▀    ▀▀  ▀▀  └▀▀  ▀▀▀▀▀   ╢╣░░░░░░░░░░░░░░░░░░░║╢')
console.log('                                                       ║╣░░░░░░░░░░░░░░░░░░░║╢')
console.log('                                                       ║╣╣╣╣╣╣╣╣╣╣╣╣╣╢╢╣╣╢╢╣╢╢')

console.log('%cCopyright MHTML @ 2022', 'font-size: 50px');
}, 1000)
let closeC = document.createElement('div');
closeC.classList.add("x-clock");
closeC.classList.add("nope");
closeC.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' id='close-clock'><line x1='18' y1='6' x2='6' y2='18' /><line x1='6' y1='6' x2='18' y2='18' /></svg>";
clockele.addEventListener("click", () => {
  if (ft.classList.contains("hidden")) {
    var dt = new Date();
    ft.classList.remove("hidden");
    ft.appendChild(closeC);
    ftd.innerHTML = dt.toDateString();
  }
  document.getElementById("background").addEventListener("click", () => {
    ft.classList.add("hidden");
  });
  document.getElementById("close-clock").addEventListener("click", () => {
    var closeCC = !!document.getElementById("close-clock");
    ft.classList.add("hidden");
    if (closeCC === false) {
      ft.removeChild(closeC)
    } else {
      return
    }
  });
});

function inFrame () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function usingFirefox(){
  return navigator.userAgent.indexOf("Firefox") != -1;
}

var redirectSite = "https://www.google.com";

function openBackup(){
  alert("Switching to incognito mode...")
  var tab = window.open('about:blank', '_blank');
  tab.document.documentElement.innerHTML = '<!DOCTYPE html><html><head><title>Classes</title><link rel="icon" type="image/png" href="https://ssl.gstatic.com/classroom/favicon.png"><style>body {margin:0;overflow:hidden}</style></head><body><iframe width="100%" id="incognito" height="100%" src="' + window.location.href + '" frameborder="0"></iframe></body></html>';
  tab.document.close();
  
  window.location.replace("https://www.google.com");
}

if( window.location.pathname == "/"){
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  if(params.url){
    var frameUrl = params.url;
    if(params.url.startsWith("/gams")){
      frameUrl = "/g" + frameUrl.substring(5);
    }
    document.querySelector(".frame").src = window.location.origin + frameUrl;
  }
  if(params.gams = "true"){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
  }

  if(inFrame() != true && usingFirefox() != true){
    document.querySelector(".warning").style.display = "flex";
    document.querySelector(".tosMsg").style.userSelect = "none";
    document.onclick = () => {openBackup()};
    document.onmousedown = () => {openBackup()};
    document.onkeypress = () => {openBackup()};
    //document.onkeydown = () => {openBackup()};
  }
}


function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}

function HF(){
setFavicons('https://ssl.gstatic.com/classroom/favicon.png');
newPageTitle = 'Classes';
document.querySelector('title').textContent = newPageTitle;
setTimeout(function() {
var num=prompt("History flood amount: "); done = false; x = window.location.href; for (var i=1; i<=num; i++) {history.pushState(0, 0, i==num?x:i.toString()); if(i==num){done=true}}if(done===true){alert("History flood successful! "+window.location.href+" now appears in your history "+num+(num==1?" time.":" times."))};
}, 1000);
}

function AC(){
alert("This will stop your teacher from closing your tab.")
document.getElementById("ac").style.opacity = "1";
  document.getElementById("ac").style.webkitFilter = "brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(2943%) hue-rotate(194deg) brightness(94%) contrast(91%)";
javascript:(function () {window.onbeforeunload = function() { return 1; };})()
}

function rl(){
alert("This will reload your page")
location.reload();
document.getElementById('incognito').contentWindow.location.reload();
}

function os(){
alert("User Agent Device Info: " + window.navigator.userAgent)
}



