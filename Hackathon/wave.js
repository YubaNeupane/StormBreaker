var size = 0;
var ref;
var data;
var staus = true;
waves();
let wav;

var messagesRef;
function setup() {
  createCanvas(windowWidth, windowHeight-300);

  // var firebaseConfig = {
  //   apiKey: "AIzaSyCtkcoYUSY9wY4JEm7GfWAS5Dhjexk_hcQ",
  //   authDomain: "hackatonpsu.firebaseapp.com",
  //   databaseURL: "https://hackatonpsu.firebaseio.com/",
  //   projectId: "hackatonpsu",
  //   storageBucket: "hackatonpsu.appspot.com",
  //   messagingSenderId: "960025410178",
  //   appId: "1:960025410178:web:1fa76203a1f43ea14f529b"
  // };


//firebase.initializeApp(firebaseConfig);
rectMode(CENTER);

// Get a reference to the database service
var database = firebase.database();



ref = database.ref('size');
messagesRef= database.ref('users');

ref.on("value", gotData,errData);

  changeVal = createButton('CHANGE SIZE');
  changeVal.position(width/2, height + 50);
  reset = createButton('RESET SIZE');
  reset.position(width/2+100, height + 50);

}

var amount;
var keys
var values = [50];
function gotData(data){
  var scores = data.val();
 keys = Object.keys(scores);

 for (var i =0; i < keys.length; i++){
   values[i] = values[i] = scores[keys[i]].size;;
 }


  size = scores[keys[keys.length-1]].size;
  amount = keys.length;

  //print(scores[keys[keys.length-1]].time);
}

function errData(err){
  console.log("Error!");
  console.log(err);
}

var x;
var lastSize = size;
function draw() {
  background(89,202,250);
  //rect(width/2,height/2,size,size);
  fill(0);
  strokeWeight(1);
  textSize(50);
  text("Wind Speed Over Time",(width/3)+80,height/6);
  textSize(20);
  text("206 MPH",25,190);
  text("157 MPH",25,360);
  text("Δ Time",width/2,height/2);


  changeVal.size(100,50);
  changeVal.mousePressed(changeSize);


  // if(values.length > width){
  //   values.splice(0,1);
  // }
  //stoke(0,0,255);
  smooth();
  strokeWeight(10);
  stroke(0,255,0);
  beginShape()
  noFill();

  for (var i=0; i<values.length-10; i++) {
    var y = values[i]*5;
    x = i * 5;
    vertex(x,abs(y-450));
  }
  if(x > width-20){
    values.splice(0,1);
    ref.child(keys[0]).remove();
  }


  endShape();
  stroke(255,0,0);

  line(0,height/5,width,height/5);
  line(0,height/3,width,height/3);



  reset.size(100,50);
  reset.mousePressed(resetSize);
}
function resetSize(){
  size = 0;
  // let  s = second();
  // let h = hour();
  var data ={
    //time: h + ":" + s,
    size : size,
    //staus : staus
  };
  ref.push(data);
}
function changeSize(){
  size+=.5;
  let  s = second();
  let h = hour();
  var data ={
    //time: h + ":" + s,
    size : size,
    //staus : staus
  };
changeValueInDataBase();

ref.push(data);
}
function changeValueInDataBase(){
  print(keys.length);
  if(keys.length > 200){
    for(var i=0; i < 5; i++){
        ref.child(keys[i]).remove();
  }
  }
}
