$(".btn").click(
  function() {
    $(".home-panel").toggleClass( "active" );
    $(".settings-panel").toggleClass( "active" );
  });


var boxes = $('div.box');
boxes.click(function() {
    boxes.removeClass('selected');
    $(this).addClass("selected");
});
