function travelDOMland(callback, elem){
		elem = elem || document.body;
		
		callback(elem);
		
		if(elem.hasChildNodes()){
			travelDOMland(callback, elem.firstChild);
		}
	
		if(elem.nextSibling !== null){
			travelDOMland(callback, elem.nextSibling);
		}
	}