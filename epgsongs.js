// TIME OF DAY
var early_morning, morning, daytime, nightclub;

// AUDIO PLAYER
var lastSong = null;
var selection = null;
var playlist = ["audio/daytime/1998_trk04.mp3", "audio/daytime/2009_trk7.mp3", "audio/daytime/4mp3", "audio/daytime/connected.mp3", "audio/daytime/funkerama.mp3", "audio/daytime/gritty_groove.mp3", "audio/daytime/internationale!(remix)", "audio/daytime/no_saints.mp3", "audio/daytime/smooth_strings_trip.mp3", "audio/daytime/sunset.mp3", "audio/daytime/swingin_partay.mp3"]; // Daytime set
var player = document.getElementById("EPG_Background_Audio"); // Get Audio Element
player.autoplay = true;
player.addEventListener("ended", selectRandom); // Run function when song ends

function selectRandom() {
    while (selection == lastSong) { // Repeat until different song is selected
        selection = Math.floor(Math.random() * playlist.length);
    }
    lastSong = selection; // Remember last song
    player.src = playlist[selection]; // Tell HTML the location of the new Song

}

selectRandom(); // Select initial song
player.play(); // Start Song