let user = {
    name: {
        firstName: "Jution",
        lastName: "Kirana"
    }
}

let action1 = {canWalk: true}
let action2 = {canSpeak: true}

Object.assign(user, action1, action2)
console.log(user)

let userCopyWithSpread = user
console.log(userCopyWithSpread === user)

let userCopy = JSON.parse(JSON.stringify(user))

userCopy.name.firstName = "Candra"

console.log(userCopy)

console.log(userCopy === user)