const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  const size = 128;
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="#FFFFFF" stroke="#D4AF37" stroke-width="4"/>
  </svg>`;

  const emblemBuffer = await sharp('public/logo.jpeg')
    .extract({ left: 340, top: 260, width: 344, height: 285 })
    .resize(80, 80, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toBuffer();

  const circleBadgeBuffer = await sharp(Buffer.from(svg))
    .composite([{ input: emblemBuffer, top: 26, left: 24 }])
    .png()
    .toBuffer();

  // Save preview
  await sharp(circleBadgeBuffer).toFile('test_circle_badge.png');

  // Generate app/icon.png (32x32 and 192x192)
  await sharp(circleBadgeBuffer).resize(32, 32).toFile('src/app/icon.png');
  await sharp(circleBadgeBuffer).resize(192, 192).toFile('public/icon-192.png');
  await sharp(circleBadgeBuffer).resize(512, 512).toFile('public/icon-512.png');
  await sharp(circleBadgeBuffer).resize(180, 180).toFile('src/app/apple-icon.png');
  
  // Also create favicon.ico in src/app and public
  // Sharp can output png or ico if supported, or we can write a valid 32x32 png as favicon.ico (modern browsers accept PNG in .ico) or create a standard .ico file
  const ico32Buffer = await sharp(circleBadgeBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync('src/app/favicon.ico', ico32Buffer);
  fs.writeFileSync('public/favicon.ico', ico32Buffer);

  console.log('All favicons successfully generated!');
}

generateFavicons().catch(console.error);
