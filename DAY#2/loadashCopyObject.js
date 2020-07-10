let _ = require('lodash')

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

// true - Shallow copy with Spread
user2 = Object.assign({}, user)
let userCopyWithSpread = {...user, name: {...user.name}}
userCopyWithSpread.name = "Karin"
console.log(userCopyWithSpread)

// true -- Shallow copy (same reference)
let shallowCopyWithLodashClone = _.clone(user)
shallowCopyWithLodashClone.name.firstName = "Lodash Shallow Clone"
shallowCopyWithLodashClone.name.lastName = "Last Shallow Clone"
console.log(shallowCopyWithLodashClone)

// true -- deep copy (different reference)
let shallowCopyWithLodashCloneDeep = _.cloneDeep(user)
shallowCopyWithLodashCloneDeep.name.firstName = "Lodash Deep Clone"
shallowCopyWithLodashCloneDeep.name.lastName = "Last Deep Clone"
console.log(shallowCopyWithLodashCloneDeep)


// true - deep copy with JSON.parse
let userCopy = JSON.parse(JSON.stringify(user))
userCopy.name.firstName = "JSON Parse"
console.log(userCopy)