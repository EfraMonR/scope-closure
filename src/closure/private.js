
const person = () => {
    var saveName = "Name";
    return {
        getName: () => { //Retorna el valor que se encuentra en saveName
            return saveName;
        },
        setName: (name) => { //Espera que se asigne un valor
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Efra");
console.log(newPerson.getName());