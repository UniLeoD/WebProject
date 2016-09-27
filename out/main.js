function printStarTree(totalLine) {
    for (var currentLine = 0; currentLine <= totalLine; currentLine++) {
        var singelLine = '';
        for (var spaceCount = 0; spaceCount < totalLine - currentLine; spaceCount++) {
            singelLine = singelLine + ' ';
        }
        for (var starCount = 0; starCount < 2 * currentLine - 1; starCount++) {
            singelLine = singelLine + '*';
        }
        console.log(singelLine);
    }
}
window.onload = function () {
    printStarTree(5);
};
//# sourceMappingURL=main.js.map