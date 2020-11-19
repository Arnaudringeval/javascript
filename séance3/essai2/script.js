// Définition de l’objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

    this.addFriend = function(nick, age, sex, parent, work, friends) {
        this.friends.push(new Person(nick, age, sex, parent, work, friends));
    }
}

// On crée des variables qui vont contenir une instance de l’objet Person :
let seb = new Person('Sébastien', 25, 'm', 'aîné', 'Développeur', []);
let lau = new Person('Laurence', 19, 'f ', 'soeur', 'Sous-officier', []);

alert(seb.nick + ' ' + seb.age); // Affiche : « Sébastien »
alert(lau.nick); // Affiche : « Laurence »

seb.nick = 'Bastien';
alert(seb.nick);

let PersonArray = [
    new Person('Sébastien', 23, 'm', 'aîné', 'Développeur', []),
    new Person('Laurence', 19, 'f ', 'soeur', 'Sous-officier', []),
    new Person('Ludovic', 9, 'm', 'frère', 'Etudiant', []),
    new Person('Pauline', 16, 'f ', 'cousine', 'Etudiante', []),
    new Person('Guillaume', 16, 'm', 'cousin', 'Dessinateur', []),
];

seb.friends.push(new Person('Johann', 19, 'm', 'aîné', 'Développeur', []));
seb.friends.push(new Person('Bob', 20, 'm', 'aîné', 'Développeur', []));

alert(seb.friends[0].nick);

seb.addFriend('Willy', 19, 'm', 'benjamin', 'barman', [])

document.write(seb.friends[2].nick);