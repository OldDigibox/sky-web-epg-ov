$(document).ready(function () {
    while (true) {
        if ($("guide").css("display") == "flex") {
            $("body").get(0).style.setProperty("background-image", "url('https://media.discordapp.net/attachments/649968233553723405/709086018942402631/image1.jpg')");
        }
        else {
            $("body").get(0).style.setProperty("background-image", "url('img/tv_guide.png')");
        }
    }
});