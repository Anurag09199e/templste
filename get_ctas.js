const files = [
    'src/pages/Placement.tsx',
    'src/pages/GoetheExam.tsx',
    'src/pages/Ausbildung.tsx',
    'src/pages/About.tsx',
    'src/pages/CourseLevel.tsx',
    'src/pages/TelcExam.tsx'
];
for(const f of files) {
  let content = require('fs').readFileSync(f, 'utf8');
  let match = content.match(/<div className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-right[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
  if(match) {
    console.log(\n\n--- MATCH in  ---\n);
    console.log(match[0]);
  }
}
