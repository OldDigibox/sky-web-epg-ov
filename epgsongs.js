var lastSong = null;
var selection = null;
var playlist = ["audio/10.wav", "audio/11.mp3", "audio/9.wav", "audio/7.wav", "audio/8.wav", "audio/6.wav", "audio/5.wav", "audio/4.wav", "audio/3.wav", "audio/2.wav",]; // List of Songs
var player = document.getElementById("audioplayer"); // Get Audio Element
player.autoplay=true;
player.addEventListener("ended", selectRandom); // Run function when song ends

function selectRandom(){
    while(selection == lastSong){ // Repeat until different song is selected
        selection = Math.floor(Math.random() * playlist.length);
    }
    lastSong = selection; // Remember last song
    player.src = playlist[selection]; // Tell HTML the location of the new Song
}

selectRandom(); // Select initial song
player.play(); // Start Song