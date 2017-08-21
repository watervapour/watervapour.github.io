/*
	Make is use ul name to pick content array, allowing multiple dynamic  bars
*/
function sidebar(){
	//contentArray lists link text, followed by url 
	var contentArray = ['Sidebar A','../pages/sidebar_a.html',
						'Sidebar B','../pages/sidebar_b.html'];

	//change to ul = this and call function from ul
	var ul = document.getElementById('sidebar');					

	//calculate number of tabs, the denominator is number of options per tab
	var numTabs = (contentArray.length/2);
	
	//for each tab
	for (i=0;i<numTabs+1;i+=2){
		//create html for the tab's content
		var content = "<a href=\""+contentArray[i+1]+"\">"+contentArray[i]+"</a>";
		//creat a li and populate it, then add to ul
		var li = document.createElement('li');
		li.innerHTML = content;
		li.setAttribute('id', 'navbar_'+(i/2+1));
		ul.appendChild(li);
	}	
}