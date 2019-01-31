function init() {
  collapsibleInit();
  faqHeightInit();
  scrollFunctions();
  subNav();
  productCarouselInit();
  instafeedInit();
  $(window).scroll(scrollFunctions);
  pricingFunctions();
  validationInit();
  modalInit();
  testimonialInit();
}

$(document).ready(function() {
  init();
});

$(window).resize(function() {
  faqHeightInit();
  testimonialInit();
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

function testimonialInit() {
  if ($(window).width() >= 768) {
    var tallestTestimonial = 0;
    $(".testimonial-container").each(function() {
      if ($(this).find("p").height() > tallestTestimonial) {
        tallestTestimonial = $(this).find("p").height();
      }
    });
    $(".testimonial-container").find("p").height(tallestTestimonial);
  }
}

function faqHeightInit() {
  if ($(".faqs").length) {
    var container = $(".faqs").find(".container");
    container.css("height", container[0].clientHeight);
  }
}
var fading = false;
function scrollFunctions() {
  if ($(".subnav").length) {
    subNavCheck();
  }
  // if ($("main").first().hasClass("fixed-header")) {
  //   $("header").addClass("visible");
  //   $("nav").css({"display":"flex", "display":"-webkit-flex"});
  // } else {
  //   menuFade();
  // }
  if ($("body").hasClass("home")) {
    if (!fading) {
      homeMenuFade();
    }
  }
}

function homeMenuFade() {
  if ($(window).scrollTop() > $(window).height() * .7) {
    fading = true;
    $(".subnav").fadeIn(500, function() {
      fading = false;
    });
    $(".header-trial-button").show();
    $(".fixed-cta").fadeIn(500);
  } else {
    $(".subnav").fadeOut(500);
    $(".fixed-cta").fadeOut(500);
    $(".header-trial-button").hide();
  }
}
function menuFade() {
  if ($(window).scrollTop() > $(window).height() * .1) {
      $("header").addClass("visible");
      $("nav").fadeIn(500).css("display", "flex");
  } else {
    $("header").removeClass("visible");
    $("nav").fadeOut();
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
  if ($(window).width() > 1440) {
    $(".product-wrapper").addClass("container");
  }
}

function instafeedInit() {
  if ($("#instafeed").length) {
    var feed = new Instafeed({
          get: 'user',
          userId: '3615844428',
          accessToken: '3615844428.1677ed0.13409801673b4b8685ad556e3cfd6c40',
          resolution: 'low_resolution',
          template: '<div class="instafeed-image"><a href="{{link}}"><img src="{{image}}" /></a></div>',
          limit: 4
      });
      feed.run();
  }
}

var box_size = "starter box", delivery_frequency = "month", custom_box = false;
function pricingFunctions() {
  if ($('main').first().hasClass('pricing')) {
    updatePricingHTML();
    updateProductLink();
    boxSliderInit();
    $(".size-selection").find(".btn-tab").each(function() {
      $(this).click(function() {
        $(".size-selection").find(".selected-tab").removeClass('selected-tab');
        $(this).addClass('selected-tab');
        box_size = $(this).data("box-size");
        updatePricingHTML(calculatePrice());
        updateProductLink();

        if (box_size == "small box") {
          $('.box-carousel').slick('slickGoTo', 1);
          $('#box-label').html(smallboxname);
        } else if (box_size == "medium box") {
          $('.box-carousel').slick('slickGoTo', 2);
          $('#box-label').html(mediumboxname);
        } else if (box_size == "starter box") {
          $('.box-carousel').slick('slickGoTo', 0);
          $('#box-label').html(starterboxname);
        } else {
          $('.box-carousel').slick('slickGoTo', 3);
          $('#box-label').html(customboxname);
        }
      });
    });

    $(".frequency-selection").find(".btn-tab").each(function() {
      $(this).click(function() {
        $(".frequency-selection").find(".selected-tab").removeClass('selected-tab');
        $(this).addClass('selected-tab');
        delivery_frequency = $(this).html().replace("ly", "").trim();
        updatePricingHTML(calculatePrice());
        updateProductLink();
      });
    });

  }
}

function boxSliderInit() {
    $('.box-carousel').slick({
      arrows: false,
      draggable: false,
      infinite: false,
      swipe: false,
      variableWidth: true
    });
}

function updateProductLink() {
  var link = $(".product-link");
  link.removeAttr("onclick");
  if (oneoff) {
    if (box_size == "starter box") {
      link.attr("href", "https://gnibl.samcart.com/products/starter-box");
    } else if (box_size == "small box") {
      link.attr("href", "https://gnibl.samcart.com/products/classic-box");
    } else if (box_size == "medium box") {
      link.attr("href", "https://gnibl.samcart.com/products/midi-box");
    }
  } else {
    if (box_size == "small box") {
      if (delivery_frequency == "week") {
        link.attr("href", "https://gnibl.samcart1.com/products/classic-box-weekly/");
      } else if (delivery_frequency == "fortnight") {
        link.attr("href", {{"https://gnibl.samcart2.com/products/classic-box-fortnightly/"}});
      } else {
        link.attr("href", "https://gnibl.samcart3.com/products/classic-box-monthly/");
      }
    } else if (box_size == "medium box") {
      link.removeAttr("onclick");
      if (delivery_frequency == "week") {
        link.attr("href", "https://gnibl.samcart.com/products/midi-box-weekly/");
      } else if (delivery_frequency == "fortnight") {
        link.attr("href", "https://gnibl.samcart.com/products/midi-box-fortnightly/");
      } else {
        link.attr("href", "https://gnibl.samcart.com/products/midi-box-monthly/");
      }
    } else if (box_size == "starter box") {
      link.removeAttr("onclick");
      if (delivery_frequency == "week") {
        link.attr("href", "https://gnibl.samcart.com/products/starter-box-weekly/");
      } else if (delivery_frequency == "fortnight") {
        link.attr("href", "https://gnibl.samcart.com/products/starter-box-fortnightly/");
      } else {
        link.attr("href", "https://gnibl.samcart.com/products/starter-box-monthly/");
      }
    } else {
      link.removeAttr("href");
      link.attr("onclick", "$('#quote-modal').fadeIn()");
    }
  }
}

function updatePricingHTML() {
  $(".frequency").html(delivery_frequency);
  $(".frequency-ly").html(delivery_frequency + "ly");
  $(".snack-num").html(snack_num);
  $(".per-snack").html("$" + (cost / snack_num).toFixed(2));

  if (custom_box) {
    $(".cost").html("from $"+ cost);
    $(".pricing-cta").html(custom_cta);
    $(".additional-info").animate({'opacity' : '0'}, 200);
  } else {
    $(".cost").html("$"+ cost);
    $(".pricing-cta").html(cta);
    $(".additional-info").animate({'opacity' : '1'}, 200);
  }
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function validationInit() {
  jQuery.validator.addMethod("phone", function(value, element) {
      var pattern = /^0[0-8]\d{8}$/g;
      var altpattern = /^[0-8]\d{8}$/g;
      if (pattern.test(value) || altpattern.test(value)) {
        return true;
      } else {
        return false;
      }
  }, "Invalid");

  if ($("#landing-form").length) {
    $("#landing-form").validate({
        rules: {
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        email: {
          required: "Required",
          email: "Invalid"
        }
      },
      submitHandler: function(form) {
        var data = $(form).serializeArray();
        $.ajax({
          url: "https://hooks.zapier.com/hooks/catch/1745150/hocx2n/",
          data: $(form).serialize(),
          complete: function() {
            window.location.href="/trial/?email="+ data[0]['value'];
          }
        })
      }
    });
  }

  if ($("#trial-form").length) {
    $("#trial-form").validate({
        rules: {
        first_name: "required",
        last_name: "required",
        email: {
          required: true,
          email: true
        },
        company: "required",
        job_title: "required",
        phone: {
          required: true,
          phone: true
        }
      },
      messages: {
        first_name: {
          required: "Required",
        },
        last_name: {
          required: "Required",
        },
        email: {
          required: "Required",
          email: "Invalid"
        },
        company: {
          required: "Required",
        },
        job_title: {
          required: "Required",
        },
        phone: {
          required: "Required",
          phone: "Invalid"
        },
      },
      submitHandler: function(form) {
        if ($(".honeypot").val() == null || $(".honeypot").val() == "") {
          var data = $(form).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});;
          var json = JSON.stringify(data);
          $.post("https://hooks.zapier.com/hooks/catch/1745150/te6aiw/", json, function() {
            $("#trial-form").fadeOut(200, function() {
              $(".trial-success").fadeIn();
              fbq('track', 'Lead', {
                 content_name: 'form sent',
              });
            });
          }).fail(function() {
            $("#trial-form").fadeOut(200, function() {
              $(".trial-error").fadeIn();
            });
          });
        }
      }
    });
  }

  if ($("#quote-form").length) {
    $("#quote-form").validate({
        rules: {
        first_name: "required",
        last_name: "required",
        email: {
          required: true,
          email: true
        },
        company: "required",
        employees: "required",
        phone: {
          required: true,
          phone: true
        },
        description: "required",
      },
      messages: {
        first_name: {
          required: "Required",
        },
        last_name: {
          required: "Required",
        },
        email: {
          required: "Required",
          email: "Invalid"
        },
        company: {
          required: "Required",
        },
        employees: {
          required: "Required",
        },
        phone: {
          required: "Required",
          phone: "Invalid"
        },
        description: {
          required: "Required"
        }
      },
      submitHandler: function(form) {
        if ($(".honeypot").val() == null || $(".honeypot").val() == "") {
          var data = $(form).serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {});;
          var json = JSON.stringify(data);
          $.post("https://hooks.zapier.com/hooks/catch/1745150/teexi2/", json, function() {
            $(".modal-back").fadeOut(200);
            $(".modal").css("padding-top", "10px");
            $("#quote-form").fadeOut(200, function() {
              $(".quote-success").fadeIn();
              $(".modal-close-btn").fadeIn();
            });
          }).fail(function() {
            $(".modal-back").fadeOut(200);
            $(".modal").css("padding-top", "10px");
            $("#trial-form").fadeOut(200, function() {
              $(".quote-error").fadeIn();
              $(".modal-close-btn").fadeIn();
            });
          });
        }
      }
    });
  }
}
function modalInit() {
  $(".modal-close").click(function() {
    $(this).parents(".modal-container").first().fadeOut();
  });
}
