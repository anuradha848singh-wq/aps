import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function createBetterCover() {
  const width = 1640;
  const height = 720;
  
  const brainDir = 'C:\\Users\\dextop\\.gemini\\antigravity-ide\\brain\\042ac082-2f9a-4539-ba01-148613b0abb5';
  const outputPath = path.join(brainDir, 'facebook_cover_premium_v3.png');
  
  // 1. Process left image (AI Facility)
  const leftImg = await sharp(path.join(brainDir, 'social_facility_1781605591578.png'))
    .resize(820, 720, { fit: 'cover' })
    .toBuffer();
    
  // 2. Process right image (AI Security Guard)
  const rightImg = await sharp(path.join(brainDir, 'social_security_1781605566117.png'))
    .resize(820, 720, { fit: 'cover' })
    .toBuffer();

  // 3. Create the text/overlay SVG
  const svgOverlay = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="centerDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#020617" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="#0f172a" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#020617" stop-opacity="0.95"/>
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#eab308"/>
        </linearGradient>
      </defs>
      
      <!-- Full screen dark tint so text is readable everywhere -->
      <rect width="${width}" height="${height}" fill="#000000" opacity="0.3" />
      
      <!-- Center Info Box -->
      <rect x="270" y="60" width="1100" height="600" rx="40" fill="url(#centerDark)" stroke="url(#gold)" stroke-width="6" />
      
      <!-- Logo Box -->
      <rect x="730" y="110" width="180" height="70" rx="15" fill="url(#gold)" />
      <text x="820" y="160" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#0f172a" text-anchor="middle">APS</text>
      
      <!-- Title -->
      <text x="820" y="270" font-family="Arial, sans-serif" font-size="56" font-weight="900" fill="#ffffff" text-anchor="middle">ASSISTANCE PROTECTION &amp; SERVICES</text>
      <text x="820" y="320" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#94a3b8" letter-spacing="3" text-anchor="middle">PREMIER FACILITY MANAGEMENT &amp; MANPOWER OUTSOURCING</text>
      
      <!-- Services -->
      <text x="500" y="420" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#facc15" text-anchor="middle">✓ Security Guards</text>
      <text x="820" y="420" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#facc15" text-anchor="middle">✓ Housekeeping</text>
      <text x="1140" y="420" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#facc15" text-anchor="middle">✓ Industrial Facility</text>
      
      <text x="500" y="490" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#facc15" text-anchor="middle">✓ Healthcare Staff</text>
      <text x="820" y="490" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#facc15" text-anchor="middle">✓ Event Logistics</text>
      <text x="1140" y="490" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#facc15" text-anchor="middle">✓ Canteen Mgmt</text>
      
      <!-- Phone Badge -->
      <rect x="660" y="550" width="320" height="70" rx="35" fill="url(#gold)" />
      <text x="820" y="595" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="#0f172a" text-anchor="middle">CALL: 9340065775</text>
    </svg>
  `;

  // 4. Composite everything
  await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
  .composite([
    { input: leftImg, top: 0, left: 0 },
    { input: rightImg, top: 0, left: 820 },
    { input: Buffer.from(svgOverlay), top: 0, left: 0 }
  ])
  .png()
  .toFile(outputPath);
  
  console.log('Cover v3 generated successfully at', outputPath);
}

createBetterCover().catch(console.error);
