var time1 = 0;

function setup() {
    var c = createCanvas(400,300, P2D);
    c.parent("canvasHolder");
    
}

function draw() {
    background(0);
    rectMode(CENTER);
        design1();
  
}

function design1() {
    for(var w=0;w<width;w+=10){
        for(var h=0;h<height;h+=10) {
        var n1 = map(noise(w,h,time1/1.3),0,1,0,255);
        var size = map(noise(h,w,time1/1.34),0,1,0,10);
            fill(n1);
            rect(w,h,size,size);
        }
    }
    time1+=0.08;
}