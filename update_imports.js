import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.js')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(process.cwd(), 'client', 'src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // replace .png, .jpg, .jpeg in imports with .webp
  const newContent = content.replace(/\.(png|jpg|jpeg)(["'])/g, '.webp$2');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated imports in ${file}`);
  }
}
