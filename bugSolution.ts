function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// Correct way to call the function
printCoord({ x: 3, y: 7 });

//Another function that handles optional parameters
function printCoordOptional(pt: { x: number; y?: number }) {
    console.log("The coordinate's x value is " + pt.x);
    if (pt.y !== undefined) {
        console.log("The coordinate's y value is " + pt.y);
    }
}

printCoordOptional({ x: 3});
printCoordOptional({x: 5, y: 10});
