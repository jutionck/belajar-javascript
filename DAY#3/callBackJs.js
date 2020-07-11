class App {

    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }

    callFirstName = callBack => {
        setTimeout(() =>{
            callBack("Jution")
        })
    }

    callLastName = () => {
        setTimeout(() => {
            return "Candra"
        })
    }


}
