function parallax(caller){
	//get scene center
	var initiator = caller.id;
	var bg = document.getElementById(initiator+"-layer-0");
	var rect = bg.getBoundingClientRect();
	var xCent = rect.left + rect.width * 0.5;
	var yCent = rect.top + rect.height * 0.5;
	
	var mouseX = event.clientX - xCent;
	var mouseY = event.clientY - yCent;
	
	var elsExist = true;
	var j = 1;
	while (elsExist == true) {
		var layerId = initiator + "-layer-" + j;
		if (layerId == true){
			console.log("If entered!");
			var layer = document.getElementById(layerId);
			var xMultiplier = layer.data.xRange; 
			var yMultiplier = layer.data.yRange;
			var xInversion = layer.data.xInvert;
			var yInversion = layer.data.yInvert;
			//move amount
			var xMove = xCent + mouseX / xMultiplier * xInversion;
			var yMove = yCent + mouseY / yMultiplier * yInversion;
			console.log(xMove);
			console.log(yMove);
			layer.style.left = xMove + "px";
			layer.style.top = yMove + "px";
		} else {
			elsExist = false;
		}
		j++;
	}
	var paraOutput = "X: " + mouseX + " | Y: " + mouseY;
	document.getElementById("para").innerHTML = paraOutput;
}