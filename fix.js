const fs = require('fs');

const files = [
    'src/pages/Placement.tsx',
    'src/pages/GoetheExam.tsx',
    'src/pages/Ausbildung.tsx',
    'src/pages/About.tsx',
    'src/pages/CourseLevel.tsx',
    'src/pages/TelcExam.tsx',
    'src/pages/Home.tsx'
];

for(const file of files) {
    if(!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Telc is a bit different, it doesn't have the SVG. 
    // We will do a generic regex that targets the specific wrapper.
    let updated = content;

    if (file.includes('TelcExam.tsx')) {
        let telcPattern = /<div className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-left md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0">\s*?<div className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 p-4 md:p-8 md:bg-\[#0B0F19\]\/40 backdrop-blur-md md:border border-white\/10 rounded-3xl md:shadow-2xl md:mr-10">/g;
        updated = updated.replace(telcPattern, \          <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 md:gap-8 md:my-10 items-center">
            <div className="hidden md:block md:col-span-4 lg:col-span-5">{/* Empty spacing for the left image element */}</div>
            
            {/* Right column for the text content */}
            <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 relative z-10">\);
    } else {
        let pattern = /<div className="relative z-10 w-full px-6 py-12 flex flex-col md:flex-row md:justify-end items-center text-center md:text-left md:px-12 lg:px-20 md:my-10 space-y-6 md:space-y-0">\s*?\{\/\* Paper Airplane and dotted path SVG \(Moved to parent layer to sweep across the whole banner\) \*\/\}\s*?<div className="absolute top-\[30px\] left-0 w-full h-\[150px\] pointer-events-none hidden md:block">\s*?<svg className="w-full h-full text-white" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none">\s*?\{\/\* The curved trajectory \*\/\}\s*?<path d="M -50 120 Q 300 20 850 40" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" \/>\s*?<\/svg>\s*?\{\/\* Airplane icon placed at the end of the line \*\/\}\s*?<svg className="absolute top-\[26px\] right-\[12%\] lg:right-\[15%\] w-10 h-10 text-white transform -rotate-12 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">\s*?<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" \/>\s*?<\/svg>\s*?<\/div>\s*?<div className="flex flex-col justify-center items-center md:items-start space-y-6 relative w-full md:max-w-2xl z-10 p-4 md:p-8 md:bg-\[#0B0F19\]\/40 backdrop-blur-md md:border border-white\/10 rounded-3xl md:shadow-2xl md:mr-10">/g;

        updated = updated.replace(pattern, \          <div className="relative z-10 w-full px-6 py-12 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 md:gap-8 md:my-10 items-center">
            <div className="hidden md:block md:col-span-4 lg:col-span-5">{/* Empty spacing for the left image element */}</div>

            {/* Right column for the text content */}
            <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 relative z-10">

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
              </div>\);
    }

    if(updated !== content) {
        fs.writeFileSync(file, updated, 'utf8');
        console.log('Fixed ' + file);
    } else {
        console.log('Did not match ' + file);
    }
}
