const fs = require('fs');

const updates = {
    A1: { title: 'German for Beginners – A1', germanTitle: 'Deutsch für Anfänger – A1' },
    A2: { title: 'Elementary German – A2', germanTitle: 'Deutsch für Fortgeschrittene – A2' },
    B1: { title: 'Intermediate German – B1', germanTitle: 'Deutsch für die Mittelstufe – B1' },
    B2: { title: 'Upper-Intermediate German – B2', germanTitle: 'Deutsch für die obere Mittelstufe – B2' },
    C1: { title: 'Advanced German – C1', germanTitle: 'Deutsch für Fortgeschrittene – C1' },
    C2: { title: 'German Proficiency – C2', germanTitle: 'Deutsch auf höchstem Niveau – C2' }
};

let text = fs.readFileSync('src/data/mockData.ts', 'utf8');

for (const level in updates) {
    const levelRegex = new RegExp(`(level:\\s*'${level}',\\s+)title:\\s*'.*?',(\\s+)germanTitle:\\s*'.*?',`);
    text = text.replace(levelRegex, `$1title: '${updates[level].title}',$2germanTitle: '${updates[level].germanTitle}',`);
}

fs.writeFileSync('src/data/mockData.ts', text);
console.log('Titles updated successfully');
