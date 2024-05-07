/*Ecrire un programme fonctionnel qui prend une liste puis renvoie un autre liste selon la logique
suivante :  const numbers = [1, 7, 10, 9, 8 , 2]; —> [2, 8 , 10] */

function filtrage(liste){
    const nombreFiltre = liste.filter(number => number % 2 ==0) ;
    return nombreFiltre.sort((a,b)=>a-b);
}

const numbers =[1,7,10,8,9,2];
const filtered = filtrage(numbers);
console.log (filtered);