var MyArray = function () {
    var new_array = {};
    var current_length = 0;
    var arguments_length = arguments.length;

    for (var index = 0; index < arguments_length; index++) {
        new_array[index] = arguments[index];
    }

    var calc_length = (function () {
        current_length = 0;
        for (var index_property in new_array) {
            if (!isNaN(parseInt(index_property)) && new_array[index_property] !== undefined) {
                current_length++;
            }
        }
        return arguments.callee;
    })();

    new_array.length = function () {
        calc_length();
        return current_length;
    };

    new_array.toString = function () {
        return new_array.join(",");
    };

    new_array.push = function (item) {
        new_array[current_length] = item;
        current_length++;
    };

    new_array.pop = function () {
        var last_element = new_array[current_length - 1];
        new_array[current_length - 1] = undefined;
        current_length--;
        return last_element;
    };

    new_array.join = function (separator) {
        var str_array = "";
        var index;

        for (index = 0; index < current_length; index++) {
            str_array += new_array[index];
            if (index !== current_length - 1) {
                str_array += separator;
            }
        }
        str_array = str_array || "[]";
        return str_array;
    };

    new_array.slice = function (start_index, end_index) {
        var slice = new MyArray();
        if (end_index < 0) {
            end_index += current_length;
        }
        for (var index = 0; index < current_length; index++) {
            if (index >= start_index && index < end_index) {
                slice.push(new_array[index]);
            }
        }
        return slice;
    };

    new_array.splice = function (start_index, end_index) {
        var starting_erase_index = start_index;

        while (starting_erase_index < current_length && starting_erase_index <= end_index) {
            new_array[starting_erase_index] = undefined;
            starting_erase_index++
        }

        var elements_to_insert = arguments.length - 2;
        var elements_spliced = (end_index - start_index) + 1;
        var more_elements_to_insert_than_deleted_elements = elements_to_insert > elements_spliced;
        var less_elements_to_insert_than_deleted_elements = elements_to_insert < elements_spliced;
        var count_new_elements = Math.abs(elements_spliced - elements_to_insert);

        if (more_elements_to_insert_than_deleted_elements) {
            for (var start_change_index = current_length - 1; start_change_index != end_index; start_change_index--) {
                new_array[start_change_index + count_new_elements] = new_array[start_change_index];
            }
        }

        if (less_elements_to_insert_than_deleted_elements) {
            for (start_change_index = end_index + 1; start_change_index < current_length; start_change_index++) {
                new_array[start_change_index - count_new_elements] = new_array[start_change_index];
                new_array[start_change_index] = undefined;
            }
        }

        var start_insert_index = start_index;
        var new_element_index = 2;
        while (elements_to_insert > 0) {
            new_array [start_insert_index] = arguments[new_element_index];
            new_element_index++;
            elements_to_insert--;
            start_insert_index++;
        }

        calc_length();
        return new_array;
    };

    return new_array;
};