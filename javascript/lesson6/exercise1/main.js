function temps() { 
    var t = new Date();
    console.log(typeof t.getDate());
    console.log(t.getHours()+":"+t.getMinutes()+":"+ t.getSeconds());
    document.getElementById("horloge").innerHTML = t.getFullYear() + " / " + t.getDate()+ " / " + (t.getMonth()+1) + "     " +t.getHours() + ": " + t.getMinutes()+": "+ t.getSeconds()+"   "+ "voilà ! J'ai réussi !";   
}
setInterval(temps, 1000); // Lance l'exécution de la fonction myfunction
