var lastSong = null;
var selection = null;
var playlist = ["audio/13.mp3", "audio/12.mp3", "audio/11.mp3", "audio/10.mp3", "audio/9.mp3", "audio/7.mp3", "audio/8.mp3", "audio/6.mp3", "audio/5.mp3", "audio/4.mp3", "audio/3.mp3", "audio/2.mp3",]; // List of Songs
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