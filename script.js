/*    ___   ____
        /' --;^/ ,-_\     \ | /
       / / --o\ o-\ \\   --(_)--
      /-/-/|o|-|\-\\|\\   / | \
       '`  ` |-|   `` '
             |-|
             |-|O
             |-(\,__
          ...|-|\--,\_....
      ,;;;;;;;;;;;;;;;;;;;;;;;;,.
~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,  ______   ---------   _____     ------ 
*/
/* _   .-')     ('-. .-. _  .-')                                               
( '.( OO )_  ( OO )  /( \( -O )                                              
 ,--.   ,--.),--. ,--. ,------.        .-----.   .----.   .-----.   .----.   
 |   `.'   | |  | |  | |   /`. '      / ,-.   \ /  ..  \ / ,-.   \ /  ..  \  
 |         | |   .|  | |  /  | |      '-'  |  |.  /  \  .'-'  |  |.  /  \  . 
 |  |'.'|  | |       | |  |_.' |         .'  / |  |  '  |   .'  / |  |  '  | 
 |  |   |  | |  .-.  | |  .  '.'       .'  /__ '  \  /  ' .'  /__ '  \  /  ' 
 |  |   |  | |  | |  | |  |\  \       |       | \  `'  / |       | \  `'  /  
 `--'   `--' `--' `--' `--' '--'      `-------'  `---''  `-------'  `---''  
*/
//screen.orientation.lock("landscape-primary");

var parent = document.getElementById('container'); // Element that holds the mover
var parent2 = document.getElementById('container'); // Element that holds the mover

var mover = document.getElementById('mover'); // The mover, can be anything
var mover2 = document.getElementById('mover2'); // The mover, can be anything
var mover3 = document.getElementById('mover3'); // The mover, can be anything


var city = document.getElementById('city'); // The mover, can be anything

var dir = 1; // The direction we are moving... 1 is right, -1 is left.
//var dist = 5; // The distance we move each "tick"
var timer = 0;


var dir2 = 1; // The direction we are moving... 1 is right, -1 is left.
var dist2 = 1;

var dir3 = 1; // The direction we are moving... 1 is right, -1 is left.

var dir4 = 1; // The direction we are moving... 1 is right, -1 is left.

//var dist3 = 4;

//var dist = 3 + Math.floor(Math.random() * 4); // The distance we move each "tick"


//var dist3 = 3 + Math.floor(Math.random() * 4);

var dist = 5;

var dist3 = 4;

var dist4 = 3.5;

var mouseX;
var mouseY;

var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);


const uA = navigator.userAgent;
const vendor = navigator.vendor;
if (/Safari/i.test(uA) && /Apple Computer/.test(vendor) && !/Mobi|Android/i.test(uA)) {
  //Desktop Safari
document.getElementById("safari").style.opacity = "1.0"; 
document.getElementById("container").style.opacity = "0.0"; 


}

/*if(isSafari) {

         document.getElementById("safari").style.opacity = "1.0"; 
         document.getElementById("container").style.opacity = "0.0"; 



        }*/






//var number;

  //var number = 3 + Math.floor(Math.random() * 4);


//var dist3 = Math.floor(Math.random() * (3 - 6 + 1)) + 3;

/*setInterval(function() {
  var number = 1 + Math.floor(Math.random() * 6);
  
},
1000);*/

//console.log(dist3);

/*if(screen.availHeight > screen.availWidth){
    alert("Please use Landscape!");

}*/

var size = [window.width,window.height];  //public variable

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});

$("body").css("overflow", "hidden");


    //console.log( "ready!" );


//console.log(dist3);
// The ID will let us stop it later if we want.



var intervalId = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;
    
    // Add dir * dist
    posX += dir * dist;
    
    // If we are moving right and we've gone over the right edge...
    if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX -= posX + mover.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir *= -1
        mover.src = "images/bird2.gif";
        dist = 3 + Math.floor(Math.random() * 4);

    // If we are moving left and we've gone over the left edge...
    } else if (dir == -1 && posX < 0) {
        // stop at zero...
        posX = 0;
        // and change direction...
        dir *= -1;
        mover.src = "images/bird1.gif";
        dist = 3 + Math.floor(Math.random() * 4);


    }
    
    // Set the new position
    mover.style.left = posX + "px";
}, 50); // this number is how many milliseconds in between each move.
// Smaller interval time means smoother movement but slower performance.



