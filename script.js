//your JS code here. If required.
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