/** Ecrire un programme fonctionnel qui divise le texte en lignes, convertit chaque ligne en majuscules,
filtre les lignes contenant la lettre "I", puis les imprime. */
function filtrerLigneTexte(texte){
    lignes=texte.split("\n");
    const toUpper=  lignes.map(ligne=>ligne.toUpperCase());
    const filtrer = toUpper.filter(ligne=>ligne.includes('I'));
    console.log(filtrer);
}
const texte =`ce texte est un test 
pour filter 
un texte qui contient I est de le met en majiscule`;
filtrerLigneTexte(texte);