var intervalId2 = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX3 = parseInt(mover2.style.left.replace(/px$/, '')) || 0;
    
    // Add dir * dist
    posX3 += dir3 * dist3;
    
    // If we are moving right and we've gone over the right edge...
    if (dir3 == 1 && posX3 + mover2.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX3 -= posX3 + mover2.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir3 *= -1
        mover2.src = "images/bird2a.gif";
        dist3 = 3 + Math.floor(Math.random() * 4);
        //console.log(dist3);


    // If we are moving left and we've gone over the left edge...
    } else if (dir3 == -1 && posX3 < 0) {
        // stop at zero...
        posX3 = 0;
        // and change direction...
        dir3 *= -1;
        mover2.src = "images/bird1a.gif";
        dist3 = 3 + Math.floor(Math.random() * 4);
        //console.log(dist3);



    }


    // Set the new position
    mover2.style.left = posX3 + "px";
}, 50); // this number is how many milliseconds in between each move.
// Smaller interval time means smoother movement but slower performance.

var intervalId3 = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX4 = parseInt(mover3.style.left.replace(/px$/, '')) || 0;
    
    // Add dir * dist
    posX4 += dir4 * dist4;
    
    // If we are moving right and we've gone over the right edge...
    if (dir4 == 1 && posX4 + mover3.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX4 -= posX4 + mover3.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir4 *= -1
        mover3.src = "images/bird2b.gif";
        dist4 = 3 + Math.floor(Math.random() * 4);
        //console.log(dist3);


    // If we are moving left and we've gone over the left edge...
    } else if (dir4 == -1 && posX4 < 0) {
        // stop at zero...
        posX4 = 0;
        // and change direction...
        dir4 *= -1;
        mover3.src = "images/bird1b.gif";
        dist4 = 3 + Math.floor(Math.random() * 4);
        //console.log(dist3);



    }
    
    // Set the new position
    mover3.style.left = posX4 + "px";
}, 50); // this number is how many milliseconds in between each move.
// Smaller interval time means smoother movement but slower performance.

function tree_clicked(){


        tree.src = "images/3growtree.gif";
        setTimeout(treeDone,7300);

}

function tree_clicked2(){


        tree2.src = "images/3growtree2.gif";
        setTimeout(treeDone2,7300);

}

function tree_clicked3(){


        tree3.src = "images/3growtree3.gif";
        setTimeout(treeDone3,7300);

}
    




function treeDone(){
        tree.src = "images/1rotatetree.gif";

}

function treeDone2(){
        tree2.src = "images/1rotatetree2.gif";

}

function treeDone3(){
        tree3.src = "images/1rotatetree3.gif";

}



function clicked(){

     dir *= -1;

    if (mover.src.match("bird1")) {
    mover.src = "images/bird2.gif";
}else{
        mover.src = "images/bird1.gif";

}
    

}

function clicked2(){

     dir3 *= -1;

    if (mover2.src.match("bird1a")) {
    mover2.src = "images/bird2a.gif";
}else{
        mover2.src = "images/bird1a.gif";

}
    

}

function clicked3(){

     dir4 *= -1;

    if (mover3.src.match("bird1b")) {
    mover3.src = "images/bird2b.gif";
}else{
        mover3.src = "images/bird1b.gif";

}
    

}

function city_clicked(){

     dir2 *= -1;

    //console.log("clicked");
     if(document.getElementById("city").style.zIndex === "4"){
      document.getElementById("city").style.zIndex = "2";
      document.getElementById("city").style.top = "65%";
      document.getElementById("city").style.width = "14%";

   } else{
          document.getElementById("city").style.zIndex = "4";
          document.getElementById("city").style.top = "70%";
          document.getElementById("city").style.width = "15%";



   }


}

 //$("#oceanfront1").click(function(){
 
 /*$("#dolphin").animate ({

  top: "20%",
  left: "60%",
  }, 333);*/

  /*$("#dolphin").css ({

  "transform": "rotate(45deg)"
  });*/

  /* $("#dolphin").animate ({

  top: "80%",
    left: "70%",
  });*/
   

  

  //});

