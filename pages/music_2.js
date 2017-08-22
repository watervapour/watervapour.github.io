var vol = 0.5;
var songNum = 3
var audio = document.querySelector(`audio[data-song="${songNum}"]`);

function previous() {
  songNum -= 1;
  alert('songNum is now '+songNum);
  playmusic();
}
function next() {
  songNum += 1;
  alert('songNum is now '+songNum);
  playmusic();
}

function playMusic() {
  var audio = document.querySelector(`audio[data-song="${songNum}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  
  audio.play();
  audio.volume = vol;
}

function volUp() {
  vol += 0.1;
  alert('The volume is now '+vol);
  audio.volume = vol;
}

function voldDown() { 
  vol -= 0.1;
  alert('The volume is now '+vol);
  audio.volume = vol;
}