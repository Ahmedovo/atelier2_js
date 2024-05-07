/** Ecrire un programme fonctionnel qui prend un tableau d'objets représentant des produits, et calcul
le prix total de tous les produits TTC (25 % TVA ). */

function prixTtotal(products){
    const totalATax = products.reduce(function(total,obj){ return total+obj.price*1.25; },0);
    return totalATax;
}

const products = [
{ name: "Shirt", price: 20 },
{ name: "Shoes", price: 50 },
{ name: "Hat", price: 15 }
];

console.log(prixTtotal(products));
