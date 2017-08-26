function init() {
  //populate the track list	
  listElement = document.getElementById('songList');  
  for(i=0;i<trackList.length;i+=2) {
    var li = document.createElement('li');
	li.innerHTML = trackList[i]
	li.setAttribute('id', 'track_'+(i/2+1));
	li.setAttribute('data', `trackNum:${(i/2+1)}`);
	li.setAttribute('onclick', `setTrack(this, "${trackList[i+1]}")`);
	listElement.appendChild(li);
  }
  
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
  src = trackList[(track*2)-1];
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



function updateUI() {
  information.innerHTML = ("Track: "+track+" Volume: "+vol);
  if(paused === true) {
    buttonPlay.value = "Play";	  
  } else {
	buttonPlay.value = "Pause";  
  }
  
}