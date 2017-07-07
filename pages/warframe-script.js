function gogogo() {
	var searchTerm, array;
	searchTerm = document.getElementById("searchbar").value;
	relicArray=[];
	
	//search
	//var dropTable = document
	
	//fill table
	var arrayLen = relicArray.length;
	addRow("Item", "relic", "rarity");
	for(i=0;i<arrayLen;i+=3){
		addRow(relicArray[i], relicArray[i+1], relicArray[i+2])
	}
	return false;
}

function addRow(a, b, c){
	var table, count, row, cell0, cell1, cell2,
	table = document.getElementById("wf-table");
	count = table.rows.length;
	row = table.insertRow(count);
	cell0 = row.insertCell(0);
	cell1 = row.insertCell(1);
	cell2 = row.insertCell(2);
	
	
	cell0.innerHTML = a;
	cell1.innerHTML = b;
	cell2.innerHTML = c;
	
	return false;
}
