const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//d

const d = new Date();
const day = days[d.getDay()];
const hours = d.getHours();
const amPm = hours >= 12 ? "PM" : "AM";

document.getElementById("day").textContent = day.slice(0, 3);
document.getElementById("hour").textContent = d.toLocaleTimeString('it-IT', {hour : 'numeric', hour12 : true}).replace(/AM|PM/g, "").trim();
document.getElementById("minute").textContent = d.getMinutes();
document.getElementById("ampm").textContent = amPm;



/*




*/




