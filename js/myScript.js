$(document).ready(function(){
    $("#tombol1").click(function(){
      $("#panel1").slideToggle("slow");
    });
  });

$(document).ready(function(){
    $("#tombol2").click(function(){
      $("#panel2").slideToggle("slow");
    });
  });

$(document).ready(function(){
    $("#tombol3").click(function(){
      $("#panel3").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });