// refreshing page automatically when viewport size change
window.onresize = function (event) {
  document.location.reload(true);
};

var href = window.location.href.split("/");
var html_location = href[href.length - 1];

if (window.innerWidth >= 1254 && html_location !== "index.html") {
  window.location = "index.html";
}

if (window.innerWidth < 1254 && html_location !== "smallScreen.html") {
  window.location = "smallScreen.html";
}
