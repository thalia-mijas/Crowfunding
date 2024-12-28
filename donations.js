const donations = [
  {
    id: "blog1",
    limit: 10000,
    progress: 8000,
    endDate: new Date("2024-12-29"),
  },
  {
    id: "blog2",
    limit: 18000,
    progress: 10000,
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
    progress: 400,
    endDate: new Date("2024-12-31"),
  },
];
const href = window.location;
const pathname = href.pathname;
const paths = pathname.split("/");
const splitPathname = paths[paths.length - 1].replaceAll(".html", "");
const donation = donations.find((donation) => donation.id === splitPathname);

function getPercent(pro, lim) {
  var per = (pro * 100) / lim;
  return per;
}

var blog = document.getElementById("progress");
var don = getPercent(donation.progress, donation.limit);
blog.style.width = `${don}%`;

var divProgress = document.getElementsByTagName("div")[2];
var pRecolection = document.createElement("p");
pRecolection.innerText = `$${donation.progress} de $${donation.limit}`;
divProgress.appendChild(pRecolection);

// var date = new Date();
// var remainingTime = donation.endDate.getTime() - date.getTime();
var daysOfMonth = diasEnUnMes(
  donation.endDate.getMonth(),
  donation.endDate.getFullYear()
);

function diasEnUnMes(mes, año) {
  return new Date(año, mes, 0).getDate();
}

console.log(daysOfMonth);

function checkAvailability(days) {
  var date = new Date();
  var remainingTime = donation.endDate.getTime() - date.getTime();

  if (remainingTime > 0) {
    let seconds = Math.floor(remainingTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    days = Math.floor(hours / 24);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    days = days % 24;

    return `Termina en: <br>${days} días ${hours} hrs ${minutes} min ${seconds} seg`;
  }

  return "Recaudación finalizada";
}

var divBanner = document.getElementsByTagName("div")[1];
var divClock = document.createElement("div");
divClock.className = "clock";

setInterval(() => {
  divClock.innerHTML = `<p>${don.toFixed(0)}% recaudado</p>
  <p>${checkAvailability(daysOfMonth)}</p>`;
}, 1000);

divBanner.appendChild(divClock);
