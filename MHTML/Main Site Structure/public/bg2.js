

$("#Btn1").click(function() {
  var Button = document.getElementById("real");
  Button.click();
  setTimeout(function() {
    $(".body-separator4").css("backgroundImage", "url('" + $("#ImageUrl").val() + "')");
    fun();
  }, 500);
});

$("#Btnf").click(function() {
  setTimeout(function() {
    var Button = document.getElementById("real2");
    Button.click();
    $(".body-separator").css("backgroundImage", "url('" + $("#ImageUrl2").val() + "')");
    $(".body-separator2").css("backgroundImage", "url('" + $("#ImageUrl2").val() + "')");
    $(".back2").css("backgroundImage", "url('" + $("#ImageUrl2").val() + "')");
    $(".back").css("backgroundImage", "url('" + $("#ImageUrl2").val() + "')");
    fun66();
  }, 500);
});
//cookie image  

const interval = setInterval(function() {
  // method to be executed;
}, 5000);

clearInterval(interval); // thanks @Luca D'Amico

window.setInterval(function() {
  document.getElementsByClassName('body-separator2')[0].style.backgroundSize = 'Cover';
  document.getElementsByClassName('body-separator2')[0].style.backgroundRepeat = 'no-repeat';
  document.getElementsByClassName('body-separator2')[0].style.backgroundPosition = 'center center';

}, 2000); // 1000 milliseconds (1 second)

window.setInterval(function() {
  var username = document.getElementsByClassName("body-separator2")[0].style.background;
  // Set a Cookie
  function setCookie69(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 100));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
  // Apply setCookie



  setCookie69('bgcolor', username, 365);
}, 4000); // 1000 milliseconds (1 second)

document.getElementById("Btn5").onclick = function() {
  fun()
};
function fun() {
  var favColor = document.getElementsByClassName('body-separator4')[0].style.background;
  document.getElementsByClassName('body-separator4')[0].style.backgroundSize = 'Cover';
  document.getElementsByClassName('body-separator4')[0].style.backgroundRepeat = 'no-repeat';
  document.getElementsByClassName('body-separator4')[0].style.backgroundPosition = 'center center';
  setCookie('color', favColor);
  var Button = document.getElementById("Btn5");
  Button.click();
}

document.getElementById("Btn55").onclick = function() {
  fun66()
};
function fun66() {
  var favbgColor = document.getElementsByClassName("body-separator")[0].style.background
  document.getElementsByClassName('body-separator')[0].style.backgroundSize = 'Cover';
  document.getElementsByClassName('body-separator')[0].style.backgroundRepeat = 'no-repeat';
  document.getElementsByClassName('body-separator')[0].style.backgroundPosition = 'center center';
  setCookie('bgcolor', favbgColor);
  var Button = document.getElementById("Btn55");
  Button.click();
}

function pp() {
  var username = document.getElementsByClassName("body-separator2")[0].style.background;
  // Set a Cookie
  function setCookie69(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 100));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }
  // Apply setCookie
  setCookie69('bgcolor', username, 30);
}




document.addEventListener('load', function() {
  var color = getCookie2('color');
  document.getElementsByClassName('body-separator4')[0].style.background = color;
});

document.getElementById("Btn6").onclick = function() {
  fun2()
};
function fun2() {
  document.getElementById("dd").textContent = "> Minimized Sidebarㅤㅤㅤ";
  var Button = document.getElementById("menu");
  Button.click();
  document.cookie = 'sidebar=true' + "=; Path=/; Expires=Thu, 01 Jan 2970 00:00:01 GMT;";
  setCookie('color');
  fun();
}

function checkCookie() {
  var user = getCookie2("sidebar");
  if (user == null) {
    console.log('no cookie')
  } else {
      var Button = document.getElementById("menu");
      Button.click();
  console.log('test')
  }
}


function getCookie2(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
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


setTimeout(function() {
  checkCookie();
}, 1000);

//bs
document.getElementById("Btn69").onclick = function() {
  fun69()
};
function fun69() {
  document.getElementById("dd").textContent = "> Maximized Sidebarㅤㅤㅤ";
  var Button = document.getElementById("menu");
  Button.click();
  document.cookie = 'sidebar=true; expires=Fri, 31 Dec 99 23:59:59 GMT; SameSite=None; Secure';
}

document.getElementById("Btn70").onclick = function() {
  fun70()
};
function fun70() {
  document.cookie = 'sidebar' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = 'color' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  var Button = document.getElementById("Btn70");
  Button.click();
  location.reload();
}

document.getElementById("Btn707").onclick = function() {
  fun707()
};
function fun707() {
  document.cookie = 'bgcolor' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  var Button = document.getElementById("Btn707");
  Button.click();
  location.reload();
}

