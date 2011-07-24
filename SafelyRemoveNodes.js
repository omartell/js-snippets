var safelyRemoveNodes = function(node){//Only works in Firefox, event handlers are not enumerable in Safari and Chrome
	
	if(node.firstElementChild){
		safelyRemoveNodes(node.firstElementChild);
	}
	
	if(node.nextElementSibling){
		safelyRemoveNodes(node.nextElementSibling);
	}
	
	for(var property in node){
		if(node.hasOwnProperty(property)){
			var regex = /^on/;
			
			if(property.match(regex) && typeof node[property] === "function"){
				node[property] = null;
			}
		}
	}
	
	node.parentNode.removeChild(node);
};