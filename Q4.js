// write a class to calculate the uber price.

class Ride {
    constructor(Distance){
        this.KM = Distance
    }

    PriceCalculator(){
        let KM = this.KM;
        let baseFare = 150
        let PerKM = 20
        if(KM <= 5){
            console.log(baseFare,'rs')
        }else{
            let KMS = KM - 5
            console.log(KMS*PerKM + baseFare)
        }
    }
}

let Ride1 = new Ride(100)

Ride1.PriceCalculator()