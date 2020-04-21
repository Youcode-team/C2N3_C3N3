# JavaScript_Exercices
Exercices JavaScript

# Introduction :
Avant d'entrer directement dans le vif du sujet, cet atelier va vous apprendre les bases de JavaScript.

# Objectifs :
Les objectifs de cet atelier sont d’être capable d’intégrer des scripts clients dans un site ou une page en respectant les bonnes pratiques..

# Modalité de travail :
Travail individuel

# Livrable :
Un lien github

# Sommaire:
1. [Partie 1 : Comment écrire, afficher... SORTIR l'information ?](https://github.com/imanegannaoui/JavaScript_Exercices#partie-1--comment-%C3%A9crire-afficher-sortir-linformation-)
2. [Partie 2 : Variables](https://github.com/imanegannaoui/JavaScript_Exercices#partie-2--variables)
3. [Partie 3 : Conditions](https://github.com/imanegannaoui/JavaScript_Exercices#partie-3--conditions)
4. [Partie 4 : Boucles](https://github.com/imanegannaoui/JavaScript_Exercices#partie-4--boucles)
5. [Partie 5 : Fonctions](https://github.com/imanegannaoui/JavaScript_Exercices#partie-5--fonctions)
6. [Partie 6 : Tableaux](https://github.com/imanegannaoui/JavaScript_Exercices#partie-6--tableaux)
7. [Partie 7 : Objets](https://github.com/imanegannaoui/JavaScript_Exercices#partie-7--objets)

# Partie 1 : Comment écrire, afficher... SORTIR l'information ?
> Sortie_1 : Un des premiers soucis du programmeur est la communication avec la machine.
```
<html>
  <head>
    <title>Programme Out1</title>
  </head>
  <body>
    <script language="JavaScript">
      document.write('Vous avez le bonjour de JavaScript <br>');
    </script>
    HTML vous salut !
  </body>
</html>
```
> Sortie_2 : Afficher le contenu des variables
L'information est dans la mémoire de l'ordinateur. Pour la voir, il faut l'appeler à l'écran.
```
<html>
  <head>
    <title>Programme Out2</title>
  </head>
  <body>
  <script language="JavaScript">
  <!--
     var jour = 21;
     var mois = 'juin';
     document.write(jour + ' ' + mois + ' : solstice');
  //-->
  </script>
  </body>
</html>
```
> Sortie_3 : alert(), rien de grave, vous enverrez des informations
Cette méthode ouvre une boîte de dialogue avec 1 bouton OK. Elle permet :
- D’envoyer une information, un résultat, ... très facilement.
- De faire une pause. (Utile pour la mise au point d'un programme.)
```
<script language="JavaScript">
   alert('Pas discret, mais efficace.');
   alert(2+2);
   alert('Pi='+3.14);
</script>
```
> Sortie_4 :   Afficher dans un formulaire.  
C'est HTML qui crée les formulaires. JavaScript peut les atteindre et afficher dedans.

```
<form name="affiche">
<input type="text" name="champ" size="12" value="">
</form>
<script language="JavaScript"> 
document.affiche.champ.value='titi';
</script>
```
> Entree_1 : prompt(), pour lire des informations.  
Cette méthode ouvre une boîte de dialogue avec une zone saisie et 2 boutons : OK  Annuler. Elle permet : d'envoyer un message, mais surtout, de recevoir des informations.

```
<script language="JavaScript"> 
  annee=prompt('En quelle année sommes-nous ? ', 2000);
  alert('Vous avez répondu : ' + annee)
</script>
```
> Entree_2 : Lire des données à partir d'un formulaire.  

```
<html>
  <head><title>Programme In4</title><head>
  <script language="JavaScript"> 
    function Preferer(x)
    { switch(x) 
         {  case 1 : alert('Votre choix : '+'classique');break; 
            case 2 : alert('Votre choix : '+'jazz');     break; 
            case 3 : alert('Votre choix : '+'rock');     break; 
            case 4 : alert('Votre choix : '+'pop');      break; 
         }; 
    };
  </script>
  </head>
  <body>  
    <form name="musique">
    <select name="choix" onChange="Preferer(document.musique.choix.selectedIndex)">
    <option value = "choix">choisissez :
    <option value = "classique">classique
    <option value = "jazz">jazz
    <option value = "rock">rock
    <option value = "pop ">pop
    </select></form>
  </body>
</html>
```
# Partie 2 : Variables
## Déclaration des variables
Dans l'exercice ci-dessous vous devez créer les variables suivantes :
- num qui contient le nombre 255
- txt qui contient la chaîne de caractère 255
- bin qui contient la valeur booléenne vraie
- flt qui contient la valeur 7,23

## Opération sur les variables
Reprenez la déclaration des variables précédentes et :
- Appliquez à num l'opérateur d'incrémentation
- Concaténez à la chaîne txt la chaîne " est ici une chaîne de caractères"
- Inversez la valeur logique de bin
- Ajoutez à flt la valeur contenue dans num

## Types des variables 
Dans cet exercice vous devez créer les variables suivantes :
- num qui contient le nombre 23
- txt qui contient la chaine de caractère 33
- tmp qui contient le nombre 0
- Convertir la chaîne contenue dans txt en nombre avec parseInt() et mettre le résultat dans tmp
- Ajouter à num le contenu de tmp

Pratice online : [Codingame_Variables](https://www.codingame.com/playgrounds/28439/exercices/javascript---les-variables)

# Partie 3 : Conditions
## Test simple 
Demander à l’utilisateur de saisir son âge. S’il a plus de 18 ans, afficher " Vous êtes majeur ". Sinon afficher " Vous êtes mineur ".

## Test sur la longueur d'une chaîne de caractères
Ecrivez un script qui :
- prend une chaîne de caractères comme argument
- renvoie vrai si la longueur de la chaîne dépasse 10 caractères
- renvoie faux dans les autres cas
💡 Utilisez str.length pour connaitre la taille chaîne de caractères str

## Test sur le type des paramètres
Reprenez la fonction myFct du chapitre précédent et complétez là pour qu'elle renvoie -999999999 si un argument n'est pas un nombre

- 💡 Utilisez typeof( varia ) pour connaitre le type de la variable varia. Si varia est un nombre typeof retourne la chaîne de caractère "number".
- 💡 Vous pouvez tester si deux conditions sont vraies simultanément avec un AND logique (condition1 ET condition2) comme ceci : ( test1 && test2 ).
- 💡 Vous pouvez tester si l'une OU l'autre des conditions sont vraies avec un OR logique (condition1 OU condition2) comme ceci : ( test1 || test2 ).

## Tests imbriqués
Créez un script qui :
- prend une note sur 20 en argument
- renvoie Hideux si la note est entre 0 et 7 exclus
- renvoie Moche si la note entre 7 et 10 exclus
- renvoie Nice si la note entre 10 et 15 exclus
- renvoie GG si la note entre 15 et 20 inclus
- renvoie BUG si la note n'est pas correcte

Pratice online : [Codingame_Conditions](https://www.codingame.com/playgrounds/28439/exercices/javascript---les-tests-conditionnels)

# Partie 4 : Boucles

Pour rappel, nous pouvons utiliser les boucles suivantes en JavaScript :
- La boucle while ;
- La boucle do… while ;
- La boucle for ;
- La boucle for… in ;
- La boucle for… of ;
- La boucle for await… of. 

Voici un script JS d'une boucle *while*. Que va afficher cette boucle ?
```var number = 1;
while (number < 10) {
    number++;
}
alert(number);
```

Voici un autre script JS d'une boucle while. Que va afficher cette boucle ?
```var compteur = 1 ;
do {
   compteur++ ;
   alert(compteur) ;
}
while (compteur<1);
```

Voici encore un script JS d'une boucle while. Que va afficher cette boucle ?
```var compteur = 1 ;
while (compteur<1) {
   compteur++ ;
   alert(compteur) ;
};
```
## Boucle for
Dans le fichier ***"script.js"*** :
- déclarez la variable `br` qui contiendra un retour à la ligne (la balise html `<br>`);
- créez une boucle `for` avec un itérateur `i` qui a la valeur 0;
- la boucle doit s'exécuter tant que `ì` est strictement inférieur à 10;
- à chaque fin de boucle, il faut incrémenter `i`;
- la boucle doit afficher la valeur de `i` suivi du retour à la ligne `br` avec `document.write()`;

## Boucle while avec itérateur
l'objectif est d'utiliser une boucle while pour faire la même chose que dans l'exercice précédent.
Dans le fichier ***"script.js"*** :
- déclarez une variable `i` (pour itérateur) et affectez lui la valeur 0;
- déclarez la variable br qui contiendra un retour à la ligne (la balise html);
- créez une boucle `while`, voir l'astuce;
- la boucle doit s'exécuter tant que `i` est inférieur ou égal à 10;
- à chaque itération, vous afficherez `i` suivi d'un retour de ligne directement avec `document.write();`;

## Boucle while sans itérateur
l'objectif est de faire en sorte que la condition ne soit plus vérifiée à un moment donné afin de sortir de la boucle.
Dans le fichier ***"script.js"*** :
- déclarez les variables `text, result et check`;
- `text` doit être une chaîne vide;
- créez une boucle `while` qui doit s'exécuter tant que `check` est vérifiée;
- la boucle doit demander à l'utilisateur de rentrer du texte `(prompt())` et de le stocker dans `result`;
- la boucle doit ensuite vérifier si `result` contient bien du texte (donc si elle est vérifiée);
- si oui, il faut concaténer `result` à `text`;
- sinon on change la valeur de `check` à `false`, ainsi on sortira de la boucle;
- attribuez à `check` un booléen avec la valeur `true` (avant la boucle).

## Boucle avec break
Cet exercice est le même que le précédent, à la différence que pour sortir de la boucle vous allez utiliser `break`.
Dans le fichier ***"script.js"*** :
- déclarez les variables `text, result et check`;
- `text` doit être une chaîne vide et `check` un booléen avec la valeur `true`;
- créez une boucle `while` qui doit s'exécuter tant que `check` est vérifiée;
- la boucle doit demander à l'utilisateur de rentrer du texte (`prompt()`) et de le stocker dans `result`;
- la boucle doit ensuite vérifier **si** `result` contient bien du texte (donc si elle est vérifiée);
- si oui, il faut **concaténer** `result` à `text`;
- **sinon** utilisez `break`, ainsi on sortira de la boucle;

## Boucle avec continue
Soit trois variables : `i` qui vaut `0` , `j` qui contient un nombre et `limit` qui contient un nombre.
Dans le fichier ***"script.js"*** :
- créez une boucle `while` qui doit s'exécuter tant que `i` est strictement inférieure à `limit`;
- dans la boucle, incrémentez `i` pour chaque itération;
- ajoutez une condition `if` qui exécutera `continue` si `ì` est strictement inférieur à `limit` divisé par 2;
- après la condition, incrémentez `j`;

Pratice online : [3W_Boucles](https://apprendre-html.3wa.fr/javascript/structures-controle/boucles-javascript/boucle-for)

# Partie 5 : Fonctions
## Fonction sans argument
Dans cet exercice vous devez créer une fonction nommée isoNum qui renvoie le nombre 42

## Fonction avec arguments
Créez maintenant une fonction nommée myFct qui :
- prend 2 arguments (arg1 et arg2)
- renvoie comme résultat : arg1.arg2 + arg1 + arg2

Pratice online : [Codingame_Fonctions](https://www.codingame.com/playgrounds/28439/exercices/javascript---les-fonctions)

# Partie 6 : Tableaux
## Création d'un tableau
Créez un tableau qui se nomme tablo et qui contient 1, 2 et 3

## Accédez aux données d'un tableau et les modifier
- Reprenez **tablo** qui contient 1, 2 et 3 de l'exercice précédent
- Accédez au 2ème élément du tableau **tablo** et rangez la valeur dans une variable nommée **item**
- Remplacez le 2ème élément du tableau par le nombre 5

## Ajoutez des données au tableau
- Reprenez **tablo** qui contient 1, 2 et 3 de l'exercice précédent
- Ajoutez une ligne de code qui ajoute la valeur 13 à la fin du tableau
- Ajoutez une autre ligne de code qui ajoute la valeur 14 à la fin du tableau

Pratice online : [Codingame_Tableaux](https://www.codingame.com/playgrounds/28439/exercices/javascript---les-tableaux)

# Partie 7 : Objets
## La carte de recette
- Créez un objet pour contenir des informations sur votre recette préférée. Il doit avoir des propriétés pour `title` (une chaîne), `servings` (un nombre) et `ingredients` (un tableau de chaînes).
- Sur des lignes distinctes (une `console.log` instruction pour chacune), enregistrez les informations sur la recette pour qu'elles ressemblent à:
  - Môle
  - Pour: 2 personnes
  - Ingrédients:
  - cannelle
  - cumin
  - cacao
  
## La liste de lecture
Gardez une trace des livres que vous lisez et des livres que vous souhaitez lire!
- Créez un tableau d'objets, où chaque objet décrit un livre et possède des propriétés pour `title` (une chaîne), `author` (une chaîne) et `alreadyRead` (un booléen indiquant si vous l'avez déjà lu).
- Parcourez la gamme de livres. Pour chaque livre, enregistrez le titre du livre et l'auteur du livre comme ceci: "Le Hobbit par JRR Tolkien".
- Utilisez maintenant une instruction `if / else` pour modifier la sortie selon que vous l'avez encore lue ou non. `Si` vous le lisez, enregistrez une chaîne comme **«Vous avez déjà lu« Le Hobbit »de JRR Tolkien»**, et `sinon`, enregistrez une chaîne comme **«Vous devez toujours lire« Le Seigneur des anneaux »de JRR Tolkien»**.
