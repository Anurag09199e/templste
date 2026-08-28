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

    // Remove the SVG block
    const svgRegex = /\{\/\*\s*Paper Airplane and dotted path SVG\s*\*\/\}[\s\S]*?<\/svg>\s*<\/div>\s*/;
    content = content.replace(svgRegex, '');
    
    // Also try removing the old SVG block if it exists
    const oldSvgRegex = /<div className="absolute -top-\[70px] left-\[-30px][\s\S]*?<\/svg>\s*<\/div>\s*/;
    content = content.replace(oldSvgRegex, '');
    
    // Replace the inner container class to remove styling
    // It could be '...md:max-w-2xl z-10 p-4 md:p-8...'
    // or '...md:max-w-2xl lg:max-w-3xl z-10 p-4 md:p-8...'
    const classRegex = /className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full (md:max-w-2xl|md:max-w-2xl lg:max-w-3xl) z-10[\s\S]*?mr-10"/;
    content = content.replace(classRegex, 'className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full  z-10 "');
    
    // Also, TelcExam has a slightly different pattern for the SVG/classes if not updated properly. Let's check:
    const telcRegex = /className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 p-4 md:p-8 md:bg-\[\#0B0F19\]\/40 backdrop-blur-md md:border border-white\/10 rounded-3xl md:shadow-2xl md:mr-10"/;
    content = content.replace(telcRegex, 'className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 "');

    if (content !== fs.readFileSync(file, 'utf8')) {
        fs.writeFileSync(file, content, 'utf8');
        console.log("Updated " + file);
        replaced++;
    }
}
console.log("Replaced files: " + replaced);
