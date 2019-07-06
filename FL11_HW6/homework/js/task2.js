// Your code goes here

let A = prompt("input lenght side A of Triangle");
A = parseInt(A);
let B = prompt("input lenght side B of Triangle");
B = parseInt(B);
let C = prompt("input lenght side C of Triangle");
C = parseInt(C);

if ( A===B===C){
    console.log(" Eequivalent triangle");
}else if (A===C ) {
    console.log(" C doesn’t devide AB segment by half  false ");
}


