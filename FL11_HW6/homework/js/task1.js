
let ay = prompt('input Y point A');
ay = parseInt(ay);
let ax = prompt('input X point A');
ax = parseInt(ax);
let by = prompt('input Y point B');
by = parseInt(by);
let bx = prompt('input X point B');
by = parseInt(by);
let cy = prompt('input Y point C');
cy = parseInt(cy);
let cx = prompt('input X point C');
cx = parseInt(cx);
   if (cx===(ax+bx)/2&& cy===(ay+by)/2){
       console.log(' C divides AB segment by half true ');
   }else{
       console.log(' C doesn’t devide AB segment by half  false ');
   }


