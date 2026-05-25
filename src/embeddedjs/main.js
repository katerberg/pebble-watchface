import Poco from "commodetto/Poco";

let render = new Poco(screen);

const timeFont = new render.Font("Bitham-Black", 30);
const dateFont = new render.Font("Gothic-Bold", 24);
const black = render.makeColor(0, 0, 0);
const white = render.makeColor(255, 255, 255);
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log("Time font height:", timeFont.height);
function draw(event) {
  const now = event.date;
  render.begin();
  render.fillRectangle(white, 0, 0, render.width, render.height);

  // Format time as HH:MM
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const timeStr = `${hours}:${minutes}`;

  const timeWidth = render.getTextWidth(timeStr, timeFont);

  render.drawText(
    timeStr,
    timeFont,
    black,
    (render.width - timeWidth) / 2,
    (render.height - timeFont.height) / 2,
  );
  console.log("Date font height:", dateFont.height);
  console.log("time font height:", timeFont.height);

  // Format date as "Mon Jan 01"
  const dayName = DAYS[now.getDay()];
  const monthName = MONTHS[now.getMonth()];
  const dateStr = `${dayName} ${monthName} ${String(now.getDate()).padStart(2, "0")}`;

  // Draw date below the time
  const dateWidth = render.getTextWidth(dateStr, dateFont);
  render.drawText(
    dateStr,
    dateFont,
    black,
    (render.width - dateWidth) / 2,
    render.height / 2 + timeFont.height,
  );

  render.end();
}

watch.addEventListener("secondchange", draw);
