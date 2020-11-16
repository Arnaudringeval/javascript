let number = 0;
//number = number + 1; // incrémentation
number ++;
alert(number); //affiche 1

number = -1; //décrémentation
number --;
alert(number); // affiche 0

let number_1 = 0;
let number_2 = 0;
number_1++;
// number = number + 1;
++number_2;
// 1 + number_2 = number_2;
alert(number_1); // affiche 1
alert(number_2); // affiche 1

let number = 0;
let output = ++number;
alert(number); //affiche 1
alert(output); //affiche 1

let number = 0;
let output = number++;
alert(number); //affiche 1
alert(output); //affiche 0

let number = 0;
while(number < 10)
{
    number ++;
}
alert(number); // affiche 10

do
{
    instruction1;
    instruction2;
    instruction3;
}
while(condition)

//for(initialisation; condition; incrémentation)
//{
//    instruction1;
//    instruction2;
//    instruction3;
//}

for(let iter = 0; iter < 10 ;iter++)
{
    alert("itération n°" + iter);
}

function myfunction(arguments)
    //le code que la fonction exécute est entre acolade
{

}

function showMsg()
{
    alert("C'est une première fonction.");
}

showMsg(); //on exécute le code de la fonction showMsg

let msg = "Hello world!";

function sayHello()
{
    alert(msg);
}

sayHello();

let var1 = 2, var2 = 3; // 2 variables globales
function calculate()
{
    alert(var1 * var2) // affiche le résultat
}

calculate();

function calculate()
{
    let var1 = 2, var2 = 3; // variables locales
    alert(var1 * var2);
}

calculate();
alert(var1); //affiche null

function myfunction(arg)
    
{//le code que la fonction exécute est entre acolade
    alert("l'argument est :" + arg)
}
myfunction("C'est bien un argument")

function calculate(var1, var2)
{
    alert(var1 * var2)
}

calculate(2,3);

let number_1, number_2;
number_1 = parseInt(prompt("1er nombre : "));
number_2 = parseInt(prompt("2éme nombre : "));
calculate(number_1,number_2);

//function sayHello()

let sayHello = (function()
{
    //fonction anonyme
    return "Hello World"
});
alert(sayHello); // affiche Hello world!

