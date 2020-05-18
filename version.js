var browser =
    $.uaMatch(navigator.userAgent).browser;
$('p[id="name"]').html(
    "Browser Name: <span>" + browser + "</span>");

$('p[id="version"]').html(
    "Version Number: <span>" + $.browser.version +
    "</span>");

HTMLDocument.prototype.e = document.getElementById;
var el_up = document.e("GFG_UP");
var el_down = document.e("GFG_DOWN");
el_up.innerHTML = "Click on the button to get the OS of User's System.";
var Name = "Not known";
if (navigator.appVersion.indexOf("Win") != -1) Name =
    "Windows";
if (navigator.appVersion.indexOf("Mac") != -1) Name =
    "macOS";
if (navigator.appVersion.indexOf("X11") != -1) Name =
    "UNIX OS";
if (navigator.appVersion.indexOf("Linux") != -1) Name =
    "Linux";

function GFG_Fun() {
    el_down.innerHTML = Name;
} 