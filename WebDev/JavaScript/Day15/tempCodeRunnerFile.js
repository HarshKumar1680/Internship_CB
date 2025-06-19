
   function createRectangle(len,bre ) { 
    const rectangle = {
        length: len,
        breadth: bre,
        draw() {
            console.log('drawing rectangle');
        }
    };
    console.log('Rectangle created:', rectangle); 
    return rectangle; 
}

let rectangleObj1 = createRectangle(2,3);
let rectangle2  = createRectangle(5,4);