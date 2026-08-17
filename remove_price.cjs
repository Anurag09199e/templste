const fs = require('fs');

const files = ['src/pages/A1Course.tsx', 'src/pages/A2Course.tsx', 'src/pages/B1Course.tsx', 'src/pages/B2Course.tsx', 'src/pages/C1Course.tsx', 'src/pages/C2Course.tsx'];
files.forEach(f => {
    let text = fs.readFileSync(f, 'utf8');
    text = text.replace(/<div(?:[^>]*)>[\s]*<span(?:[^>]*)>Tuition Fee<\/span>[\s]*<span(?:[^>]*)>[\s]*€\{course\.priceEUR\}[\s]*<\/span>[\s]*<\/div>/g, '');
    fs.writeFileSync(f, text);
});

let f2 = 'src/pages/CourseLevel.tsx';
let text2 = fs.readFileSync(f2, 'utf8');
text2 = text2.replace(/<div(?:[^>]*)>[\s]*<span(?:[^>]*)>Tuition Fee<\/span>[\s]*<p(?:[^>]*)>€\{course\.priceEUR\}<\/p>[\s]*<\/div>/g, '');
fs.writeFileSync(f2, text2);

let f3 = 'src/components/courses/CourseCard.tsx';
let text3 = fs.readFileSync(f3, 'utf8');
text3 = text3.replace(/<div(?:[^>]*)>[\s]*<span(?:[^>]*)>Course Fee<\/span>[\s]*<span(?:[^>]*)>[\s]*€\{course\.priceEUR\}[\s]*<\/span>[\s]*<\/div>/g, '');
fs.writeFileSync(f3, text3);

['src/data/mockData.ts', 'src/types/index.ts'].forEach(f => {
    let t = fs.readFileSync(f, 'utf8');
    t = t.replace(/.*priceEUR.*\n?/g, '');
    fs.writeFileSync(f, t);
});

console.log('done!');
