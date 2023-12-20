// Write a “person” class to hold all the details.

class Person{
    constructor(name,Age,Height,Weight,Country,State){
        this.name = name;
        this.Age = Age;
        this.Height = Height;
        this.Weight = Weight;
        this.County = Country;
        this.State = State;
    }
    
    Hello(){
        console.log(`Hi ${this.name}`)
    }

    Thanks() {
        console.log(`Thank You ${this.name}`);
    }
}

let Person1 = new Person("RAJA RAMANATHAN",24,"180cm","80kg","INDIA","TAMIL NADU")
console.log(Person1)

Person1.Hello()
Person1.Thanks()