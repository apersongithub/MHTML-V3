function aboutBlank() {
const blank = window.open("about:blank", "_blank");
const url = window.location.href;
const doc = blank.document;
const iframe = doc.createElement("iframe");
const style = iframe.style;
const img = doc.createElement("link");
doc.title = "MHTML/Classroom";
img.rel = "icon";
img.href = "https://ssl.gstatic.com/classroom/favicon.png";
iframe.src = url;
style.position = "fixed";
style.border = style.width = "none";
style.width = style.height = "100%";
style.top = style.bottom = style.left = style.right = 0;
iframe.setAttribute('allowFullScreen', '')
doc.body.appendChild(iframe)
}
aboutBlank();