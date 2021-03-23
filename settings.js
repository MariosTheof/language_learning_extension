// $(document).ready(function() {
// });

  $(".btn").click(
    function() {

      if ( $(".home-panel").hasClass("active") ) {
        $(".settings-panel").addClass("active");
        $(".home-panel").removeClass("active");
      } else {
        $(".settings-panel").addClass("active");
        $(".home-panel").removeClass("active");
      }


    });
