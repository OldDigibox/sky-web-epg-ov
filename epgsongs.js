// TIME OF DAY
var early_morning, morning, daytime, primetime, nightclub;
const intervals = {
    2: "early_morning",
    3: "early_morning",
    4: "early_morning",
    5: "early_morning",
    6: "early_morning",
    7: "morning",
    8: "morning",
    9: "morning",
    10: "morning",
    11: "morning",
    12: "daytime",
    13: "daytime",
    14: "daytime",
    15: "daytime",
    16: "daytime",
    17: "daytime",
    18: "daytime",
    19: "daytime",
    20: "primetime",
    21: "primetime",
    22: "primetime",
    23: "nightclub",
    0: "nightclub",
    1: "nightclub",
    2: "nightclub",
}

const hour = new Date().getHours()
console.log(intervals[hour]);

// AUDIO PLAYER
var lastSong = null;
var selection = null;
if (early_morning) {
    var playlist = ["audio/early_morning/1998_trk04.mp3", "audio/early_morning/adagio.mp3", "audio/early_morning/all_obsessed.mp3", "audio/early_morning/no_saints.mp3", "audio/early_morning/swingin_partay.mp3"];
}
if (morning) {
    var playlist = ["audio/morning/1998_trk04.mp3", "audio/morning/cool_groovings.mp3", "audio/morning/game_on.mp3", "audio/morning/half_pipe.mp3", "audio/morning/hope.mp3", "audio/morning/internationale!.mp3", "audio/morning/move_it.mp3", "audio/morning/muted.mp3", "audio/morning/no_saints.mp3", "audio/morning/swingin_partay.mp3"];
}
if (daytime) {
    var playlist = ["audio/primetime/1998_trk04.mp3", "audio/primetime/apocalypse(remix).mp3", "audio/primetime/bondicular(remix).mp3", "audio/primetime/choir_of_impending_breakbeat.mp3", "audio/primetime/cine2000.mp3", "audio/primetime/kompressor(remix).mp3", "audio/primetime/no_saints.mp3", "audio/primetime/orchestral_hardcore(remix).mp3", "audio/primetime/orchestral_hardcore.mp3", "audio/primetime/quest.mp3", "audio/primetime/swingin_partay.mp3", "audio/primetime/the_trap.mp3"];
}
if (primetime) {
    var playlist = ["audio/daytime/1998_trk04.mp3", "audio/daytime/2009_trk7.mp3", "audio/daytime/4mp3", "audio/daytime/connected.mp3", "audio/daytime/funkerama.mp3", "audio/daytime/gritty_groove.mp3", "audio/daytime/internationale!(remix)", "audio/daytime/no_saints.mp3", "audio/daytime/smooth_strings_trip.mp3", "audio/daytime/sunset.mp3", "audio/daytime/swingin_partay.mp3"];
}
if (nightclub) {
    var playlist = ["audio/nightclub/adagio.mp3", "audio/nightclub/apocalypse.mp3", "audio/nightclub/dance_9.mp3", "audio/nightclub/internationale!.mp3", "audio/nightclub/nu-soul_village(remix).mp3", "audio/nightclub/obsessive.mp3", "audio/nightclub/universe.mp3"]; 
}
var player = document.getElementById("player"); // Get Audio Element
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