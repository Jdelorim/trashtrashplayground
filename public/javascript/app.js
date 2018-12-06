var t1 = 0;
var r1,r2,r3,r4;
var Ramount, Rspace;


function setup() {
    var c = createCanvas(512,512, P2D);
    c.parent("canvasHolder");
    r1 = random(50);
    r2 = random(50);
    r3 = random(50);
    r4 = random(50);
    Ramount = random(-255,0);
    Rspace = random(10,40);
   // console.log(Ramount);
   // console.log("r1inDraw", r1);
}

function draw() {
   
    background(0);
    rectMode(CENTER);
    designSwitcher(1);
}

function testerME(){
    rectMode(CENTER);

}
function designSwitcher(switchMe) {
    if(switchMe === 1) {
        matrix1(r1,r2,r3,r4,Ramount,Rspace);
    } else if (switchMe === 2) {
        machineBleeds();
    }
}

function n1(n1){
    var noi1 = n1;
    console.log(noi1);
    return noi1;
}

function matrix1(r1,r2,r3,r4,Ramount,Rspace) {
    
 

    for(var w=0;w<width;w+=Rspace){
        for(var h=0;h<height;h+=Rspace) {
        var n1 = map(noise(w/r1,h/r3,t1),0,1,Ramount,255);
        var size = map(noise(h/r2,w/r4,t1),0,1,0,Rspace);
            fill(n1);
            rect(w,h,size,size);
        }
    }
    t1+=0.58/Rspace;
   // console.log(r1);
}

function machineBleeds() {
    var r1 = random(100);
    var plotPoints = {
       p1: point(0, height/2),
       p2: point(width*0.25,height/2),
       p3: point(width/2, height/2),
       p4: point(width*0.75,height/2),
       p5: point(width,height/2)
    }
    stroke(255);
    fill(255);
    beginShape();
    
    vertex(plotPoints.p1);
    vertex(plotPoints.p2);
    vertex(plotPoints.p3);
    vertex(plotPoints.p4);
    vertex(plotPoints.p5);
    endShape(CLOSE);

}