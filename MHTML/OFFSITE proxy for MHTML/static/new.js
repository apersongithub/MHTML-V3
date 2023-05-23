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



function checkCookie() {
  var user = getCookie("username");
  if (user == 'here') {
    console.log('you arent new!')
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl('https://womginx.arph.org/main/https://now.gg/play/roblox-corporation/5349/roblox');
  } else {
    setTimeout(function() {
console.log('welcome!')
alert('Since you are new to this page, we need to make a cookie inorder for roblox to work. After the page is loaded please return back to the main site and click roblox again. you will never have to do repea this action again.')
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl('https://womginx.arph.org/');
    setCookie('username', 'here', 990);
    }, 500);
  }
}

checkCookie()

  if (user == 'here') {
    console.log('you arent new!')