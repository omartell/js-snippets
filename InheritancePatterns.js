var pseudoClassicalExtend = function (child, parent) {
    function F() {
    }
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.uber = parent.prototype;
};

var prototypalInheritance = function (parent) {
    function F() {
    }
    F.prototype = parent;
    return new F();
};

var extendAugment = function (parent, augments) {
    function F() {
    }
    F.prototype = parent;
    var child = new F();
    child.uber = parent;
    deepClone(augments, child);
    return child;
};

var shallowClone = function (original, target) {
    var clone = target || {};
    for (var property in original) {
        clone[property] = original[property];
    }
    return clone;
};

var deepClone = function (original, target) {
    var clone = target || (original.constructor === Array ? [] : {});

    for (var property in original) {
        if (typeof original[property] === "object") {
            clone[property] = deepClone(original[property])
        }
        clone[property] = original[property];
    }
    return clone;
};
