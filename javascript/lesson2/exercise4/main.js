/* On va déclarer une une variable "position"
et lui donner comme valeur "Belleville".*/
var position = "père-Lachaise";

/* On va maintenant créer notre structure de contrôle "switch". on va lui donner en expression ( entre les parenthèses ) notre variable "position".*/
switch (position) {
    case "Belleville" :
        console.log("tu est sur la ligne 11 ou la ligne 2");   break;

    case "Mairie-des-lilas" :
        console.log("tu es sur la ligne 11");
        break;

    case "père-Lachaise" :
    console.log("tu est sur la ligne 3 ou 2");
    break;

    default :
        console.log("je ne sais pas où tu es..");
        break;
}
