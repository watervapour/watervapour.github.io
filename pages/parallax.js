function parallax(caller){
	//get scene center
	var initiator = caller.id;
	var bg = document.getElementById(initiator+"-L0");
	var rect = bg.getBoundingClientRect();
	var xCent = rect.left + rect.width * 0.5;
	var yCent = rect.top + rect.height * 0.5;
	//get mouse movement and center on image
	var mouseX = event.clientX - xCent;
	var mouseY = event.clientY - yCent;
	

	// a for loop for unknown amount of elements
	var elsExist = true;
	var j = 0;
	while (elsExist == true) {
		// get layer 
		var layerId = initiator + "-L" + j;
		var layerElem = document.getElementById(layerId);
		if (layerElem){	// check is element exists
			var xPercent = layerElem.dataset.xrange / 100; 
			var yPercent = layerElem.dataset.yrange / 100;
				//move amount
			var xMove = rect.left + (mouseX * xPercent);
			var yMove = rect.top + (mouseY * yPercent);
			
			var info = [{"rectLeft":rect.left,"rectTop":rect.top,"MX":mouseX,"MY":mouseY,"X%":xPercent,"Y%":yPercent}]
			console.table(info);
			layerElem.style.left = xMove + "px";
			layerElem.style.top = yMove + "px";
			
			document.getElementById('para').innerHTML = xMove + "|" + yMove;
			
		} else {
			elsExist = false;
		}
		j++;
	}
}