function getMin (){
let gMin = arguments[0];
for (let i=0; i<arguments.length; i++) {
    if (arguments[i] < gMin){
        gMin = arguments[i];
    }
}
return gMin;
}
getMin(-5,1,5);
