let A = prompt('input lenght side A of Triangle');
A = parseInt(A);
let B = prompt('input lenght side B of Triangle');
B = parseInt(B);
let C = prompt('input lenght side C of Triangle');
C = parseInt(C);

if ( A<B<C && A+B<C ||C<B<A && C+B<A || A<C<B && C+A<B){
    console.log(" Triangle doesn't exist");
}else if (A===C & B===C & C===A) {
    console.log(' Equivalent triangle ');
}else if (A===B || B===C || C===A){
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}


