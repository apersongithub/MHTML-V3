
function chageIcon(domImg,srcImage)
    {
        var img = new Image();
        img.onload = function()
        {
            // Load completed
            domImg.src = this.src;
        };
        img.src = srcImage;
    }

function firefox(){
 var Firefox = /(Firefox)/.test(navigator.userAgent);
  if (Firefox) {
    document.getElementById("menu").style.marginTop = '-54px';
  } else {
    console.log("go away!")
  }
}


function button()
{   
    
    if (document.getElementById("side-navigation")) {      
        document.getElementById("side-navigation").setAttribute("id", "side-navigationa");
        document.getElementById("16").className = "link-name2";
        chageIcon(document.getElementById("img"),"./Media/Images/classroom.png");
        document.getElementById("banner").style.marginLeft = '10px';
        document.getElementById("img").style.marginLeft = '-7.6px';
        document.getElementById("img").style.marginBottom = '20px';
        document.getElementById("img").style.transition = 'all 0.5s ease';
        document.getElementById("1").className = "link-name2";
        document.getElementById("2").className = "link-name2";
        document.getElementById("3").className = "link-name2";
        document.getElementById("4").className = "link-name2";
        document.getElementById("5").className = "link-name2";
        document.getElementById("6").className = "link-name2";
        document.getElementById("7").className = "link-name2";
        document.getElementById("8").className = "link-name2";
        document.getElementById("9").className = "link-name2";
        document.getElementById("10").className = "link-name2";
        document.getElementById("11").className = "link-name2";
        document.getElementById("12").className = "link-name2";
        document.getElementById("13").className = "link-name2";
        document.getElementById("14").className = "link-name2";
        document.getElementById("15").className = "link-name2";
        document.getElementById("menu").style.marginLeft = '0px';
        document.getElementById("menu").style.marginTop = '-7px';
        document.getElementById("spotify-content").className = "body-separator2";
        document.getElementById("classa").className = "playlist-name2";
        document.getElementById("menu").style.webkitFilter = "invert(100%) sepia(0%) saturate(7427%) hue-rotate(304deg) brightness(98%) contrast(109%)";
    }
    else {          
        document.getElementById("side-navigationa").setAttribute("id", "side-navigation");
        chageIcon(document.getElementById("img"),"./Media/SVGs/logo.png");
        document.getElementById("banner").style.marginLeft = '100px';
        document.getElementById("img").style.marginLeft = '';
        document.getElementById("img").style.marginBottom = '';
        document.getElementById("img").style.transition = 'all 0.5s ease';
        document.getElementById("1").className = "link-name";
        document.getElementById("2").className = "link-name";
        document.getElementById("3").className = "link-name";
        document.getElementById("4").className = "link-name";
        document.getElementById("5").className = "link-name";
        document.getElementById("6").className = "link-name";
        document.getElementById("7").className = "link-name";
        document.getElementById("8").className = "link-name";
        document.getElementById("9").className = "link-name";
        document.getElementById("10").className = "link-name";
        document.getElementById("11").className = "link-name";
        document.getElementById("12").className = "link-name";
        document.getElementById("13").className = "link-name";
        document.getElementById("14").className = "link-name";
        document.getElementById("15").className = "link-name";
        document.getElementById("16").className = "link-name";
        document.getElementById("menu").style.marginLeft = '165px';
        document.getElementById("menu").style.marginTop = '-32px';
        firefox();
        document.getElementById("spotify-content").className = "body-separator";
        document.getElementById("classa").className = "playlist-name";
        document.getElementById("menu").style.webkitFilter = "invert(60%) sepia(0%) saturate(7427%) hue-rotate(304deg) brightness(98%) contrast(109%)";
    }
}