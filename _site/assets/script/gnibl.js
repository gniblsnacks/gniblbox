function init() {
  collapsibleInit();
  faqHeightInit();
  scrollFunctions();
  subNav();
  productCarouselInit();
  instafeedInit();
  $(window).scroll(scrollFunctions);
  pricingFunctions();
}

$(document).ready(function() {
  init();
});

function collapsibleInit()  {
  $(".collapsible").find("h4").click(function() {
    var open = $(".collapsible").find(".open");
    var target = $(this).parents("li");
    if (!target.hasClass("open")) {
      open.find(".answer").slideUp(function() {
          open.toggleClass("open");
      });
      target.find(".answer").slideDown(function() {
        target.toggleClass("open");
      });
    }
  });
}

function faqHeightInit() {
  if ($(".faqs").length) {
    var container = $(".faqs").find(".container");
    container.css("height", container[0].clientHeight);
  }
}

function submitForm() {
  $('#landing-form').submit();
}

function scrollFunctions() {
  menuDisplay();
  subNavCheck();
}

function menuDisplay() {
  if ($(window).scrollTop() > $(window).height() * .7) {
    $("header").addClass("visible");
    $("nav").fadeIn(500).css("display", "flex");
    $(".subnav").fadeIn(500);
    $(".fixed-cta").fadeIn(500);
  } else {
    $("header").removeClass("visible");
    $("nav").fadeOut(500);
    $(".subnav").fadeOut(500);
    $(".fixed-cta").fadeOut(500);
  }
}

function subNav() {
  $(".subnav").find(".links").find("a").each(function() {
    var link = $(this);
    link.click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 500, function() {
      $(".selected").removeClass("selected");
      link.addClass("selected");
    });
    });
  });
}

function subNavCheck() {
  var selected;
  $(".subnav").find(".links").find("a").each(function() {
    var scrollTop = $($.attr(this, 'href')).offset().top - 200;
    if ($(window).scrollTop() > scrollTop) {
      selected = this;
    }
  }).promise()
    .done( function() {
      $(".selected").removeClass("selected");
      $(selected).addClass("selected");
    });
}

function productCarouselInit() {
  $('.product-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: "#products-container",
    prevArrow: '<div class="slick-prev"><span>&lt;</span></div>',
    nextArrow: '<div class="slick-next"><span>&gt;</span></div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        centerMode: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        centerMode: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false
      }
    }],
  });
}

function instafeedInit() {
  if ($("#instafeed").length) {
    var feed = new Instafeed({
          get: 'user',
          userId: '3037191194',
          accessToken: '3037191194.1677ed0.1acd358a06d5437da3faf04e9bf0783a',
          resolution: 'low_resolution',
          template: '<div class="instafeed-image"><a href=""><img src="" /></a></div>',
          limit: 4
      });
      feed.run();
  }
}

var box_size = "medium box", delivery_frequency = "fortnight", custom_box = false;
function pricingFunctions() {
  updatePricingHTML();
  if ($('main').first().hasClass('pricing')) {
    $(".size-selection").find(".btn-tab").each(function() {
      $(this).click(function() {
        $(".size-selection").find(".selected").removeClass('selected');
        $(this).addClass('selected');
        box_size = $(this).data("box-size");
        updatePricingHTML(calculatePrice());
      });
    });

    $(".frequency-selection").find(".btn-tab").each(function() {
      $(this).click(function() {
        $(".frequency-selection").find(".selected").removeClass('selected');
        $(this).addClass('selected');
        delivery_frequency = $(this).html().replace("ly", "");
        updatePricingHTML(calculatePrice());
      });
    });

  }
}

function updatePricingHTML() {
  $(".cost").html("$"+ cost);
  $(".frequency").html(delivery_frequency);
  $(".frequency-ly").html(delivery_frequency + "ly");
  $(".snack-num").html(snack_num);
  $(".per-snack").html("$" + (cost / snack_num).toFixed(2));

  if (custom_box) {
    $(".pricing-cta").html(custom_cta);
    $(".additional-info").animate({'opacity' : '0'}, 200);
  } else {
    $(".pricing-cta").html(cta);
    $(".additional-info").animate({'opacity' : '1'}, 200);
  }
}
