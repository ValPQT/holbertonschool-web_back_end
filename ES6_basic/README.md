# Apprendre ES6 : Les Bases du JavaScript Moderne

Ce document résume les concepts fondamentaux introduits par ECMAScript 2015 (ES6) pour vous aider à les expliquer clairement et sans aide extérieure.

---

### 1. Qu'est-ce que ES6 ?
**ES6** (ou ECMAScript 2015) est la sixième version majeure du standard ECMAScript, sur lequel JavaScript est basé. Elle a marqué le changement le plus important de l'histoire du langage en introduisant une syntaxe plus concise, de nouvelles fonctionnalités puissantes et une meilleure structure pour le développement d'applications complexes.

### 2. Nouvelles fonctionnalités introduites en ES6
Parmi les nouveautés majeures, on trouve :
* Le typage de variables avec `let` et `const`.
* Les fonctions fléchées (`arrow functions`).
* Les gabarits de chaînes de caractères (`template literals`).
* La décomposition (`destructuring`).
* Les paramètres par défaut, le `rest` et le `spread`.
* Les classes et les modules.
* Les itérateurs et les promesses.

### 3. Différence entre une constante et une variable
* **Variable (`let`)** : Sa valeur peut être réassignée après sa déclaration. On l'utilise quand on sait que la donnée va évoluer (ex: un compteur).
* **Constante (`const`)** : Sa valeur est fixée lors de la déclaration. Elle ne peut pas être réassignée. 
    * *Note :* Pour un objet ou un tableau stocké dans une `const`, on peut modifier le contenu (ajouter une propriété, changer un élément), mais on ne peut pas remplacer l'objet entier.

### 4. Variables à portée de bloc (Block-scoped)
Avant ES6, `var` avait une portée de fonction. Avec ES6, `let` et `const` ont une **portée de bloc**.
Un bloc est défini par tout ce qui se trouve entre deux accolades `{ }` (if, for, while, fonctions). Une variable déclarée dans un bloc n'est pas accessible à l'extérieur de celui-ci.

### 5. Fonctions fléchées (Arrow Functions)
Elles offrent une syntaxe plus courte :
```javascript
// Classique
const addition = function(a, b) { return a + b; };

// ES6 (Fléchée)
const addition = (a, b) => a + b;
Paramètres par défaut : On peut désormais assigner une valeur par défaut directement dans les parenthèses :

JavaScript
const saluer = (nom = "Inconnu") => `Bonjour ${nom}`;
6. Paramètres Rest et Spread
Rest (...args) : Utilisé dans les paramètres d'une fonction pour regrouper tous les arguments restants dans un seul tableau.

JavaScript
function somme(...nombres) { /* nombres est un tableau */ }
Spread (...array) : Utilisé pour "étaler" les éléments d'un tableau ou d'un objet (pour copier ou fusionner).

JavaScript
const nveauTab = [...ancienTab, 4, 5];
7. String Templating (Gabarits de texte)
Utilise les backticks ( ` ) au lieu des guillemets. Cela permet :

L'interpolation de variables : `Hello ${name}`.

Les chaînes multi-lignes sans utiliser \n.

8. Création d'objets et propriétés
ES6 simplifie la création d'objets :

Raccourci de propriété : Si le nom de la clé est le même que le nom de la variable, on ne l'écrit qu'une fois.

JavaScript
const age = 25;
const user = { age }; // au lieu de { age: age }
Méthodes simplifiées : Plus besoin du mot-clé function pour les méthodes internes.

9. Itérateurs et boucles for-of
La boucle for-of permet de parcourir directement les valeurs d'un objet itérable (comme un tableau, une chaîne de caractères ou une Map).

JavaScript
const fruits = ['pomme', 'banane'];
for (const fruit of fruits) {
    console.log(fruit); // Affiche la valeur, pas l'index
}