function init() {
  // controls if need be
  buttonPrev = document.getElementById('buttonPrev');
  buttonPlay = document.getElementById('buttonPlay');
  buttonNext = document.getElementById('buttonNext');
  buttonVolU = document.getElementById('buttonVolU');
  buttonVolD = document.getElementById('buttonVolD');
  
  information = document.getElementById('info');
  
  vol = 0.5;
  track = 1;
  audioElement = document.getElementById('audioElement');
  audioElement.src = trackList[1];
  paused = true;
  updateUI();
}

function setTrack(clicked, url){
  audioElement.pause();
  track = clicked.dataset.trackNum;
  audioElement.src = url;
  playMusic();
}

function changeTrack(direction) {
  audioElement.pause();
  track += direction;
  validate("track", track);
  src = trackList[(track*elsPerSong)-1];
  console.log('src = '+src);
  audioElement.src = src;
  playMusic();
}



function togglePause(){
  paused = !paused;
  if(paused === true) {
	updateUI();
    audioElement.pause();	
  } else {
    updateUI();
    audioElement.play();	
  }
}

function playMusic() {
  paused = false;
  if(!audioElement) return;
  updateUI();
  audioElement.currentTime = 0;
  audioElement.play();
  audioElement.volume = vol;
}



function volUp() {
  vol += 0.1;
  updateUI();
  audioElement.volume = vol;
}

function volDown() { 
  vol -= 0.1;
  updateUI();
  audioElement.volume = vol;
}

function changeVol(direction) {
  vol += direction;
  validate("vol", vol);
  updateUI();  
  audioElement.volume = vol;
}

//utility

function validate(type, value) {
  if(type === "track") {
	if(value < 1) {
      track = 1;
	} else if(value > numTracks) {
      track = numTracks;
	}	
  } else {
	if(value < 0) {
      vol = 0;
	} else if(value > 1) {
	  vol = 1;	
	}
  }
}

function updateUI() {
  information.innerHTML = ("Track: "+track+" Volume: "+vol);
  if(paused === true) {
    buttonPlay.value = "Play";	  
  } else {
	buttonPlay.value = "Pause";  
  }
  
}