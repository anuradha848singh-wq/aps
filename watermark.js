import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\dextop\\.gemini\\antigravity-ide\\brain\\042ac082-2f9a-4539-ba01-148613b0abb5';

const images = [
  'social_security_1781605566117.png',
  'social_housekeeping_1781605578338.png',
  'social_facility_1781605591578.png',
  'social_supervisor_1781605609897.png',
  'social_canteen_1781605623334.png',
  'social_event_1781605636238.png',
  'social_healthcare_1781605651286.png',
  'social_caretaker_1781605667079.png',
  'social_bouncer_1781605682655.png',
  'social_deepcleaning_1781605733939.png'
];

const svgOverlay = `
  <svg width="1024" height="1024">
    <!-- Semi-transparent dark overlay to protect the whole image slightly from stealing -->
    <rect width="1024" height="1024" fill="#000000" opacity="0.05" />
    
    <!-- Top left floating logo mark -->
    <rect x="40" y="40" width="160" height="70" rx="10" fill="#0f172a" />
    <text x="120" y="85" font-family="Arial" font-size="36" font-weight="900" fill="#facc15" text-anchor="middle">APS</text>

    <!-- Massive bottom branded banner -->
    <rect width="1024" height="140" y="884" fill="#0f172a" />
    <text x="50" y="968" font-family="Arial" font-size="44" font-weight="bold" fill="#ffffff">APS MANPOWER SERVICES</text>
    
    <!-- Phone number badge -->
    <rect x="620" y="910" width="360" height="80" rx="40" fill="#facc15" />
    <text x="800" y="962" font-family="Arial" font-size="38" font-weight="900" fill="#0f172a" text-anchor="middle">CALL: 9340065775</text>
  </svg>
`;

async function run() {
  for (const img of images) {
    const inputPath = path.join(brainDir, img);
    const outputPath = path.join(brainDir, 'final_' + img);
    
    if (fs.existsSync(inputPath)) {
      console.log('Processing: ' + img);
      await sharp(inputPath)
        .composite([{ input: Buffer.from(svgOverlay), top: 0, left: 0 }])
        .toFile(outputPath);
    } else {
      console.log('Missing: ' + inputPath);
    }
  }
  console.log('Done!');
}

run().catch(console.error);
