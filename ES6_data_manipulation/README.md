# 🚀 JavaScript ES6+ : Maîtriser les Données & Structures

> **Objectif :** Expliquer ces concepts clairement, sans l'aide de Google.

---

## 🛠 1. Le Trio de Choc : Map, Filter, Reduce
Ces méthodes de tableau ne modifient pas le tableau original (**immutabilité**).

| Méthode | Action | Résultat |
| :--- | :--- | :--- |
| **`.map()`** | 🔄 **Transformer** chaque élément | Un nouveau tableau de même taille |
| **`.filter()`** | 🔍 **Sélectionner** selon une condition | Un tableau plus court (ou vide) |
| **`.reduce()`** | 🏗️ **Accumuler** en une seule valeur | Un nombre, objet, string ou tableau |

### Exemples rapides :
```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(n => n * 2);      // [2, 4, 6, 8]
const evens   = numbers.filter(n => n % 2 === 0); // [2, 4]
const total   = numbers.reduce((s, n) => s + n, 0); // 10
⚡ 2. Tableaux Typés (Typed Arrays)
Pour quand la performance est critique (vidéo, WebGL, binaire).

Pourquoi ? Contrairement aux tableaux classiques, ils utilisent des emplacements mémoire fixes et un seul type de donnée.

Les plus courants :

Uint8Array (Entiers 8-bits non signés)

Float32Array (Nombres à virgule)

Usage : const buffer = new Uint8Array(10);

📦 3. Structures de Données Modernes
🔵 Set (L'anti-doublon)
Une collection de valeurs uniques.

Le super-pouvoir : Nettoyer un tableau en une ligne.

const unique = [...new Set([1, 1, 2, 3])]; // [1, 2, 3]

🟢 Map (Le super-objet)
Un dictionnaire clé/valeur plus flexible que l'objet classique.

Avantage : Les clés peuvent être n'importe quoi (même un élément HTML ou une fonction !).

Taille : maMap.size (plus besoin de Object.keys().length).

🟡 WeakMap & WeakSet (Gestion mémoire)
Le "Weak" (faible) signifie que le lien vers l'objet ne l'empêche pas d'être supprimé par le Garbage Collector.

Règle d'or : Les clés doivent être des objets.

Cas d'usage : Stocker des données privées liées à un objet sans créer de fuite de mémoire (si l'objet disparaît, la donnée associée en WeakMap disparaît aussi).

💡 Résumé pour l'oral
Map/Filter/Reduce : "Je transforme, je trie, je fusionne."

Typed Arrays : "C'est du JavaScript qui parle presque le langage de la machine (binaire)."

Set : "Comme un tableau, mais les doublons sont interdits."

Map : "Un dictionnaire où n'importe quoi peut servir de clé."

WeakLink : "Un dictionnaire qui fait le ménage tout seul pour économiser la RAM."