function chiffrer(str, key) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var res = "";
    for (var i = 0; i < str.length; i++) {
        // récupérer l'index de la lettre
        var l = str[i];
        console.log("pour la lettre " + l);
        var index = alphabet.indexOf(l);
        console.log("l'index initial est : " + index);
        // décaler l'index de "key" pour avoir une nouvelle lettre
        index = index + key;
        console.log("l'index décalé est : " + index);
        // trouver la lettre qui est située au nouvel index
        var nouvelleLettre = alphabet[index]; 
        console.log("la nouvelle lettre est : " + nouvelleLettre);
        // ajout de la nouvelle lettre à la fin du résultat
        res = res + nouvelleLettre;
    }
    return res;
    
        
}

console.log(chiffrer("bienenue",5));