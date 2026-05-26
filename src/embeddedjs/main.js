import Poco from "commodetto/Poco";
import parseBMF from "commodetto/parseBMF";
import parseRLE from "commodetto/parseRLE";

const render = new Poco(screen);

function getFont(name, size) {
  const font = parseBMF(new Resource(`${name}-${size}.fnt`));
  font.bitmap = parseRLE(new Resource(`${name}-${size}-alpha.bm4`));
  return font;
}

const timeFont = getFont("AvenirNext-Regular", 83);
const black = render.makeColor(0, 0, 0);
const white = render.makeColor(255, 255, 255);

// Precompute layout positions
const blockHeight = timeFont.height;
const timeY = (render.height - blockHeight) / 2;

function draw(event) {
  const now = event.date;
  console.log("block height", blockHeight);
  console.log("render height", render.height);
  console.log("render width", render.width);
  console.log("time y", timeY);

  render.begin();
  render.fillRectangle(white, 0, 0, render.width, render.height);

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const hoursWidth = render.getTextWidth(hours, timeFont);
  const minutesWidth = render.getTextWidth(minutes, timeFont);
  render.drawText(hours, timeFont, black, (render.width - hoursWidth) / 2, 0);
  render.drawText(
    minutes,
    timeFont,
    black,
    (render.width - minutesWidth) / 2,
    blockHeight,
  );

  render.end();
}

watch.addEventListener("secondchange", draw);
