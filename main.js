img=" ";
statu="";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectdetector('cocossd', modelLoaded);
    document.getElementById("statu").innerHTML="Status: detecting objects";
}

function preload(){
    img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#006994");
    text("dog,45,75");
    noFill();
    stroke("#006994");
    rectangle(30,60,450,350);

    
    fill("#006994");
    text("cat,320,120");
    noFill();
    stroke("#006994");
    rectangle(300,90,270,320);
}

function modelLoaded() {
    console.log("Model Loaded!")
    statu = true;
    objectDetector.detect(img, gotResult);
  }
  
function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
}