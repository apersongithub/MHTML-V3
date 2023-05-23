
window.addEventListener('load', function() {
var bgcolor = getCookie('bgcolor');
document.getElementsByClassName('body-separator')[0].style.background = bgcolor;
  document.getElementsByClassName('body-separator2')[0].style.background = bgcolor;
});

window.addEventListener('load', function() {
var color = getCookie3('color');
document.getElementsByClassName('body-separator4')[0].style.background = color;
  
});

function checkCookie() {
  var user = getCookie3("sidebar");
  if (user == null) {
console.log('no cookie')
  }else {
    setTimeout(function(){
    var Button = document.getElementById("menu");
    Button.click();
}, 300);
  }
}




function getCookie3(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 

setTimeout(function(){
checkCookie();
}, 500);


