// Pour commencer on veut que vous affichiez dans la console tout les nombres compris entre 1 et un nombre de votre choix avec une boucle for.
for ( var i = 0 ; i <= 20 ; i++ ) {
    console.log("Je compte jusqu'à " + i);

//création d'une boucle de 1 à 10

// Ensuite on veut que vous vous arrangiez pour que "fizz" s'affiche dans la console a la place de tout multiples de 7 et que les multiples de 5 soient remplacés par "buzz" 
    if(i % 7 == 0) {
        console.log("fizz");
    }
    else if( i% 5 == 0)
        console.log("buzz"); 
}
