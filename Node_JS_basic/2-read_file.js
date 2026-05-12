const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    // Lecture synchrone
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // On sépare les lignes et on retire les lignes vides
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  
  // On retire l'en-tête (header)
  const studentLines = lines.slice(1);

  console.log(`Number of students: ${studentLines.length}`);

  const fields = {};

  studentLines.forEach((line) => {
    // On split et on nettoie chaque colonne pour éviter les espaces parasites
    const student = line.split(',');
    if (student.length >= 4) { // On s'assure que la ligne a bien toutes les colonnes
      const firstname = student[0].trim();
      const field = student[3].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  });

  // Affichage final par domaine
  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  }
}

module.exports = countStudents;