
const fruits = () => { //Solo va a imprimir el VAR dado que el scope es global.
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi"
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

const fruits = () => { //LET y CONST deben estar dentro del bloque para que funcionen
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();

//Con let
let x = 1; //Por fuera muestra 1
{
    let x = 2; //Bloque, muestra 2
    console.log(x);
}
console.log(x);

//Con var
var x = 1; //Aunque se declara con 1, 
{
    var x = 2; //Bloque, muestra 2
    console.log(x);
}
console.log(x); //Muestra 2 debido a que se reasignó la variable VAR

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();