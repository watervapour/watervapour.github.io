function initTracklist() {
  trackList =['RL inspired', '../resources/music-me-RLinspired.mp3',
			  'Upbeat', '../resources/music-me-upbeat.mp3',
			  'Retrograde', '../resources/Infineract/Retrograde.mp3'
			  ];
  numTracks = 3;
  elsPerSong = trackList.length/numTracks;
			
  listElement = document.getElementById('songList');  
  for(i=0;i<trackList.length;i+=elsPerSong) {
    var li = document.createElement('li');
    li.innerHTML = trackList[i]
    li.setAttribute('id', 'track_'+(i/elsPerSong+1));
    li.setAttribute('data', `trackNum:${(i/elsPerSong+1)}`);
    li.setAttribute('onclick', `setTrack(this, "${trackList[i+1]}")`);
    listElement.appendChild(li);
  }
}
