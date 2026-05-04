# Objectifs d'Apprentissage : Manipulation de Données et Structures ES6

Ce document regroupe les concepts clés pour manipuler les tableaux et utiliser les nouvelles structures de données (Set, Map, WeakMap).

---

### 1. Utilisation de Map, Filter et Reduce sur les Tableaux
Ces trois méthodes permettent de manipuler les tableaux de manière "fonctionnelle" sans modifier le tableau d'origine.

* **`.map()` (Transformer) :** Crée un nouveau tableau en appliquant une fonction à chaque élément du tableau de départ.
    * *Exemple :* `[1, 2].map(x => x * 2)` devient `[2, 4]`.
* **`.filter()` (Filtrer) :** Crée un nouveau tableau contenant uniquement les éléments qui respectent une condition (retournent `true`).
    * *Exemple :* `[10, 5, 20].filter(x => x > 10)` devient `[20]`.
* **`.reduce()` (Accumuler) :** Réduit le tableau à une seule valeur (un nombre, une chaîne, ou même un objet) en accumulant les résultats.
    * *Exemple :* `[1, 2, 3].reduce((acc, curr) => acc + curr, 0)` donne `6`.

### 2. Les Tableaux Typés (Typed Arrays)
En JavaScript standard, les tableaux peuvent contenir n'importe quel type de donnée, ce qui est flexible mais lent. Les **Typed Arrays** sont des objets permettant de manipuler des données binaires brutes en mémoire de façon très performante.
* Ils sont utiles pour traiter de la vidéo, du son, ou faire du calcul graphique (WebGL).
* *Exemples :* `Int8Array`, `Uint32Array`, `Float64Array`.
* Ils ne sont pas de vrais tableaux (ils n'ont pas de méthode `.push()` ou `.pop()`) mais ont une taille fixe dès la création.

### 3. Les Structures de Données : Set, Map et Weak links

#### A. Le Set (Ensemble)
Un **Set** est une collection de valeurs **uniques**. Si vous essayez d'ajouter deux fois la même valeur, elle ne sera stockée qu'une seule fois.
* *Usage :* Idéal pour supprimer les doublons d'un tableau.
* *Syntaxe :* `const monSet = new Set([1, 2, 2, 3]); // Résultat : {1, 2, 3}`

#### B. La Map (Dictionnaire)
Une **Map** est une collection de paires clé/valeur, similaire à un objet, mais avec des différences majeures :
* **Clés de n'importe quel type :** Contrairement aux objets qui n'acceptent que des strings ou symboles en clés, une Map peut avoir un objet, une fonction ou un nombre comme clé.
* **Ordre :** Les éléments conservent leur ordre d'insertion.
* **Taille :** On obtient la taille facilement avec `.size`.

#### C. Les "Weak" Links (WeakMap et WeakSet)
Ce sont des versions spécifiques de Map et Set qui permettent une meilleure gestion de la mémoire (Garbage Collection).
* **WeakMap :** Les clés **doivent** être des objets.
* **Fonctionnement :** Si l'objet utilisé comme clé n'est plus référencé nulle part ailleurs dans votre code, il est automatiquement supprimé de la WeakMap par le ramasse-miettes (Garbage Collector).
* **Utilité :** Stocker des données privées ou des métadonnées sur des objets sans empêcher leur suppression de la mémoire, évitant ainsi les fuites de mémoire.
* *Note :* On ne peut pas itérer (boucler) sur une WeakMap car son contenu peut changer à tout moment selon l'état de la mémoire.

---

### Résumé pour explication orale :
- **Map/Filter/Reduce** : Pour transformer, trier et accumuler proprement.
- **Typed Arrays** : Pour la performance pure et le binaire.
- **Set** : Pour l'unicité (pas de doublons).
- **Map** : Un dictionnaire flexible (clés objets possibles).
- **WeakMap/Set** : Pour lier des données à des objets sans bloquer la mémoire.