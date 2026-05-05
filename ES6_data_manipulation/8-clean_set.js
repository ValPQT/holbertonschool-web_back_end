export default function cleanSet(set, startString) {
  // 1. Vérification : si startString n'est pas une string ou est vide, on renvoie une string vide
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // 2. On parcourt le Set
  for (const value of set) {
    // On vérifie que la valeur est une string ET qu'elle commence par startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // On extrait la partie après startString
      const valueSubStr = value.slice(startString.length);
      
      // On l'ajoute au tableau si elle existe
      if (valueSubStr) {
        parts.push(valueSubStr);
      }
    }
  }

  // 3. On joint tous les éléments avec un tiret
  return parts.join('-');
}