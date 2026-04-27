# Objectifs d'Apprentissage : ES6 (ECMAScript 2015)

Ce document contient toutes les réponses nécessaires pour comprendre et expliquer les bases de ES6 sans aide extérieure.

---

### 1. Qu'est-ce que ES6 ?
**ES6**, abréviation de **ECMAScript 2015**, est la sixième version majeure du standard ECMAScript. C'est la mise à jour la plus importante de l'histoire de JavaScript. Elle a introduit des fonctionnalités modernes qui permettent d'écrire un code plus lisible, plus court et plus robuste, transformant JavaScript en un langage capable de gérer de très grandes applications professionnelles.

### 2. Nouvelles fonctionnalités introduites en ES6
Parmi les nouveautés clés, on retient :
* **Nouvelles déclarations de variables :** `let` et `const`.
* **Fonctions fléchées :** `() => {}`.
* **Template Literals :** Utilisation des backticks (\`).
* **Destructuring :** Extraction simplifiée de données.
* **Paramètres Rest et Spread :** Utilisation de l'opérateur `...`.
* **Classes :** Une syntaxe plus proche de l'orienté objet classique.
* **Promesses :** Pour la gestion de l'asynchrone.
* **Modules :** `import` et `export`.

### 3. Différence entre une constante et une variable
* **Variable (`let`) :** Elle est utilisée pour les données qui ont besoin d'être modifiées (réassignées) au cours du programme.
* **Constante (`const`) :** Elle est utilisée pour les données qui ne doivent pas changer de valeur une fois définies. 
    * *Attention :* `const` empêche la **réassignation** (changer l'adresse mémoire), mais n'empêche pas la **mutation** (modifier le contenu d'un objet ou d'un tableau).

### 4. Variables à portée de bloc (Block-scoped)
Avant ES6, les variables (`var`) avaient une portée de fonction. Désormais, `let` et `const` ont une **portée de bloc**.
Un bloc est défini par des accolades `{ }`. Une variable déclarée à l'intérieur d'un `if`, d'une boucle `for` ou d'un `while` avec `let` ou `const` n'existe pas en dehors de ce bloc. Cela évite les bugs de fuite de variables.

### 5. Fonctions fléchées (Arrow functions) et paramètres par défaut
* **Arrow Functions :** Elles permettent d'écrire des fonctions de manière concise.
    ```javascript
    // Avant :
    var double = function(x) { return x * 2; };
    // ES6 :
    const double = (x) => x * 2;
    ```
* **Paramètres par défaut :** On peut assigner une valeur de secours directement dans la signature de la fonction.
    ```javascript
    const saluer = (nom = "Invité") => `Bonjour ${nom}`;
    ```

### 6. Paramètres Rest et Spread (`...`)
* **Rest (Reste) :** Regroupe plusieurs arguments individuels dans un tableau. On l'utilise dans la déclaration d'une fonction.
    ```javascript
    function addition(...nombres) { return nombres.reduce((a, b) => a + b); }
    ```
* **Spread (Propagation) :** À l'inverse, il "étale" les éléments d'un tableau (ou d'un objet) dans un autre.
    ```javascript
    const tab1 = [1, 2];
    const tab2 = [...tab1, 3, 4]; // [1, 2, 3, 4]
    ```

### 7. Templating de chaînes de caractères (Template Literals)
On utilise les accents graves (backticks) **\`** au lieu des guillemets simples ou doubles.
* **Interpolation :** On insère des variables directement avec `${variable}`.
* **Multi-lignes :** On peut écrire sur plusieurs lignes sans avoir besoin de caractères spéciaux comme `\n`.

### 8. Création d'objets et propriétés
ES6 a simplifié la manipulation des objets :
* **Propriétés raccourcies :** Si le nom de la variable et de la propriété sont identiques, on ne l'écrit qu'une fois.
    ```javascript
    const nom = "Alice";
    const user = { nom }; // Équivalent à { nom: nom }
    ```
* **Noms de propriétés calculés :** On peut utiliser une variable comme nom de clé entre crochets `[maVariable]: "valeur"`.

### 9. Itérateurs et boucles `for-of`
La boucle `for-of` est la méthode moderne pour parcourir les **valeurs** d'un objet itérable (Tableaux, Strings, Maps, Sets).
```javascript
const couleurs = ["rouge", "vert", "bleu"];

for (const couleur of couleurs) {
    console.log(couleur); // Affiche directement la couleur, pas l'index.
}