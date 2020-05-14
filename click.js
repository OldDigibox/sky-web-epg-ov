function toPage(frompage, topage) {
    $(`.menulisting#${frompage}`).css("display", "none");
    $(`.menulisting#${topage}`).css("display", "flex");
}

function blankBackground() {
    var useBlank = document.getElementsByTagName('guide')
    var body = document.getElementsByTagName("body")[0]
    useBlank.style.body.backgroundImage = "url('https://media.discordapp.net/attachments/649968233553723405/709086018942402631/image1.jpg')";
}