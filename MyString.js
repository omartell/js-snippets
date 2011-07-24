var MyString = function(string) {
	var new_string = [];
	var current_toString = string;
	for (var char_index in string) {
		new_string[char_index] = string[char_index];
	}     

	/*
	Returns a primitive string representation of this string.
	*/
	new_string.toString = function() {
		return current_toString;
	};

	/*
	Access a char in this string by index. The same as doing string[index].
	*/
	new_string.charAt = function(index) {
		return index < new_string.length && new_string[index];
	};

	/*
	Returns a primitive string representation of this string.
	*/
	new_string.valueOf = function() {
		return string;
	};

	/*
	Concatenates a string to this string.
	*/
	new_string.concat = function(to_append) {
		for (var char_index in to_append) {
			new_string.push(to_append[char_index]);
		}
		current_toString = new_string.join("");
		return current_toString;
	};

	/*
	Slices a string from a starting index to a final index.
	*/
	new_string.slice = function(start_index, final_index) {
                if(final_index < 0){
                    final_index = new_string.length + final_index;
                }

		function is_index_in_range(index){
			return index >= 0 && index <= new_string.length;
		}
                		
                final_index = final_index || new_string.length;
		
		if (!is_index_in_range(start_index) || !is_index_in_range(final_index)){
			return [];
		}
		
		var slice = [];
		
		for(var char_index in new_string){
			if(char_index >= start_index && char_index < final_index){
				slice.push(new_string[char_index]);
			}
		}
		
		return new MyString(slice.join(""));
	};

	/*
	Splits a string in two parts according to a numeric index or a matching sub string. 
	It accepts a numeric index to partition the string. 
	The char at the index will not be included in the resulting string.
	It also accepts a string to be matched. This string will define the split.
	The resulting string will not include the matched string.
	*/
	new_string.split = function(splitter) {
		var index_match;
		var current_length = new_string.length;

		if (typeof splitter === "number" && splitter >= current_length) {
			return [];
		}

		if (typeof splitter === "string") {
			var matches = 0;

			for (var index = 0; index < current_length; index++) {
				if (new_string[index] === splitter) {
					if (matches === 0) {
						index_match = index;
					}
					matches++;
				}
			}
		}
		matches = matches || 1;
		var splitter_index = index_match || splitter;
		var before = new_string.slice(0, splitter_index);
		var after = new_string.slice(splitter_index + matches, current_length);
		return [before, after];
	};

	/*
	Reverses a string in place.
	No arguments needed.
	*/
	new_string.reverse = function() {
		var current_length = new_string.length;
		var stopping_index = (current_length / 2) + (current_length % 2) - 1;
	
		for (var index = 0; index <= stopping_index; index++) {
			var backwards_index = current_length -1 -index;
			var char_at_index = new_string[index];
			new_string[index] = new_string[backwards_index];
			new_string[backwards_index] = char_at_index;
		}
		current_toString = new_string.join("");
		return current_toString;
	};

	return new_string;
}

var str = new MyString("hello");

