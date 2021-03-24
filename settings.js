$(".btn").click(
  function() {
    // $('.active').fadeOut('slow', function() {
      if ( $(".home-panel").hasClass("active") ) {
        $(".settings-panel").addClass("active");
        $(".home-panel").removeClass("active");
      } else {
        $(".settings-panel").removeClass("active");
        $(".home-panel").addClass("active");
      }
    // })
  });
