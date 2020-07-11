class Animal {

    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }

    run(speed){
        this.speed = speed
        console.log(`${this.name} berlari dengan kecapatan ${this.speed} km/s.`)
    }
}

class Burung extends Animal {
    constructor(name, speed, color) {
        super(name, speed);
        this.color = color;
    }

    fly(){
        console.log(`${this.name} terbang!`)
    }

    run(){
        console.log(`${this.name} tidak bisa berjalan`)
    }

}

let beo = new Burung("Beo", "100", "Merah")
console.log(beo)
beo.run(100)
beo.fly()