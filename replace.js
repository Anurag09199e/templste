const fs = require('fs');

const files = [
    'src/pages/Placement.tsx',
    'src/pages/GoetheExam.tsx',
    'src/pages/Ausbildung.tsx',
    'src/pages/About.tsx',
    'src/pages/CourseLevel.tsx',
    'src/pages/TelcExam.tsx'
];

for(const f of files) {
    if(!fs.existsSync(f)) continue;
    let content = fs.readFileSync(f, 'utf8');

    // 1. Fix outer wrapper classes (align left instead of right)
    content = content.replace(
        /className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-right md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0"/g,
        'className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-left md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0"'
    );
    
    content = content.replace(
        /className="flex flex-col justify-center items-center md:items-end space-y-6 relative w-full md:max-w-2xl lg:max-w-3xl"/g,
        'className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 p-4 md:p-8 md:bg-[#0B0F19]/40 backdrop-blur-md md:border border-white/10 rounded-3xl md:shadow-2xl md:mr-10"'
    );

    // 2. Fix the Airplane SVG (Move it from right after the wrapper out, and expand it)
    content = content.replace(
        /<div className="absolute -top-\[70px] left-\[-30px] w-full h-\[100px] pointer-events-none hidden md:block">[\s\S]*?<\/svg>\s*<\/div>/g,
        \{/* Paper Airplane and dotted path SVG (Moved to parent layer to sweep across the whole banner) */}
            <div className="absolute top-[30px] left-0 w-[150%] max-w-[1200px] h-[150px] pointer-events-none hidden md:block z-0">
              <svg className="w-full h-full text-white" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none">
                {/* The curved trajectory */}
                <path d="M -50 120 Q 300 20 850 40" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" />
              </svg>
              {/* Airplane icon placed at the end of the line */}
              <svg className="absolute top-[26px] right-[25%] lg:right-[28%] w-10 h-10 text-white transform -rotate-12 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>\
    );
    
    // We also need to move the SVG to just *before* the inner wrapper.
    // The previous regex just replaced it in-place. Because it was originally inside the inner wrapper, we need to extract it and put it before.
    // Actually, in standard JS, replacing it in-place means it's still inside the inner wrapper! 
    // The inner wrapper now has z-10 and ackdrop-blur so putting it inside might cut it off or look weird.
    // Let me rewrite the script completely with precise string replace!
}
