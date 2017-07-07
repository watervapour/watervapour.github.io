function gogogo() {
	var searchTerm = document.getElementById("searchbar").value;
	
	var table = document.getElementById("wf-table");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = searchTerm;
	cell3.innerHTML = "NEW CELL3";
	return false;
}