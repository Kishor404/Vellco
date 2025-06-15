/*=======================================================================
 [Table of contents]
 ========================================================================
 1. Menu PopUp 
 2. Revolution Slider 01
 3. Revolution Slider 02
 4. CFunfact Count
 5. SHOP PRICE RANGE
 6. Button Qty
 7. Payment Accourdion
 8. BACK TO TOP
 9. Skill Bar
 10. magnificPopup
 11. Fixed Header
 12. Contact From Submit
 13. Color Preset
 14. Preloder
 */

function toggleMenu() {
  const menu = document.querySelector('.hz-nav-mobile');
  menu.classList.toggle('show');
}
document.querySelectorAll('.hz-nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.hz-nav-mobile').classList.remove('show');
  });
});


(function ($) {
  "use strict";

  /*--------------------------------------------------------
    / 1. Menu PopUp 
    /----------------------------------------------------------*/

  $(document).ready(function () {
    $("#close-popup").on("click", function (e) {
      e.preventDefault();
      $("body").removeClass("menu__open show-overlay-nav");
    });
    $(".hamburger").on("click", function () {
      $(this).toggleClass("is_active"), $("body").toggleClass("menu__open");
    }),
      $(document).keyup(function (e) {
        27 === e.keyCode && $(".menu__open .hamburger").click();
      }),
      $("#open-overlay-nav").on("click", function () {
        $("body").toggleClass("show-overlay-nav");
      }),
      $(".dl-menu__wrap").dlmenu({
        animationClasses: {
          classin: "dl-animate-in-3",
          classout: "dl-animate-out-3",
        },
      });

    $(".filter-categories__item").on("click", function () {
      $(this).addClass("filter-categories__item_current"),
        $(this).siblings().removeClass("filter-categories__item_current");
    }),
      $("#open-popup").on("click", function () {
        $("body").toggleClass("show-popup");
      }),
      $("#close-popup").on("click", function () {
        $("body").removeClass("show-popup");
      }),
      $(document).keyup(function (e) {
        27 === e.keyCode && $("#close-popup").click();
      });
  });

  /*--------------------------------------------------------
    / 2. Revolution Slider 01
    ----------------------------------------------------------*/
  var revapi = jQuery("#rev_slider_1")
    .show()
    .revolution({
      delay: 7000,
      responsiveLevels: [1200, 1140, 778, 480],
      gridwidth: [1140, 920, 700, 380],
      sliderLayout: "fullscreen",
      navigation: {
        arrows: {
          enable: true,
          style: "hermes",
          hide_onmobile: false,
          hide_onleave: false,
          tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: 0,
          },
        },
        bullets: {
          enable: false,
        },
      },
    });
  /*--------------------------------------------------------
    / 3. Revolution Slider 02
    ----------------------------------------------------------*/
  var revapi = jQuery("#rev_slider_2")
    .show()
    .revolution({
      delay: 7000,
      responsiveLevels: [1200, 1140, 778, 480],
      gridwidth: [1140, 920, 700, 380],
      sliderLayout: "auto",
      minHeight: 900,
      navigation: {
        arrows: {
          enable: true,
          style: "hermes",
          hide_onmobile: false,
          hide_onleave: false,
          tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 0,
            v_offset: -78,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 0,
            v_offset: -78,
          },
        },
        bullets: {
          enable: false,
        },
      },
    });

  $(".serviceSlider").owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass: true,
    nav: true,
    items: 3,
    dots: false,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".clientSlider").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    items: 3,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  });

  $(".testimonialSlider").slick({
    infinite: false,
    slidesToShow: 2.615,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  function tw_stretch() {
    var i = $(window).width();
    $(".row .tw-stretch-element-inside-column").each(function () {
      var $this = $(this),
        row = $this.closest(".row"),
        cols = $this.closest('[class^="col-"]'),
        colsheight = $this.closest('[class^="col-"]').height(),
        rect = this.getBoundingClientRect(),
        l = row[0].getBoundingClientRect(),
        s = cols[0].getBoundingClientRect(),
        r = rect.left,
        d = i - rect.right,
        c = l.left + (parseFloat(row.css("padding-left")) || 0),
        u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
        p = s.left,
        f = i - s.right,
        styles = {
          "margin-left": 0,
          "margin-right": 0,
        };
      if (Math.round(c) === Math.round(p)) {
        var h = parseFloat($this.css("margin-left") || 0);
        styles["margin-left"] = h - r;
      }
      if (Math.round(u) === Math.round(f)) {
        var w = parseFloat($this.css("margin-right") || 0);
        styles["margin-right"] = w - d;
      }
      $this.css(styles);
    });
  }
  tw_stretch();

  $(".worksSlider").owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass: true,
    nav: true,
    items: 3,
    dots: false,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".teamslider").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
    items: 3,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".teamslider2").owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass: true,
    nav: true,
    items: 3,
    dots: false,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".featureSlider").owlCarousel({
    loop: false,
    margin: 30,
    responsiveClass: true,
    nav: false,
    items: 3,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(window).on("load", function () {
    if ($("#shafulls").length > 0) {
      var $grid = $("#shafulls");
      $grid.shuffle({
        itemSelector: ".shaf_itme", // the selector for the items in the grid
      });

      /* reshuffle when user clicks a filter item */
      $(".shafful_filter li").on("click", function () {
        // set active class
        $(".shafful_filter li").removeClass("active");
        $(this).addClass("active");

        // get group name from clicked item
        var groupName = $(this).attr("data-group");
        // reshuffle grid
        $grid.shuffle("shuffle", groupName);
      });
    }

    if ($(".folioGallery").length > 0) {
      var $grid2 = $(".folioGallery");
      $grid2.shuffle({
        itemSelector: ".mas_item", // the selector for the items in the grid
      });
    }

    if ($(".bloglistgrid").length > 0) {
      var $grid3 = $(".bloglistgrid");
      $grid3.shuffle({
        itemSelector: ".blog_mash", // the selector for the items in the grid
      });
    }
  });

  /*--------------------------------------------------------
    / 4. Funfact Count
    ----------------------------------------------------------*/
  var skl = true;
  $(".timer").appear();
  $(".timer").on("appear", function () {
    if (skl) {
      $(".timer").each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.attr("data-counter") },
          {
            duration: 3000,
            easing: "swing",
            step: function () {
              var num = Math.ceil(this.Counter).toString();
              $this.html(num);
            },
          }
        );
      });
      skl = false;
    }
  });

  if ($(".relatedSlider").length > 0) {
    $(".relatedSlider").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      dots: false,
      arrows: true,
      centerMode: true,
      centerPadding: "275px",
      nextArrow: ".nextRelated",
      prevArrow: ".prevRelated",
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            centerPadding: "30px",
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  $(".newsGall").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>',
    ],
  });

  if ($(".newsMedia").length > 0) {
    $(".newsMedia").magnificPopup({ type: "iframe" });
  }

  if ($(".videoPlayer").length > 0) {
    $(".videoPlayer").magnificPopup({ type: "iframe" });
  }

  /*=======================================================================
     5. SHOP PRICE RANGE
     =========================================================================*/
  if ($("#slider-range").length > 0) {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [10, 250],
      slide: function (event, ui) {
        $("#amount").html("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").html(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }

  /*==========================================================================
     6. Button Qty
     =========================================================================*/
  if ($(".qtyBtn").length > 0) {
    $(".btnMinus").on("click", function () {
      var vals = parseInt($(this).next(".carqty").val(), 10);

      if (vals > 1) {
        vals -= 1;
        $(this).next(".carqty").val(vals);
      } else {
        $(this).next(".carqty").val(vals);
      }
      return false;
    });
    $(".btnPlus").on("click", function () {
      var vals = parseInt($(this).prev(".carqty").val(), 10);
      vals += 1;
      $(this).prev(".carqty").val(vals);
      return false;
    });
  }

  $(".relatedProductSlider").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    navContainer: ".relatedNavs",
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>',
    ],
    items: 3,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  //=======================================================
  // 7. Payment Accourdion
  //=======================================================
  if ($(".wc_payment_methods").length > 0) {
    $(".wc_payment_methods li").each(function () {
      $('input[type="radio"]', this).on("click", function (e) {
        var ids = $(this).attr("id");
        if ($("div." + ids).hasClass("visibales")) {
        } else {
          $(".payment_box").removeClass("visibales");
          $(".payment_box").slideUp("fast");
          $("div." + ids)
            .slideDown("fast")
            .addClass("visibales");
        }
      });
    });
  }

  /*=======================================================================
    // 8. BACK TO TOP
     =========================================================================*/
  var back = $("#backtotop"),
    body = $("body, html");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $(window).height()) {
      back.css({ bottom: "60px", opacity: "1", visibility: "visible" });
    } else {
      back.css({ bottom: "-60px", opacity: "0", visibility: "hidden" });
    }
  });
  body.on("click", "#backtotop", function (e) {
    e.preventDefault();
    body.animate({ scrollTop: 0 }, 800);
    return false;
  });

  /*=======================================================================
     //9.  Skill Bar
     =========================================================================*/
  if ($(".singleSkill").length > 0) {
    $(".singleSkill").appear();
    $(".singleSkill").on("appear", loadSkills);
  }
  var coun = true;
  function loadSkills() {
    $(".singleSkill").each(function () {
      var datacount = $(this).attr("data-parcent");
      $(".skill", this).animate({ width: datacount + "%" }, 2000);
      if (coun) {
        $(this)
          .find(".prc")
          .each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate(
              { Counter: datacount },
              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter) + "%");
                },
              }
            );
          });
      }
    });
    coun = false;
  }

  //=======================================================
  // 10. magnificPopup
  //=======================================================
  var prePhoto2 = $("a.prePhoto2");
  if (prePhoto2.length > 0) {
    prePhoto2.magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }
  $(".mobileMenuBar a").on("click", function (e) {
    e.preventDefault();
    $(".mainmenu").slideToggle();
  });
  $(".mainmenu ul li.menu-item-has-children").each(function () {
    var $this = $(this);
    $this.append(
      '<span class="submenu_toggler"><i class="fas fa-caret-down"></i></span>'
    );
  });

  $(".mainmenu ul li.menu-item-has-children > span.submenu_toggler").on(
    "click",
    function () {
      var $this = $(this);

      if ($(this).hasClass("active-span")) {
        $("i", $this).removeClass("fa-caret-up").addClass("fa-caret-down");
      } else {
        $("i", $this).addClass("fa-caret-up").removeClass("fa-caret-down");
      }

      $(this).prev("ul.sub_menu").slideToggle();
      $(this).toggleClass("active-span");
    }
  );

  /*--------------------------------------------------------
    / 11. Fixed Header
    /--------------------------------------------------------*/
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 40) {
      $("#fix_nav").addClass("fixedHeader animated flipInX");
    } else {
      $("#fix_nav").removeClass("fixedHeader animated flipInX");
    }
  });

  /*--------------------------------------------------------
    / 12. Contact From Submit
    /----------------------------------------------------------*/
  if ($("#contactForm").length > 0) {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      $("#con_submit").val("Processsing...");
      var name = $("#con_name").val();
      var phone = $("#con_phone").val();
      var email = $("#con_email").val();
      var subject = $("#con_subject").val();
      var message = $("#con_message").val();
      var required = 0;
      $(".required", this).each(function () {
        if ($(this).val() == "") {
          $(this).addClass("reqError");
          required += 1;
        } else {
          if ($(this).hasClass("reqError")) {
            $(this).removeClass("reqError");
            if (required > 0) {
              required -= 1;
            }
          }
        }
      });
      if (required === 0) {
        $.ajax({
          type: "POST",
          url: "ajax/mail.php",
          data: {
            name: name,
            phone: phone,
            email: email,
            subject: subject,
            message: message,
          },
          success: function (data) {
            //alert(data);
            $("#con_submit").val("Done!");
            $("#contactForm input, #contactForm textarea").val("");
            setTimeout(function () {
              $("#con_submit").val("Send Message");
            }, 2500);
          },
        });
      } else {
        $("#con_submit").val("Failed!");
      }
    });
    $(".required").on("keyup", function () {
      $(this).removeClass("reqError");
    });
  }
  /*--------------------------------------------------------
    / 13. Color Preset
    /----------------------------------------------------------*/
  if ($(".color_settings").length > 0) {
    var switchs = true;
    $(".switch-btn").on("click", function (e) {
      e.preventDefault();
      if (switchs) {
        $(this).addClass("active");
        $(".color_settings").animate({ left: "0px" }, 400);
        switchs = false;
      } else {
        $(this).removeClass("active");
        $(".color_settings").animate({ left: "-240px" }, 400);
        switchs = true;
      }
    });
    $(".color_preset button").on("click", function (e) {
      e.preventDefault();
      var color = $(this).attr("id");
      $(".color_preset button").removeClass("active");
      $(this).addClass("active");
      $("#colorChange").attr("href", "css/presets/" + color + ".css");
    });
  }

  /*--------------------------------------------------------
    / 14. Preloder
    /----------------------------------------------------------*/
  $(window).load(function () {
    var preload = $(".preloader");
    if (preload.length > 0) {
      preload.delay(800).fadeOut("slow");
    }
  });
})(jQuery);
