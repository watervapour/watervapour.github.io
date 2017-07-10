function parallaxMountain() {
	var bg = document.getElementById("par-bg");
	var rect1 = bg.getBoundingClientRect();
	var xcent = rect1.left + rect1.width * 0.5;
	var ycent = rect1.top + rect1.height * 0.5;
	
	var bgx = rect1.left;
	var bgy = rect1.top;
	
	var x = event.clientX - xcent;
	var y = event.clientY - ycent;
	var xm1 = bgx + (x / 20); 
	var ym1 = bgy + (y / 30);
	var xm2 = bgx + (x / 10); 
	var ym2 = bgy + (y / 15);
	
	document.getElementById("par-L1").style.left = xm1 + 'px';
	document.getElementById("par-L1").style.top = ym1 + 'px';
	document.getElementById("par-L2").style.left = xm2 + 'px';
	document.getElementById("par-L2").style.top = ym2 + 'px';
	
	}