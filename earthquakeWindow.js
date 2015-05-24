var earthquakeWindow = (function () {
    var x = 0;
    var y = 0;
    var width = 400;
    var height = 400;
    var newWindow = window.open("", "", "width=" + width + ", height=" + height + ", resizable=yes");
    var resizeMoveWindow = function () {
        x = Math.random() * 1400;
        y = Math.random() * 900;
        width += 10;
        height += 10;
        newWindow.moveTo(x, y);
        newWindow.resizeTo(width, height);
    };
    var intervals = function () {
        var interval = setInterval(resizeMoveWindow, 100 * 1);
        var clear = function () {
            clearInterval(interval);
        };
        setTimeout(clear, 5 * 1000);
    };
    intervals();
    return intervals;
})();