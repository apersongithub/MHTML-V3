const form = document.querySelector('form');
const input = document.querySelector('input');
var Button = document.getElementById("3");

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register(__uv$config.sw, {
        scope: '/'
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

setTimeout(function() {
  var chromeOS = /(CrOS)/.test(navigator.userAgent);
  if (chromeOS) {
    console.log("chromeos")
    document.body.style.zoom = "65%";
  } else {
    console.log("no chromeos")
  }
}, 400);

let loading = 3500;