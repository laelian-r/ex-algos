// Ex 1/11 :
// Count of positives / sum of negatives

// let result = [];

// function somme() {
//     let positifsCounter = 0;
//     let negaifsCounter = 0;

//     if (tab.length === 0) {
//         return result;
//     } else {
//         for (let i = 0; i < tab.length; i++) {
//             if (tab[i] > 0) {
//                 positifsCounter++;
//             } else if (tab[i] < 0) {
//                 negaifsCounter += tab[i]   
//             }
//         }
//     }

//     result.push(positifsCounter, negaifsCounter);

//     return result;
// }

// const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// console.log(somme(result)); // [10, -65]

// --------------------------------------------------

// Ex 2/11 :
// Even or Odd

// function evenOrOdd(nbr) {
//     if (nbr % 2 === 0) {
//         return 'Even';
//     } else {
//         return 'Odd'
//     }
// }
// console.log(evenOrOdd(10));  // 'Even'
// console.log(evenOrOdd(3));  // 'Odd'

// --------------------------------------------------

// Ex 3/11 :
// Find the Difference in Age between Oldest and Youngest Family Members

// let result = [];

// function ages(event) {
//     let age_le_plus_jeune = event[0];

//     for (let i = 0; i < event.length; i++) {
//         if (age_le_plus_jeune > event[i]) {
//             age_le_plus_jeune = event[i];
//         }
//     }


//     let age_le_plus_vieux = event[0];

//     for (let j = 0; j < event.length; j++) {
//         if (age_le_plus_vieux < event[j]) {
//             age_le_plus_vieux = event[j];
//         }
//     }

//     const difference = age_le_plus_vieux - age_le_plus_jeune;

//     result.push(age_le_plus_jeune, age_le_plus_vieux, difference);

//     return result;
// }
// ages([18, 7, 16, 35, 56, 2]);
// console.log(result); // [2, 56, 54]

// --------------------------------------------------

// Ex 4/11 :
// Factorial division

// function factoriels(nbr_1, nbr_2) {
//     let factoriel1 = 1;

//     for (let i = 1; i <= nbr_1; i++) {
//         factoriel1 *= i;
//     }


//     let factoriel2 = 1;

//     for (let i = 1; i <= nbr_2; i++) {
//         factoriel2 *= i;
//     }

//     let result = factoriel1 / factoriel2;

//     return result;
// }
// console.log(factoriels(5, 3)); // 20

// --------------------------------------------------

// Ex 5/11 :
// Number Pairs

// let result = [];

// function compare(tab1, tab2) {
//     for (let i = 0; i < tab1.length; i++) {
//         if (tab1[i] > tab2[i]) {
//             result.push(tab1[i]);
//         } else {
//             result.push(tab2[i]);
//         }
//     }

//     return result
// }
// console.log(compare([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); // [23, 64, 53, 17, 88]

// --------------------------------------------------

// Ex 6/11 :
// Simple Fun #347: Bulb Maze I

// function peutTraverser(labyrinthe) {
//     for (let i = 0; i < labyrinthe.length; i++) {
        
//         if (labyrinthe[i] === 'o') {
//             return false;
//         }


//         let labyrinthe2 = '';
//         if (labyrinthe[i] === 'x') {
//             labyrinthe2 += 'o';
//         } else if (labyrinthe[i] === 'o') {
//             labyrinthe2 += 'x';
//         } else if (labyrinthe[i] === ' ') {
//             labyrinthe2 += ' ';
//         }

//         labyrinthe = labyrinthe2;
//     }

//     return true;
// }
// console.log(peutTraverser('xo oxox')); // true
// console.log(peutTraverser('ox xoxo')); // false

// --------------------------------------------------

// Ex 7/11 :
// Create palindrome

// function palindrome(mot) {
//     let results = [''];

//     for (let i = 0; i < mot.length; i++) {
//         if (mot[i] === 'a') {
//             for (let j = 0; j < results.length; j++) {
//                 results[j] += 'b';
//             }
//         } else if (mot[i] === 'z') {
//             for (let j = 0; j < results.length; j++) {
//                 results[j] += 'y';
//             }
//         } else {
//             // charCodeAt sert à trouver le numéro qui correspond à la lettre demandée 
//             const charCode = mot[i].charCodeAt(mot[i]);

//             // Copie des valeurs du tableau dans 'resultsTmp'
//             // Si on avait fait
//             // const resultsTmp = results;
//             // on aurait fait une copie 'par référence' et modifier une valeur dans un tabeau aurait modifié la valeur
//             // dans l'autre tableau
//             const resultsTmp = [...results];

