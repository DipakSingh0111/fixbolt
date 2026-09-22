const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const backup = path.join(__dirname, "../public/images/career_right_original.png");
const dest = path.join(__dirname, "../public/images/career_right.png");

(async () => {
  const meta = await sharp(backup).metadata();
  const w = meta.width;
  const h = meta.height;

  const cx = 1160;
  const cy = 452;
  const rot = -3.2;

  const svg = Buffer.from(`
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="printShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#000" flood-opacity="0.42"/>
        </filter>
      </defs>

      <g
        filter="url(#printShadow)"
        text-anchor="middle"
        transform="rotate(${rot} ${cx} ${cy})"
      >
        <!-- Centered bolt badge -->
        <g transform="translate(${cx}, ${cy - 48})">
          <circle cx="0" cy="0" r="13" fill="#e51d25"/>
          <path
            d="M2 -7.5 L-3.5 1 H0.8 L-2 7.5 L3.5 -1 H-0.8 Z"
            fill="#ffffff"
            stroke-linejoin="round"
          />
        </g>

        <!-- Brand -->
        <text
          x="${cx}"
          y="${cy}"
          font-family="Arial Black, Impact, Arial, sans-serif"
          font-size="56"
          font-weight="800"
          letter-spacing="-0.5"
        >
          <tspan fill="#ffffff">Fix</tspan><tspan fill="#e51d25">Bolt</tspan>
        </text>

        <!-- Centered red underline -->
        <rect
          x="${cx - 36}"
          y="${cy + 9}"
          width="72"
          height="2.5"
          rx="1.25"
          fill="#e51d25"
        />

        <!-- Tagline -->
        <text
          x="${cx}"
          y="${cy + 34}"
          font-family="Arial, Helvetica, sans-serif"
          font-size="14"
          font-weight="700"
          fill="#ffffff"
          letter-spacing="2.4"
        >
          REPAIR. RESTORE. RELIEVE.
        </text>
      </g>
    </svg>
  `);

  const tmp = dest + ".tmp.png";
  await sharp(backup).composite([{ input: svg, top: 0, left: 0 }]).png().toFile(tmp);
  fs.renameSync(tmp, dest);

  console.log("polished print applied");
})();
