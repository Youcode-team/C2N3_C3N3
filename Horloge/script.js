// ndf réalisé le 23 avril

var heurseDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
    //Déclaration des variables qui seront utilisées :
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;

    //Récupérer la date actuelle :
    today = new Date();

    //Récupérer l'année :
    annee = today.getFullYear();

    //Récupérer le mois :
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre","Novembre", "Décembre"];
    mois = listeMois[today.getMonth()];//getMonth() donne l'index 1 comme on est en Février, ce qui donne la valeur "Février" depuis notre list

    //Récupérer le numéro du jour du mois

    

    

}
