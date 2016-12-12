function init() {
  collapsibleInit();
  faqHeightInit();
}

$(document).ready(function() {
  init();
});

function collapsibleInit()  {
  $(".collapsible").find("h4").click(function() {
    $(".collapsible").find(".open").toggleClass("open");
    $(this).parents("li").toggleClass("open");
  });
}

function faqHeightInit() {
  var container = $(".faqs").find(".container");
  container.css("height", container[0].clientHeight);
}
