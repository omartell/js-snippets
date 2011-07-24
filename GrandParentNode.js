function grandParent(element, grandParentId) {
	if (element === document.body) {
		return null;
	}

	if (element.id === grandParentId) {
		return element;
	}

	if (element.parentNode === null) {
		return null;
	}

	if (element.parentNode.id === grandParentId) {
		return element.parentNode;
	}

	return grandParent(element.parentNode, grandParentId);
}