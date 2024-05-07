/** A partir d'une liste de nombres, trouver le nombre maximum dans cette liste.
const numbers = [1, 7, 10, 9, 8]; */
function maximum(liste){
        return Math.max.apply(null,liste);
}
const liste=[1, 7, 10, 9, 8];
console.log(maximum(liste));