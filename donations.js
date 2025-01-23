const donations = [
  {
    id: "blog1",
    limit: 10000,
    progress: 8000,
    endDate: new Date("2024-12-28"),
    percentage: function () {
      return (this.progress * 100) / this.limit;
    },
  },
  {
    id: "blog2",
    limit: 18000,
    progress: 18000,
    endDate: new Date("2024-12-29"),
    percentage: function () {
      return (this.progress * 100) / this.limit;
    },
  },
  {
    id: "blog3",
    limit: 15000,
    progress: 5000,
    endDate: new Date("2024-12-30"),
    percentage: function () {
      return (this.progress * 100) / this.limit;
    },
  },
  {
    id: "blog4",
    limit: 8000,
    progress: 600,
    endDate: new Date("2024-12-31"),
    percentage: function () {
      return (this.progress * 100) / this.limit;
    },
  },
];

//Obtenemos direccion para saber desde que blog se esta accediendo
const href = window.location;
const pathname = href.pathname;
const paths = pathname.split("/");
const splitPathname = paths[paths.length - 1].replaceAll(".html", "");
const donation = donations.find((donation) => donation.id === splitPathname);

//Width de la barra de progreso de cada blog
function changeWidth() {
  var blog = document.getElementById("progress");
  var don = donation.percentage();
  if (don < 8) {
    donW = 8;
  } else {
    donW = don;
  }
  blog.style.width = `${donW}%`;
}
changeWidth();

//Muestra cifras de recaudacion
var divProgress = document.getElementsByTagName("div")[2];
var pRecolection = document.createElement("p");
pRecolection.innerText = `$${donation.progress} de $${donation.limit}`;
divProgress.appendChild(pRecolection);

//Calcula dias del mes
var monthDays = daysOfMonth(
  donation.endDate.getMonth(),
  donation.endDate.getFullYear()
);

function daysOfMonth(mth, yr) {
  return new Date(yr, mth, 0).getDate();
}

//Revisa si la causa aun esta activa
function checkAvailability(days, perc) {
  var date = new Date();
  var remainingTime = donation.endDate.getTime() - date.getTime();

  if (remainingTime > 0 && perc < 100) {
    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    days = Math.floor(hours / 24);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    days = days % 24;

    $("#button-donate").show();

    return `Termina en: <br>${days} días ${hours} hrs ${minutes} min ${seconds} seg`;
  }

  $("#button-donate").hide();
  return "Recaudación finalizada";
}

//Muestra porcentaje de recaudacion y tiempo restante
var divClock = document.getElementsByTagName("div")[6];
var pPercent = document.createElement("p");
pPercent.innerHTML = `${donation.percentage().toFixed(0)}% recaudado`;
divClock.appendChild(pPercent);
var pRemaining = document.createElement("p");
pRemaining.innerHTML = `${checkAvailability(
  daysOfMonth,
  donation.percentage()
)}`;

setInterval(() => {
  pRemaining.innerHTML = `${checkAvailability(
    daysOfMonth,
    donation.percentage()
  )}`;
}, 1000);

divClock.appendChild(pRemaining);

//Setear donacion maxima
const maxDonation = donation.limit - donation.progress;
const inAmount = document.getElementsByTagName("input")[2];
inAmount.setAttribute("max", maxDonation);

// Recibir datos del formulario de donacion
const urlDonation = document.forms["donation-form"].action;
const pathsDonation = urlDonation.split("=");
const valueDonation = parseInt(pathsDonation[pathsDonation.length - 1]);
const posDonation = donations.findIndex(
  (donation) => donation.id === splitPathname
);

console.log(donations[posDonation].progress);
console.log(valueDonation);

if (!isNaN(valueDonation)) {
  donations[posDonation].progress =
    donations[posDonation].progress + parseInt(valueDonation);
  changeWidth();
  pPercent.innerHTML = `${donation.percentage().toFixed(0)}% recaudado`;
  pRemaining.innerHTML = `${checkAvailability(
    daysOfMonth,
    donation.percentage()
  )}`;
  pRecolection.innerText = `$${donation.progress} de $${donation.limit}`;
}
