function init() {
  // controls if need be
  buttonPrev = document.getElementById("buttonPrev");
  buttonPlay = document.getElementById("buttonPlay");
  buttonNext = document.getElementById("buttonNext");
  buttonVolU = document.getElementById("buttonVolU");
  buttonVolD = document.getElementById("buttonVolD");
  
  information = document.getElementById("info");
  
  vol = 0.5;
  track = 3
  song = document.querySelector(`audio[data-song="${track}"]`);
  paused = true;
}

function setTrack(clicked){
  song.pause();
  track = clicked.dataset.track;
  playMusic();
}

function previous() {
  song.pause();
  track -= 1;
  playMusic();
}
function next() {
  song.pause();
  track += 1;
  playmusic();
}

function togglePause(){
  paused = !paused;
  if(paused === true) {
	updateUI();
    song.pause();	
  } else {
    updateUI();
    song.play();	
  }
}

function playMusic() {
  var song = document.querySelector(`audio[data-song="${track}"]`);
  if(!song) return;
  updateUI();
  song.currentTime = 0;
  song.play();
  song.volume = vol;
}

function volUp() {
  vol += 0.1;
  updateUI();
  song.volume = vol;
}

function volDown() { 
  vol -= 0.1;
  updateUI();
  song.volume = vol;
}

function updateUI() {
  information.innerHTML = ("Track: "+track+" Volume: "+vol);
  if(paused === true) {
    buttonPlay.value = "Play";	  
  } else {
	buttonPlay.value = "Pause";  
  }
  
}