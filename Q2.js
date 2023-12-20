// Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color
    }

    getRadius(){
        return this.radius
    }

    setRadius(data){
        return this.radius = data
    }

    getColor(){
        return this.color
    }

    setColor(data){
        return this.color
    }

    toString(){
        return `Radius : ${this.radius} Color : ${this.color}`
    }

    getArea(){
        return (Math.PI)*(this.radius**2)
    }

    getCircumference(){
        return 2*(Math.PI)*(this.radius)
    }
}

let circle1 = new Circle()
console.log(circle1)

let circle2 = new Circle(4)
console.log(circle2)

let circle3 = new Circle(4.0,"red")
console.log(circle3)

console.log(circle3.getRadius())

console.log(circle3.setRadius(2))

console.log(circle3.getColor())

console.log(circle3.setColor("blue"))

console.log(circle3.toString())

console.log(circle3.getArea())

console.log(circle3.getCircumference())