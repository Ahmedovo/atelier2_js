/**Ecrire un programme fonctionnel qui prend une liste puis renvoie un autre liste selon la logique
suivante :
const numbers = [1,3 , 4]; —> [1, 6, 24] */
function factoriel(number){
    if (number == 0 || number == 1 ){
        return 1;
    }
    else return number * factoriel(number-1);
}

function factListe(liste){
    return liste.map(factoriel) ; 
}
const liste = [1,3,4];
const listAfterF = factListe(liste);
console.log(listAfterF);