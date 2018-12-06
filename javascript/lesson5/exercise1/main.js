var p = document.getElementById("texte");
    p.innerHTML = "lorem ipsum";

function afficher () {
    p.style.display = "block";
    p.style.color = couleur();
}

function cacher () {
    p.style.display = "none";

}
function couleur() {
    var couleurs = ['#f00','#333','#444', '#000', '#ff0000'];
    var index = Math.floor (Math.random()* couleurs.length); 
        console.log(index);
    var macolor = couleurs [index] ;
    //document.getElementById('texte').style.color = macolor;
    return macolor;

}

