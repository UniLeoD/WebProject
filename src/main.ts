function printStarTree (totalLine:number):void {
    
    for(var currentLine:number = 0;currentLine <= totalLine;currentLine++) {
        var singelLine:string = '';
        for(var spaceCount:number = 0;spaceCount < totalLine-currentLine;spaceCount++) {
            singelLine = singelLine + ' ';
        }
        for(var starCount:number = 0;starCount < 2*currentLine-1;starCount++) {
            singelLine = singelLine + '*';
        }
        console.log(singelLine);
    }

}

window.onload = function( ) {
    printStarTree(5);
};