//             const nbMots = results.length;
//             for (let j = 0; j < nbMots; j++) {
//                 results[j] = results[j] + String.fromCharCode(charCode - 1);
//             }
            
//             for (let j = 0; j < nbMots; j++) {
//                 results.push(resultsTmp[j] + String.fromCharCode(charCode + 1));
//             }
//         }
//     }

//     let palindrome = [];

//     for (let i = 0; i < results.length; i++) {
//         let motReverse = results[i].split('').reverse().join('');
        
//         if (results[i] === motReverse) {
//             palindrome.push(results[i]);
//         }
//     }

//     console.log(results);

//     if (palindrome.length > 0) {
//         console.log('Palindrome(s) : ' + palindrome);
//         return true;
//     } else {
//         console.log('Il n\'y a aucun palindrome dans ' + mot);
//         return false;
//     }
// }

// console.log(palindrome('adfa')); // ['bceb', 'beeb', 'bcgb', 'begb']

// --------------------------------------------------

// Ex 8/11 :
// String to integer conversion

// function myParseInt(string) {
//     // /^\d+$/ est une expression régulière (regex) utilisée pour définir un modèle de texte
//     // / : Marque le début et la fin d'une expression régulière (regex)
//     // ^ : Indique le début de la chaîne
//     // \d : Représente n'importe quel chiffre de 0 à 9
//     // + : Signifie "un ou plusieurs" des éléments précédents (ici, des chiffres). Cela veut dire que la chaîne doit contenir au moins un chiffre
//     // $ : Indique la fin de la chaîne
//     // Donc /^\d+$/ vérifie si la chaîne entière de ^ à $ est composée uniquement de chiffres \d+

//     // .test(string) est utilisée pour tester si la chaîne string correspond au motif défini par l'expression régulière
//     // Si la chaîne ne contient que des chiffres et rien d'autre
//     // .test(string) retourne true
//     // Si non elle retourne false
//     if (/^\d+$/.test(string.trim())) {
//         return Number(string.trim());
//     } else {
//         return 'NaN';
//     }
// }

// console.log(myParseInt('10')); // 10
// console.log(myParseInt('    10 ')); // 10
// console.log(myParseInt('10 apples')); // NaN

// --------------------------------------------------

// Ex 9/11 :
// Finding length of the sequence

// let result = [];
// let counter = 0;
// let startSequence = false;

// function sequence(nbr) {
//     for (let i = 0; i < tab.length; i++) {
//         if (tab[i] === nbr) {
//             result.push(tab[i]);
//             counter++;

//             if (startSequence === false) {
//                 startSequence = true;
//             } else {
//                 return result;
//             }
//         } else if (startSequence === true) {
//             result.push(tab[i]);
//         }
//     }

//     if (counter < 2) {
//         return 0;
//     }
// }

// let tab = [0, -3, 7, 4, 0, 3, 7, 9];
// console.log(sequence(7)); // [7, 4, 0, 3, 7]

// --------------------------------------------------

// Ex 10/11 :
// Simple decrypt algo

// const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let result = '';

// function decrypt(symboles) {
//     for (let i = 0; i < alphabet.length; i++) {
//         let counter = 0;

//         for (let j = 0; j < symboles.length; j++) {
//             if (symboles[j] === alphabet[i]) {
//                 counter++;
//             }
//         }

//         result += counter;
//     }

//     return result;
// }
// console.log(decrypt('$aaaa#bbb*cc^fff!z')); // '43200300000000000000000001'
// console.log(decrypt('z$aaa#ccc%eee1234567890')); // '30303000000000000000000001'

// --------------------------------------------------

// Ex 11/11 :
// Round Robin Sorting

// function tri(prenoms) {
//     let prenoms_trie = [];
//     prenoms_trie = prenoms.sort();


//     let prenom_unique = [];

//     for (let i = 0; i < prenoms_trie.length; i++) {
//         if (!prenom_unique.includes(prenoms_trie[i])) {
//             prenom_unique.push(prenoms_trie[i]);
//         }
//     }


//     console.log('Prenoms trié => ' + prenoms_trie);

//     console.log('prenom unique => ' + prenom_unique);


//     let cadeaux = [];

//     for (let j = 0; j < prenoms.length; j++) {
//         cadeaux.push(prenom_unique[j % prenom_unique.length]);
//     }
    
//     return cadeaux
// }

// console.log(tri(["Sarah", "Charlie", "Mo"])); // ["Charlie", "Mo", "Sarah"]
// console.log(tri(["Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"])); // ["Charlie", "Mo", "Sarah", "Charlie", "Mo", "Sarah", "Charlie"]

// --------------------------------------------------