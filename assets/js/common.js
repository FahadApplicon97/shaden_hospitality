(function ($) {
  "use strict";

  const $documentOn = $(document);
  const $windowOn = $(window);
  $documentOn.ready(function () {
    /* ================================
       Mobile Menu Js Start
    ================================ */

    // $("#mobile-menu").meanmenu({
    //   meanMenuContainer: ".mobile-menu",
    //   meanScreenWidth: "1199",
    //   meanExpand: ['<i class="far fa-plus"></i>'],
    // });

    /* ================================
       Sidebar Toggle Js Start
    ================================ */

    // $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    //   $(".offcanvas__info").removeClass("info-open");
    //   $(".offcanvas__overlay").removeClass("overlay-open");
    // });
    // $(".sidebar__toggle").on("click", function () {
    //   $(".offcanvas__info").addClass("info-open");
    //   $(".offcanvas__overlay").addClass("overlay-open");
    // });

    /* ================================
       Body Overlay Js Start
    ================================ */

    // $(".body-overlay").on("click", function () {
    //   $(".offcanvas__area").removeClass("offcanvas-opened");
    //   $(".df-search-area").removeClass("opened");
    //   $(".body-overlay").removeClass("opened");
    // });

    /* ================================
       Sticky Header Js Start
    ================================ */

    $windowOn.on("scroll", function () {
      if ($(this).scrollTop() > 250) {
        $(".sticky-header").addClass("sticky");
      } else {
        $(".sticky-header").removeClass("sticky");
      }
    });

    /* ================================
       Video & Image Popup Js Start
    ================================ */

    // $(".img-popup").magnificPopup({
    //   type: "image",
    //   gallery: {
    //     enabled: true,
    //   },
    // });

    /* ================================
       Wow Animation Js Start
    ================================ */

    new WOW().init();

    /* ================================
      Faq Custom Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", function () {
      const items = document.querySelectorAll(".faq-item");

      items.forEach((item) => {
        item.addEventListener("mouseenter", function () {
          document
            .querySelector(".faq-item.active")
            ?.classList.remove("active");
          this.classList.add("active");
        });
      });
    });

    /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    // if ($(".mouseCursor").length > 0) {
    //   function itCursor() {
    //     var myCursor = jQuery(".mouseCursor");
    //     if (myCursor.length) {
    //       if ($("body")) {
    //         const e = document.querySelector(".cursor-inner"),
    //           t = document.querySelector(".cursor-outer");
    //         let n,
    //           i = 0,
    //           o = !1;
    //         ((window.onmousemove = function (s) {
    //           (o ||
    //             (t.style.transform =
    //               "translate(" + s.clientX + "px, " + s.clientY + "px)"),
    //             (e.style.transform =
    //               "translate(" + s.clientX + "px, " + s.clientY + "px)"),
    //             (n = s.clientY),
    //             (i = s.clientX));
    //         }),
    //           $("body").on(
    //             "mouseenter",
    //             "button, a, .cursor-pointer",
    //             function () {
    //               (e.classList.add("cursor-hover"),
    //                 t.classList.add("cursor-hover"));
    //             },
    //           ),
    //           $("body").on(
    //             "mouseleave",
    //             "button, a, .cursor-pointer",
    //             function () {
    //               ($(this).is("a", "button") &&
    //                 $(this).closest(".cursor-pointer").length) ||
    //                 (e.classList.remove("cursor-hover"),
    //                 t.classList.remove("cursor-hover"));
    //             },
    //           ),
    //           (e.style.visibility = "visible"),
    //           (t.style.visibility = "visible"));
    //       }
    //     }
    //   }
    //   itCursor();
    // }

    /* ================================
       Back To Top Button Js Start
    ================================ */

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $("#scroll-to-top").addClass("show");
      } else {
        $("#scroll-to-top").removeClass("show");
      }
    });

    $documentOn.on("click", "#scroll-to-top", function () {
      $("html, body").animate({ scrollTop: 0 }, 300);
      return false;
    });
  });

  // End Document Ready Function

  // function loader() {
  //   $windowOn.on("load", function () {
  //     $(".preloader").addClass("loaded");
  //     $(".preloader").delay(200).fadeOut();
  //   });
  // }

  // loader();
})(jQuery); // End jQuery
