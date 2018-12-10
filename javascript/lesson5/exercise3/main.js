var str = document.getElementById("monTableau");
str.innerHTML = "lorem ipsum";

function img() {
    var imgs = ['"https://i.pinimg.com/474x/fd/e6/b1/fde6b17f014fea2c372fa18ab03ed9b4--dog-smiling-card-ideas.jpg"','"http://www.vitamin-ha.com/wp-content/uploads/2014/04/VH-Random-duckhourse.jpg','"http://kb4images.com/images/random-image/37670495-random-image.jpg"', 'http://saxony-blue.com/data/out/154/6565303-random-picture.jpg"'];
    
    var index = Math.floor (Math.random()* imgs.length); 
    console.log(index);
    var maimg = imgs[index] ;
    return maimg;
}


