function init() {
	console.log('init');
  // controls if need be
  const buttonPrev = document.getElementById("buttonPrev");
  const buttonPlay = document.getElementById("buttonPlay");
  const buttonNext = document.getElementById("buttonNext");
  const buttonVolU = document.getElementById("buttonVolU");
  const buttonVolD = document.getElementById("buttonVolD");
  
  var vol = 0.5;
  var track = 3
  var song = document.querySelector(`audio[data-song="${track}"]`);
  var paused = true;
}
init();

function setTrack(clicked){
  song.pause();
  track = clicked.dataset.track;
  playMusic();
}

function previous() {
  song.pause();
  track -= 1;
  alert('track is now '+track);
  song.current
  playmusic();
}
function next() {
  song.pause();
  track += 1;
  alert('track is now '+track);
  playmusic();
}

function togglePause(){
  paused = !paused;
  if(paused === true) {
	buttonPlay.value = "Play";  
  } else {
	buttonPlay.value = "Pause";
    song.play();	
  }
}

function playMusic() {
  var song = document.querySelector(`audio[data-song="${track}"]`);
  if(!song) return;
  song.currentTime = 0;
  song.play();
  song.volume = vol;
}

function volUp() {
  vol += 0.1;
  alert('The volume is now '+vol);
  song.volume = vol;
}

function voldDown() { 
  vol -= 0.1;
  alert('The volume is now '+vol);
  song.volume = vol;
}