$(document).ready(function () {
  //Scroll menu
  $(window).scroll(function (event) {
    var scrollPos = $(document).scrollTop();
    console.log(scrollPos);
    $("nav .menu a").each(function () {
      var curLink = $(this);
      var refElement = $(curLink.attr("href"));

      if (refElement.position().top <= scrollPos + 60) {
        $("nav .menu a").removeClass("active");
        curLink.addClass("active");
      } else {
        curLink.removeClass("active");
      }
    });
  });

  $("#up-button").click(function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  $("#button-open-menu").click(function () {
    $("#button-open-menu").hide();
    $(".menu").show("slow");
    $("#up-button").hide("slow");
    $("#button-close-menu").show("slow");
  });

  $("#button-close-menu").click(function () {
    $(".menu").hide("slow");
    $("#up-button").show("slow");
    $("#button-close-menu").hide();
    $("#button-open-menu").show();
  });

  $("#donate-btn").click(function () {
    $(".menu-open").hide("slow");
  });

  $("#gather-btn").click(function () {
    $(".menu-open").hide("slow");
  });

  $("#questions-btn").click(function () {
    $(".menu-open").hide("slow");
  });

  $("#contacts-btn").click(function () {
    $(".menu-open").hide("slow");
  });

  //Formulario de donacion
  $("#button-donate").click(function () {
    $(".form-container").show("slow");
    $("#button-close-donate").show("slow");
  });

  $("#button-close-donate").click(function () {
    $("#up-button").show("slow");
    $("#button-close-menu").hide();
    $(".form-container").hide();
  });

  let nombre = document.getElementById("name");
  let deshabilitar = document.getElementById("anonymous");

  deshabilitar.addEventListener("change", () => {
    if (deshabilitar.checked) {
      nombre.disabled = true;
      nombre.required = false;
      $("#donator").animate({
        opacity: 0.4,
      });
    } else {
      nombre.disabled = false;
      nombre.required = true;
      $("#donator").animate({
        opacity: 1,
      });
    }
  });

  $("#submit-btn").click(function () {
    console.log("donar");
    $(".form-container").hide("slow");
  });
});
