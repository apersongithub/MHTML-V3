const form = document.querySelector('form');
const input = document.querySelector('input');
var Button = document.getElementById('3');

form.addEventListener('submit', async event => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register(__uv$config.sw, {
      scope: '/'
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) url = 'https://duckduckgo.com/' + url;
      else if (!(url.startsWith('https://') || url.startsWith('http://')))
        url = 'http://' + url;

      const blank = window.open('about:blank', '_blank');
      const url2 =
        window.location.href.substr(0).slice(0, -16) +
        __uv$config.prefix +
        __uv$config.encodeUrl(url);
      const doc = blank.document;
      const iframe = doc.createElement('iframe');
      const style = iframe.style;
      var script = document.createElement("script");
      var script2 = document.createElement("script");
      var script3 = document.createElement("script");
      var script4 = document.createElement("script");
      const img = doc.createElement('link');
      doc.title = 'MichaelHTML';
      img.rel = 'icon';
      img.href = 'https://ssl.gstatic.com/classroom/favicon.png';
      iframe.src = url2;
      style.position = 'fixed';
      style.border = style.width = 'none';
      style.width = style.height = '100%';
      style.top = style.bottom = style.left = style.right = 0;
      script.setAttribute( "src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8246140205828768" );
      script.setAttribute("async", true);
      script.setAttribute("crossorigin", true);
      script2.setAttribute( "src", "https://www.googletagmanager.com/gtag/js?id=UA-121776487-1");
      script2.setAttribute("async", true);
      script3.setAttribute( "src", "https://michaelhtml.gq/google.js");
      script4.setAttribute( "src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
      console.log('done')
      doc.body.appendChild(iframe);
      doc.body.appendChild(script)
      doc.body.appendChild(script2)
      doc.body.appendChild(script3)
      doc.body.appendChild(script4)
    });
});

function isUrl(val = '') {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes('.') && val.substr(0, 1) !== ' ')
  )
    return true;
  return false;
}