//   function getRandomPosition(element) {
//   var x = document.body.offsetHeight-element.clientHeight;
//   var y = document.body.offsetWidth-element.clientWidth;
//   var randomX = Math.floor(Math.random()*x);
//   var randomY = Math.floor(Math.random()*y);
//   return [randomX,randomY];
// }
// window.onload = function() {
//   var img = document.createElement('img');
//   img.setAttribute("style", "position:absolute;");
//   img.setAttribute("src", "some-image.jpg");
//   document.body.appendChild(img);
//   var xy = getRandomPosition(img);
//   img.style.top = xy[0] + 'px';
//   img.style.left = xy[1] + 'px';
// }
 $("#oceanfront2").click(function(){
  var x = document.body.offsetHeight;
  var y = document.body.offsetWidth;
  mouseX = event.clientX;
  mouseY = event.clientY;
  //console.log(mouseX);
  //var randomX = Math.floor(Math.random() * 80) + 5 + "%";
  //var randomX = Math.floor(Math.random() * 80) + 5 + "%";
  var randomX;


  
  //var jump = randomX;
  var jump = mouseX + "px";

  if(mouseX >= y/2){
   //$("dolphin").removeClass("dolphin");
document.getElementById("dolphin").classList.add("dolphin_jump2");
dolphin.src = "images/1slowDolphinL.gif";
randomX = (mouseX - 100) + "px";

  
  }else{
    document.getElementById("dolphin").classList.remove("dolphin_jump2");

    document.getElementById("dolphin").classList.add("dolphin_jump");

    dolphin.src = "images/1slowDolphinR.gif";
    randomX = (mouseX + 100) + "px";


  }

  //var randomY = Math.floor(Math.random()*y);
  //return [randomX,randomY];
 //console.log(z);

  dolphin.style.left = jump;


   // dolphin.style.left = 0 + "px";
  // $('#dolphin')
  //   .attr({
  //     top: "45%",
  //     left: "10%",  

  //   }, 333);

       if(document.getElementById("dolphin").style.zIndex === "4"){
      document.getElementById("dolphin").style.zIndex = "2";
      document.getElementById("dolphin").style.width = "15%";

   } else{
          document.getElementById("dolphin").style.zIndex = "4";
          document.getElementById("dolphin").style.width = "16%";



   }

$('#dolphin')

     .animate({
   
     top: "20%",
     left: randomX
     
   }, 1500)
.animate({
   
     top: "110%",
     
   }, 1000);

});

  $("#oceanfront1").click(function(){
  var x = document.body.offsetHeight;
  var y = document.body.offsetWidth;
  mouseX = event.clientX;
  mouseY = event.clientY;
  //console.log(mouseX);
  //var randomX = Math.floor(Math.random() * 80) + 5 + "%";

  var randomX;

  
  //var jump = randomX;
    var jump = mouseX + "px";

      if(mouseX >= y/2){
   //$("dolphin").removeClass("dolphin");

   document.getElementById("dolphin").classList.add("dolphin_jump2");

dolphin.src = "images/1slowDolphinL.gif";
randomX = (mouseX - 100) + "px";

  
  }else{
        document.getElementById("dolphin").classList.remove("dolphin_jump2");

      document.getElementById("dolphin").classList.add("dolphin_jump");

    dolphin.src = "images/1slowDolphinR.gif";
    randomX = (mouseX + 100) + "px";


  }

  //var jump = mouseX;
  //var randomY = Math.floor(Math.random()*y);
  //return [randomX,randomY];
 //console.log(z);

  dolphin.style.left = jump;


   // dolphin.style.left = 0 + "px";
  // $('#dolphin')
  //   .attr({
  //     top: "45%",
  //     left: "10%",  

  //   }, 333);

       if(document.getElementById("dolphin").style.zIndex === "4"){
      document.getElementById("dolphin").style.zIndex = "2";
      document.getElementById("dolphin").style.width = "15%";

   } else{
          document.getElementById("dolphin").style.zIndex = "4";
          document.getElementById("dolphin").style.width = "16%";



   }

$('#dolphin')

     .animate({
   
     top: "20%",
     left: randomX
     
   }, 1500)
.animate({
   
     top: "110%",
     
   }, 1000);

});

 var intervalId5 = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX2 = parseInt(city.style.left.replace(/px$/, '')) || 0;
    
    // Add dir * dist
    posX2 += dir2 * dist2;
    
    // If we are moving right and we've gone over the right edge...
    if (dir2 == 1 && posX2 + city.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX2 -= posX2 + city.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir2 *= -1;
        
    // If we are moving left and we've gone over the left edge...
    } else if (dir2 == -1 && posX2 < 0) {
        // stop at zero...
        posX2 = 0;
        // and change direction...
        dir2 *= -1;
       

    }
    
    // Set the new position
    city.style.left = posX2 + "px";
}, 50);

