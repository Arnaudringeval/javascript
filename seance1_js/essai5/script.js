let myArray = ["Sébastien", "Laurence", "Ludovic", "Pauline", "Guillaume"];
alert(myArray[1]); //affiche 1

myArray.shift(); //retire le premier élément du tableau, ici Sébastien
alert(myArray);

myArray.pop(); //retire le dernier élément du tableau, ici Guillaume
alert(myArray);

let cousinsString = 'Pauline Guillaume Clarisse';
let cousinsArray = cousinsString.split(' ');
alert(cousinsString);
alert(cousinsArray);
cousinsArray.pop();
alert(cousinsArray); //retire Clarisse

cousinsString = cousinsArray.join(' ; ');
alert(cousinsString);


let myArray = ["Sébastien", "Laurence", "Ludovic", "Pauline", "Guillaume"];

alert(myArray.length); //affiche 5

for(let index=0, items=myArray.length; i < items ; index++)
{
    alert(myArray[index]);
}

let family = {}; //objet vide

let family = {
    self: 'Arnaud',
    brother: 'olivier',
    sister: 'Jenna',
    cousin_1: 'Cécilia',
    cousin_2: 'Valérie',
};

alert(family['cousin_2']); //affiche Valérie
alert(family['brother']); //affiche olivier

alert(family.cousin_2); //affiche valérie