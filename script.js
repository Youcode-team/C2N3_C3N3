document.write('<h2>Exercice 1 </h2>');
// ARRAY 1
  const texasss = [
    { name: 'Mike', age: 23, gender: 'm', us: false,},
    { name: 'Liz', age: 20, gender: 'f', us: true, },
    { name: 'Chris', age: 102, gender: 'm', us: true, },
    { name: 'Chuloo', age: 27, gender: 'm', us: false, },
    { name: 'Annie', age: 30, gender: 'f', us: true, },
  ];

// Part 1 - Find all users older than 24
                                        document.write('<h4> 1.Find all users older than 24 </h4>');
//Parcourir un tableau
document.write("<ul>");
  var somme=0;

for (const element of texasss) {
  //Calcul Somme Age
  somme = somme+ element.age;

  //TEST + AFFICHAGE
  if(element.age>24)
    document.write("<li>"+element.name+"</li>");
}
document.write("</ul>");
                                       document.write('<h4> 2. Afficher la somme </h4>');
//Afficher la somme ::
document.write("<p>"+"Le total est : "+somme)+"</p>";
//Afficher les femmes
                                      document.write('<h4> 3.Afficher les femmes </h4>');
document.write("<ol>");
for (const person of texasss) {
  if(person.gender==='f')
    document.write("<li>"+person.name + "</li>");
}
document.write("</ol>");
  
  
  
document.write('<h2>Exercice 2 </h2>');
  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order
  document.write("<ol>");
for (const person of newieyork) {
  if(person.us=== true)
  document.write("<li>"+person.name + "</li>");
}
document.write("</ol>");

var noulist = newieyork.sort((a, b) => (a.name > b.name) ? 1 : -1)
document.write("<ol>");
for (const person of noulist) {
  if(person.us=== true)
  document.write("<li>"+person.name + "</li>");
}
document.write("</ol>");



  // Part 2 - Sort all users by age
  var noulistt = newieyork.sort((a, b) => (a.age > b.age) ? 1 : -1)
document.write("<ol>");
for (const person of noulistt) {
  document.write("<li>"+person.name+ " : "+person.age + "</li>");
}
document.write("</ol>");
//for (const person)
  // Part 3 -  List all female coders
  document.write("<ol>");
   for(const users of newieyork){
    if(users.gender==="f" && users.coder===true)
    document.write("<li>"+users.name + "</li>")
   }
   document.write("</ol>");






document.write('<h2>Exercice 3 </h2>');
  // *********************************************************/
  // ARRAY 3
  const vegzas = [
    {name: 'Charly',age: 32,coder:true,gender: 'm',},
    {name: 'Law',age: 21,coder:true,gender: 'm',},
    {name: 'Rosey',age: 42,coder:false,gender: 'f',},
    {name: 'Steph',age: 18,coder:true,gender:'f'},
    {name: 'Jon',age: 47,coder:false,gender: 'm',},
  ];
  //****************************exercice 3*********************************************************** */
  // Part 1 - Find the total age of male coders under 25
                                       document.write('<h4> 3.Find the total age of male coders under 25 </h4>');

  // const under25=vegzas.filter(item => item.age<25&&item.gender==='m'&&item.coder===true);
  // for (item of under25){
  //   document.write(item.name+' '+item.age+' '+ item.gender);
  // }
  // const under25=vegzas.filter(item => item.age<25 && item.gender==='m' && item.coder===true).map(itemm=>itemm.age);
  // document.write(under25);

  const under25 = vegzas.filter(item => item.age<25 && item.gender==='m' && item.coder).reduce((tota,obj)=> tota+obj.age,0);
  document.write(under25);
  
//************************************************************* */
  // Part 2 - List all male coders over 30
                                       document.write('<h4> 3.Find the total age of male coders under 25 </h4>');  
  const plus30=vegzas.filter(item => item.age>30 && item.gender==='m' && item.coder);
  for (item of plus30){
    document.write(item.name+' '+item.age+' '+ item.gender);
  }

  //*********************************************************** */
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
                                                  document.write('<h4> 3. Find the total age of everyone in texasss, newieyork and vegzas combined. </h4>');
  const toutmonde=texasss.concat(newieyork,vegzas).reduce((tot,ob) => tot+ob.age,0);
  document.write(toutmonde);