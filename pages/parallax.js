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
		console.table(layerElem.getAttribute("xRange"));
		if (layerElem){	// check is element exists
			//var xPercent = layerElem.attributes[5].xRange / 100; 
			//var yPercent = layerElem.attributes[5].yRange / 100;
			//document.getElementById("para").innerHTML = xPercent;
				//move amount
			var xMove = xCent + mouseX / 20; //xPercent;
			var yMove = yCent + mouseY / 10; //yPercent;
			console.table(xMove);
			console.table(yMove);
			layerElem.style.left = xMove + "px";
			layerElem.style.top = yMove + "px";
		} else {
			elsExist = false;
		}
		j++;
	}
}