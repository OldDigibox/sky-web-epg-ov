function toPage(frompage, topage) {
    $(".menulisting#" + frompage).css("display", "none");
    $(".menulisting#" + topage).css("display", "flex");
    document.getElementsByTagName('guide').document.body.style.backgroundImage = "url('https://media.discordapp.net/attachments/649968233553723405/709086018942402631/image1.jpg')";
}