function avatar() {
  var username = document.getElementsByClassName("avatar")[0].style.backgroundImage;
  // Set a Cookie
  function setCookie69(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";   
  }
setCookie69('avatar', username, 365);};
  // Apply setCookie


function btn1() {
  setTimeout(function() {
    $("#user").css("backgroundImage", "url('" + $("#ImageUrl").val() + "')");
    avatar()
  }, 500);
};

function cookie1() {
  alert('This action is irreversible.')
  document.cookie = 'sidebar' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = 'color' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = 'bgcolor' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = 'avatar' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = 'white' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = 'black' + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  location.reload();
};

function cookie2() {
alert('This will be added in a future update.')
};