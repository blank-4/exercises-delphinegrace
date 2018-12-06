/* Créer une fonction : `nombreDeJour` qui prendra deux paramètres.
  * Le premier est le mois voulu sous forme de nombre
  * le second est l'année.
* La fonction retourne le nombre de jour dans le mois appartenant à l'année passée en paramètre.*/
var jourpParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function nombreDeJour (month,year) {
    var  isbisextile= isanneeBisextile (year);
    if (isbisextile){

    }
    else{

    }
}
/*seconde une fonction anneeBissextile qui prendant un paramètre, année, et qui retournera `true` si l'année est bissextile, et `false` si elle ne l'est pas. Cette fonction sera appellée par la première pour déterminer si une année bissextile ou non.*/
function isanneeBisextile(annee) {
    if (annee% 4 == 0 && annee % 100!=0);
    return true;
}
else{

}
