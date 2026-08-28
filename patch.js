const fs = require('fs');

const files = [
    'src/pages/Home.tsx',
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
    
    // Pattern to look for the CTA container we just edited
    const searchString = \<div className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-right md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0">
            <div className="flex flex-col justify-center items-center md:items-end space-y-6 relative w-full md:max-w-2xl lg:max-w-3xl">

              {/* Paper Airplane and dotted path SVG */}
              <div className="absolute -top-[70px] left-[-30px] w-full h-[100px] pointer-events-none hidden md:block">
                <svg className="w-full h-full text-white" viewBox="0 0 500 100" fill="none" preserveAspectRatio="none">
                  {/* The curved trajectory */}
                  <path d="M 0 90 Q 200 10 400 30" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" />
                </svg>
                {/* Airplane icon placed at the end of the line */}
                <svg className="absolute top-[18px] right-[70px] w-8 h-8 text-white transform -rotate-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>\;
              
    const replaceString = \<div className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-left md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0">
            
            {/* Paper Airplane and dotted path SVG (Moved to parent layer to sweep across the whole banner) */}
            <div className="absolute top-0 left-0 w-full h-[100px] pointer-events-none hidden md:block">
              <svg className="w-full h-full text-white" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
                {/* The curved trajectory */}
                <path d="M 50 90 Q 400 10 850 40" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" />
              </svg>
              {/* Airplane icon placed at the end of the line (near right side) */}
              <svg className="absolute top-[25px] right-[10%] lg:right-[15%] w-8 h-8 text-white transform -rotate-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-xl lg:max-w-2xl z-10 md:bg-[#0B0F19]/60 md:backdrop-blur-md p-8 md:p-12 md:rounded-[32px] md:border md:border-white/10 md:shadow-2xl">
\;

    // Try to replace, noticing formatting differences
    // Because white space could differ, regex is better:
    let newContent = content.replace(/<div className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-right md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0">\s*?<div className="flex flex-col justify-center items-center md:items-end space-y-6 relative w-full md:max-w-2xl lg:max-w-3xl">\s*?\{\/\* Paper Airplane and dotted path SVG \*\/\}\s*?<div className="absolute -top-\[70px] left-\[-30px] w-full h-\[100px] pointer-events-none hidden md:block">\s*?<svg className="w-full h-full text-white" viewBox="0 0 500 100" fill="none" preserveAspectRatio="none">\s*?\{\/\* The curved trajectory \*\/\}\s*?<path d="M 0 90 Q 200 10 400 30" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" \/>\s*?<\/svg>\s*?\{\/\* Airplane icon placed at the end of the line \*\/\}\s*?<svg className="absolute top-\[18px] right-\[70px] w-8 h-8 text-white transform -rotate-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">\s*?<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" \/>\s*?<\/svg>\s*?<\/div>/g, replaceString);
    
    // Also we need to flip md:justify-end on the button from md:justify-end to md:justify-start!
    // We can do that by looking for md:justify-end inside the pt-2 or pt-5 button flex container
    newContent = newContent.replace(/className="pt-(2|5) sm:pt-5 flex items-center justify-center md:justify-end gap-4"/g, 'className="pt- sm:pt-5 flex items-center justify-center md:justify-start gap-4"');
    
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Updated " + file);
        replaced++;
    }
}
console.log("Replaced files: " + replaced);
