
 
// document.getElementById("privacy").innerHTML = randomlink;

setTimeout(function() {
  var chromeOS = /(CrOS)/.test(navigator.userAgent);
  if (chromeOS) {
    console.log("chromeos")
    document.body.style.zoom = "65%";
    document.getElementById("searchframe").style.marginLeft = '-190px';
    document.getElementById("searchframe").style.marginBottom = '-10px';
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
    document.getElementById("recently-listened").style.marginLeft = '885';
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

