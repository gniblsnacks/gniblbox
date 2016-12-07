function init() {
  $(".collapsible").find("h4").click(function() {
    $(".collapsible").find(".open").toggleClass("open");
    $(this).parents("li").toggleClass("open");
  });
}

$(document).ready(function() {
  init();
});
