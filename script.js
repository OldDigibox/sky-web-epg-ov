var isLightOn = true;

function toPage(frompage, topage) {
    $(".menulisting#" + frompage).css("display", "none");
    $(".menulisting#" + topage).css("display", "flex");
}

function lightsOff() {
    if (isLightOn) {
        isLightOn = false;
        $("body").get(0).style.setProperty("--background-image", "url('https://media.discordapp.net/attachments/621022891374542858/709301926642188308/darken.png')");
        $("body").get(0).style.setProperty("--main-colour", "#222");
        $("body").get(0).style.setProperty("--sub-colour", "#444");
        $("body").get(0).style.setProperty("--listnum-colour", "white");
    } else {
        isLightOn = true;
        $("body").get(0).style.setProperty("--background-image", "url('https://media.discordapp.net/attachments/649968233553723405/709086018942402631/image1.jpg')");
        $("body").get(0).style.setProperty("--main-colour", "rgb(0, 37, 201)");
        $("body").get(0).style.setProperty("--sub-colour", "rgb(0, 26, 143)");
        $("body").get(0).style.setProperty("--listnum-colour", "rgb(126, 126, 255)");
    }
}