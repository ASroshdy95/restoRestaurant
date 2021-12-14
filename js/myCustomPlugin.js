$(document).ready(function () {
  //header height = window height !but still cant resize it vertically
  $(".header").css({
    "min-height": $(window).height(),
  });

  //niceScrolling trigger
  $("body").niceScroll({
    cursorcolor: "#ffa33e",

    cursorborder: "1px solid #ffa33e",

    zindex: "9999",

    horizrailenabled: false,
  });

  //wow.js
  new WOW().init();

  //Start scroll to top button
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(".about").offset().top) {
      $(".scroll-to-top").fadeIn(300);

      $("nav").addClass("navbar-fixed-top");

      $(".navbar-default").css({
        "background-color": "#fff",

        "z-index": "9999",

        opacity: "0.9",

        "box-shadow": "3px -7px 12px -1px rgba(0,0,0,0.67);",

        color: "#000",

        padding: "25px",
      }); //css func for nav

      $(".navbar-brand,.navbar-default .navbar-nav > li > a:not(.navbar-brand)").css({
        color: "#000",

        "font-weight": "200",
      });

      $(".navbar-default .navbar-nav > li > a:not(.navbar-brand).active").css({
        color: "#ffa33e",

        "font-weight": 900,
      });

      $(".navbar-default .navbar-nav > li > a:not(.navbar-brand):hover").css(
        "color",
        "#ffa33e"
      );

      $(".navbar-default .navbar-toggle .icon-bar").css("background-color", "#000");

      if ($(".navbar-default").hasClass("dark")) {
        $(".navbar-default.dark").css({
          "background-color": "#272534",
          color: "#FFF",
        });

        $(".navbar-default .navbar-nav > li > a,.navbar-brand").css("color", "#fff");

        $(".navbar-default .navbar-nav > li > a:not(.navbar-brand).active").css({
          color: "#ffa33e",
          "font-weight": 900,
        });
      } //if
    } else {
      $(".scroll-to-top").fadeOut(300);

      $("nav").removeClass("navbar-fixed-top");

      $(".navbar-default").css({
        "background-color": "transparent",
        "z-index": "9999",
        opacity: "1",
        "box-shadow": "none",
        padding: "50px",
      }); //css func for nav

      $(".navbar-brand,.navbar-default .navbar-nav > li > a:not(.navbar-brand)").css({
        color: "#fff",

        "font-weight": 200,
      });

      $(".navbar-default .navbar-nav > li > a.active:not(.navbar-brand)").css({
        color: "#ffa33e",

        "font-weight": 900,
      });

      $("navbar-default .navbar-toggle .navbar-header").css({
        "background-color": "#f00",
      });

      $(".navbar-default .navbar-toggle .icon-bar").css("background-color", "#fff");
    } //else
  }); //scroll func
  //End scroll to top button

  //start Sync Links With Sections
  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 5) {
        var blockID = $(this).attr("id");

        $(".navbar-default .navbar-nav > li > a").removeClass("active");

        $(".navbar-default .navbar-nav > li > a[data-scroll='" + blockID + "']")
          .addClass("active")
          .parent("li")
          .siblings("li")
          .children("a")
          .removeClass("active");
      }
    });
  });
  //end Sync Links With Sections

  //start the click on the btn
  $(".scroll-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0",
      },
      1000
    );
  });
  //end click func for the S-T-T btn

  //start click on nav-bar tabs
  $("nav .navbar-nav li a:not(.navbar-brand)").on("click", function () {
    $(this)
      .addClass("active")
      .parent("li")
      .siblings("li")
      .children("a")
      .removeClass("active")
      .css({
        "font-weight": "200",
      });
  });
  //end click on nav-bar tabs

  //start smoothly scrolling
  $("nav ul li a").on("click", function (e) {
    e.preventDefault();

    console.log("#" + $(this).data("scroll"));

    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      1000
    );
  });
  //end smoothly scrolling

  //h1 animate
  $(window).load(function () {
    $(".header h1").animate(
      {
        top: "60%",
      },
      2000
    );
  });

  //start dark mood
  $(".dark-mood i").click(function () {
    $(".fa-cloud-moon").toggleClass("dark");

    $(".fa-sun").toggleClass("dark");
  });

  $(".dark-mood .fa-sun").click(function () {
    $(this).css("z-index", "200");

    $(this).prev(".fa-cloud-moon").css("z-index", "400");
  });

  $(".dark-mood i").click(function () {
    $(
      "body,.navbar-default,.about,.our-specialties,.our-menu,.booking-table,.our-events,.contact"
    ).toggleClass("dark");
  });
  //end dark mood

  //start loader
  $(window).on("load", function () {
    $(".lds-facebook").fadeOut(6000);
  });
  //end loader
}); //document ready
