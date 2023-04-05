console.log("connecté");
// je sélectionne les vignettes
const vignettes = document.querySelectorAll(".small");
console.log(vignettes);

// je sélectionne l'image grands format
const fullImg = document.getElementById("full");
console.log(fullImg);

// Je sélectionne le bouton
const btn = document.querySelector('.btn-add'); 
console.log(btn); 

// J'initialise le panier
let panier = 0; 

// Je sélectionne la DIV panier-container
const panierContainer = document.querySelector('.panier-container'); 

//Je selectionne le lien ❤
const love =  document.querySelector(".love");
console.log(love);

// J'initialise le ❤
let like = 0

//j'affiche une vignette en grd format
vignettes.forEach((item) => {
    console.log(item,"pour chaque item c'est ok");

    item.addEventListener("click",function() {
        console.log(item,"vignette cliquée"); 
        let imgSource = item.getAttribute('src');
        //j'attribut la nouvelle url à l'image grand format
        fullImg.setAttribute("src",imgSource);
    })
})// fermeture de la forEach

//compteur du panier
btn.addEventListener('click', function(){
    console.log('bouton cliqué'); 
    // J'ajoute 1 au compteur
    panier = panier + 1 ; 
    console.log(panier); 
    // J'affiche le contenu
    if( panier < 2) {
        panierContainer.innerText = "Vous avez" + " " + panier + " " + "produit dans votre panier"; 
    }else{
        panierContainer.innerText = "Vous avez" + " " + panier + " " + "produits dans votre panier"; 
    }
}); 

//compteur de like
love.addEventListener('click', function(){
    console.log('coeur cliqué'); 
    // J'ajoute 1 au compteur
    like = like + 1 ; 
    console.log(like); 
    // J'affiche le contenu
    if( like < 2) {
        love.innerText = "" + like + "❤ likes"; 
    }else{
        love.innerText = "" + like + "❤ likes"; 
    }
}); 



