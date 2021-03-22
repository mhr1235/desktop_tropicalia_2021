$(document).ready(function() {
  var counter = 0;

  // Start the changing images
  setInterval(function() {
    if(counter == 4) { 
      counter = 0; 
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();
});

/*$(window).on("load",function(){
     $(".loader").fadeOut("slow");
});*/

function changeImage(counter) {
  var images = [
  'palm.png',
   'beach.png',
   'drink.png',
   'sun.png'
    ];

  //$(".loader").html(""+ images[counter] +"");
 // $(".loader").html("background-image: url('images[1]');");
  //$(".loader").css("background-image", "url(drink.png)");

  $(".loader").css('background-image', 'url(' + images[counter] +')');

}

function loading(){
  var num = 0;

  for(i=0; i<=100; i++) {
    setTimeout(function() { 
      $('.loader-inner').html(num+'%');

      if(num == 100) {
        loading();
      }
      num++;
    },i*120);
  };

}