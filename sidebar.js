var html = '<div class="navlink"><a href="index.html">current</a></div>';

var section1 = ["catalogue", "howpow"]; //write one-word link names in this list
for (i = 0; i < section1.length; i++) {
  html +=
    '<div class="navlink"><a href="' +
    section1[i] +
    '.html">' +
    section1[i] +
    "</a></div>";
}

html +=
  '<div class="navlink"><a href="https://www.instagram.com/remifreer/">complaints</a></div>';

document.getElementById("templaterr-topbar").innerHTML = html;

// html += '<a href="https://templaterr.neocities.org/"> < img src = "https://templaterr.neocities.org/templaterr1.png" ></a > '
