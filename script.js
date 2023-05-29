//your JS code here. If required.
<div id="line">
		
	</div>
Shweta Pal7:07 PM
let selectedElement = document.getElementById("colorSelect");
	let selectedValue = selectedElement.value;
	let childrenList = selectedElement.children;
	let retainedElements = [];
	 for(let i=0 ;i< childrenList.length ; i++)
		 {
			 if(selectedValue===childrenList[i].value)
			 {
				 retainedElements.push(selectedValue)
				 childrenList[i].remove();
			 }
				 
		 }