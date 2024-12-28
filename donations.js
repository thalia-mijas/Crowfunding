const donations = [
  {
    id: "blog1",
    limit: 10000,
    progress: 8000,
    endDate: new Date("2024-12-28"),
  },
  {
    id: "blog2",
    limit: 18000,
    progress: 18000,
    endDate: new Date("2024-12-29"),
  },
  {
    id: "blog3",
    limit: 15000,
    progress: 5000,
    endDate: new Date("2024-12-30"),
  },
  {
    id: "blog4",
    limit: 8000,
    progress: 600,
    endDate: new Date("2024-12-31"),
  },
];

//Obtenemos direccion para saber desde que blog se esta accediendo
const href = window.location;
const pathname = href.pathname;
const paths = pathname.split("/");
const splitPathname = paths[paths.length - 1].replaceAll(".html", "");
const donation = donations.find((donation) => donation.id === splitPathname);

//Calculamos porcentaje de avance en donacion
function getPercent(pro, lim) {
  var per = (pro * 100) / lim;
  return per;
}

//Width de la barra de progreso de cada blog
var blog = document.getElementById("progress");
var don = getPercent(donation.progress, donation.limit);
if (don < 8) {
  donW = 8;
} else {
  donW = don;
}
blog.style.width = `${donW}%`;

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

  return "Recaudación finalizada";
}

//Muestra porcentaje de recaudacion y tiempo restante
var divClock = document.getElementsByTagName("div")[6];
var pPercent = document.createElement("p");
pPercent.innerHTML = `${don.toFixed(0)}% recaudado`;
divClock.appendChild(pPercent);
var pRemaining = document.createElement("p");
pRemaining.innerHTML = `${checkAvailability(daysOfMonth, don)}`;

setInterval(() => {
  pRemaining.innerHTML = `${checkAvailability(daysOfMonth, don)}`;
}, 1000);

divClock.appendChild(pRemaining);
