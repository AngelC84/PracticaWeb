    /*
var y;

function ejemplo(){
    y=100*20;
    var z = 10;
    console.log("z:"+z)
}
ejemplo();
y=1;
console.log("y:"+y)
*/
/*
var x=0;
function a(){
    var y=2;
    console.log(x,y);
    function b(){
        x=3;
        y=4;
        z=5;
    }
    b();
    console.log(x,y,z)

}
a();
console.log(x,z);
*/

let i=5;

for(let i=0; i<10; i++){

}
function a(){
    let x=10;
    function b(){
        let x=20;

        console.log("b:"+ x);
    }
b();
console.log("a:"+x)
}
a();