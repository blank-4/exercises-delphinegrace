/*### CHIFFREMENT DE CÉSAR

* Avant tout, aller regarder ce qu'est le chiffre de César, ou chiffrement par décallage : [https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)

* Créer une fonction `chiffrer`. Elle prendra deux paramètres,  le premier est une String qui sera la phrase à encoder. Le second est le décalage pour le code de César :
  * Cette fonction doit encoder le message et retourner le message encodé.
  * Pour vous aider: voici l'alphabet sous forme de tableau :
  ```js
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ```
* Créer une fonction `dechiffrer` qui prendra les deux mêmes paramètres que la fonction chiffrer.
  * Cette fonction doit déchiffrer le message passé en paramètre avec la clé, elle aussi passée en paramètre.
  * 
  
* Bonus : le programme doit laisser tel quel les charactères non présents dans l'alphabet.
*/

function chiffrer(str, key){
    var res = "";
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < str.length; i++) {
        // récupérer l'index de la lettre
        var letters = str[i];
        console.log("pour la lettre" +letters)
        var index = alphabet.indexOf(letters);
        console.log("l'index de départ est:" + index);
        // décaler l'index de "key" pour avoir une lettre
        var nouvelleLettre = alphabet[index];
        console.log("la nouvelle lettre est:" + nouvelleLettre);
        res = res + nouvelleLettre;
    }
    return res;
}
chiffrer("coucou", 2);
