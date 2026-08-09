const fs = require('fs');
const contents = fs.readFileSync('src/pages/About.tsx', 'utf-8');
const lines = contents.split('\n');
lines.splice(201, 139,
    `          {/* Collage Image Display */}
          <div className="w-full max-w-[1100px] mx-auto px-4 mt-8 lg:mt-12 relative z-10 hover:scale-[1.01] transition-transform duration-500">
            <img 
              src="src/img/09-08-26.png" 
              alt="What our students say" 
              className="w-full h-auto rounded-[32px] object-contain drop-shadow-2xl"
            />
          </div>`);
fs.writeFileSync('src/pages/About.tsx', lines.join('\n'));
console.log('Replaced successfully');
