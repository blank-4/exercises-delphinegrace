/* Créer une fonction qui porte le nom `exercice5`, elle contiendra le code pour les consignes suivantes :

* Créer une variable `maString` contenant une chaîne de caractères de votre choix.
* Utiliser une méthode permettant d'afficher uniquement la moitié de la chaîne de caractères dans la console.

* Utiliser une méthode permettant d'afficher cette moitié de string en inversant l'ordre des mots dans la console.*/

function exercice5(){
    var maString= "cc c'est moi";
    var maSUbSTr = maString.substr(0, maString.length/2);
    //console.log(maString.substr(0, maString.length));
    console.log(maSubStr);
    //inverser mes mots:
    console.log(maSubStr.split(" ").reverse().join(" "));
}