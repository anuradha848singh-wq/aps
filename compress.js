import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

async function compressImages() {
  const assetsDir = path.join(process.cwd(), 'attached_assets');
  const files = walkSync(assetsDir);
  
  for (const inputPath of files) {
    if (inputPath.endsWith('.png') || inputPath.endsWith('.jpg') || inputPath.endsWith('.jpeg')) {
      const dir = path.dirname(inputPath);
      const filename = path.basename(inputPath);
      const outputFilename = filename.replace(/\.(png|jpg|jpeg)$/, '.webp');
      const outputPath = path.join(dir, outputFilename);
      
      console.log(`Compressing ${filename}...`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 70, effort: 6 }) // aggressive compression
          .resize(1920, null, { withoutEnlargement: true }) // ensure max width 1920px
          .toFile(outputPath);
          
        // Delete original to save space
        fs.unlinkSync(inputPath);
        console.log(`✓ Converted to ${outputFilename}`);
      } catch (err) {
        console.error(`Error compressing ${filename}:`, err);
      }
    }
  }
}

compressImages().then(() => console.log('All nested images compressed successfully!'));
