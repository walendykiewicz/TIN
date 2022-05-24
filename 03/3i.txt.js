function Student(imie, nazwisko, numerId, ocenyArray){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.numerId = numerId;
    this.ocenyArray = ocenyArray;

    this.average = arr => arr.reduce((a,b) => a + b, 0) / arr.length

    this.getInfo = function(){
        console.log(`${this.imie} ${this.nazwisko} ${this.average(this.ocenyArray)}`);
    }
}

let student1 = new Student("Adam", "Blonski", "325", [1, 2, 3, 4, 5]);
student1.getInfo();