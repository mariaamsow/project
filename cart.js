/*DEBUT DU SCRIPT*/
//RECUPERATION DES PREMIERS ELEMENTS ESSENTIELS
var article = document.querySelectorAll('.item');
var ParentArticle = document.querySelector('.parent');
var prixTotal = document.getElementById('total-price'); 

//AUGMENTATION , DIMINUTION , SUPRESSION ET FAVORITE
for (var i = 0; i < article.length; i++) {

//RECUPERATION DES BOUTONS ET DES PRIX
    let moins = article[i].children[1]; //BOUTONS MOINS
    let plus = article[i].children[3]; // BOUTONS PLUS
    let btnDelete = article[i].children[4];// BOUTON DELETE
    let articleNum = article[i].children[2];//NOMBRE D'ARTICLE
    let quantity = parseInt(articleNum.innerText);//LA QUANTITE
    let prix = article[i].children[7].children[0];//PRIX TOTAL DES ARTICLES
    let prixUnit = article[i].children[6];//PRIX UNITAIRE
    let ArticlePrice = parseInt(prixUnit.innerText);//PRIX DE L'ARTICLE EN TEXTE
    let Fav = article[i].children[5];//BOUTON FAVORIS


//DECRIMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
    moins.addEventListener('click', function () {
        if (quantity > 0) {
            quantity--;
            articleNum.innerHTML = quantity;
            prix.innerText = quantity * ArticlePrice;
            calSum(); 
        }
    });


//AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
    plus.addEventListener('click', function () {
        quantity++;
        articleNum.innerHTML = quantity;
        prix.innerText = quantity * ArticlePrice;
        calSum(); 
    });

//SUPPRIMER UN ARTICLE ET METTRE A JOUR
    btnDelete.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        calSum(); // Mettez à jour le total à chaque suppression
    });

//AJOUT EN FAVORIS ET CHANGEMENT DE COULEUR
    const colors = ['red', 'transparent']; // Liste de couleurs
    let currentIndex = 0;

    Fav.addEventListener('click', function () {
        Fav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        return alert(`Added to favorite`)
    });
}

//CALCUL DES PRIX TOTAUX
function calSum() {
    let total = 0;

    // Parcourez chaque article pour calculer le total
    for (var i = 0; i < article.length; i++) {
        total += parseInt(article[i].querySelector('.price').innerText.replace('fcfa', '')) * parseInt(article[i].querySelector('.quantity').innerText);
    }

    prixTotal.textContent = total.toFixed(2) + ' fcfa'; 


}

                                  /*FIN DU SCRIPT*/   
