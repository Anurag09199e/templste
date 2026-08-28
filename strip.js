const fs = require('fs');

const files = [
    'src/pages/Placement.tsx',
    'src/pages/GoetheExam.tsx',
    'src/pages/Ausbildung.tsx',
    'src/pages/About.tsx',
    'src/pages/CourseLevel.tsx',
    'src/pages/TelcExam.tsx'
];

let replaced = 0;
for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Removing the Paper Airplane SVG element fully
    content = content.replace(/\s*\{\/\* Paper Airplane and dotted path SVG[\s\S]*?<\/div>/, '');

    // Changing the inner wrapper container from having the bg and shadow to just having ' ' 
    content = content.replace(
        /className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 p-4 md:p-8 md:bg-\[#0B0F19\]\/40 backdrop-blur-md md:border border-white\/10 rounded-3xl md:shadow-2xl md:mr-10"/g,
        'className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 "'
    );

    if (content !== fs.readFileSync(file, 'utf8')) {
        fs.writeFileSync(file, content, 'utf8');
        console.log("Updated " + file);
        replaced++;
    }
}
console.log("Replaced files: " + replaced);
