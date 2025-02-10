$(document).ready(function () {
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
    $("header").hide("slow");
  });

  $("#button-close-donate").click(function () {
    $("#up-button").show("slow");
    $("#button-close-menu").hide();
    $(".form-container").hide("slow");
    $("header").show("slow");
  });

  //Formulario crear donacion
  $("#button-create-donation").click(function () {
    $(".form-container").show("slow");
    $("#button-close-donate").show("slow");
    $("header").hide("slow");
  });

  $("#button-close-donate").click(function () {
    $("#up-button").show("slow");
    $("#button-close-menu").hide();
    $(".form-container").hide("slow");
    $("header").show("slow");
  });

  let nombre = document.getElementById("name");
  let deshabilitar = document.getElementById("anonymous");

  deshabilitar?.addEventListener("change", () => {
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

  // Recibir datos del formulario de crear donacion
  const urlDonationCreated = document.forms["create-donation"].action;
  const pathsMail = urlDonationCreated.split("=");
  const valueMail = pathsMail[2]
    .replaceAll("%40", "@")
    .replaceAll("&reason", "");

  console.log(valueMail);

  var divInfo = document.getElementById("info");
  var pInfo = document.createElement("p");

  pInfo.innerHTML = `Tu solicitud para la creación de una recaudación ha sido entregada a nuestro equipo para ser analizada.
  Nos pondremos en contacto al correo ${valueMail} para continuar con el proceso.`;

  divInfo.appendChild(pInfo);

  $(".info-donation-created").show("slow");
  $("#button-close-info").show("slow");
  $("header").hide("slow");

  $("#button-close-info").click(function () {
    // $("#up-button").show("slow");
    $(".info-donation-created").hide();
    $("#button-close-info").hide("slow");
    $("header").show("slow");
  });
});
