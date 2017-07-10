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
	var j = 1;
	while (elsExist == true) {
		// get layer 
		var layerId = initiator + "-L" + j;
		var layerElem = document.getElementById(layerId);
		console.log(layerId);
		if (layerElem){	// check is element exists
			var xPercent = layerElem.data-xRange / 100; 
			var yPercent = layerElem.data-yRange / 100;
			document.getElementById("para").innerHTML = xPercent;
			//move amount
			var xMove = xCent + mouseX / xPercent;
			var yMove = yCent + mouseY / yPercent;
			console.log(xMove);
			console.log(yMove);
			layerElem.style.left = xMove + "px";
			layerElem.style.top = yMove + "px";
		} else {
			elsExist = false;
		}
		j++;
	}
}