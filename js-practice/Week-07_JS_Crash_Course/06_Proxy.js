const user = {
    name: "Sanidhya",
    age: 40,
    password: "123"
}

// new Proxy(target, handler : Object)

const proxyUser = new Proxy(user, {
    get(target, prop) {
        // console.log("prop", prop);
        // console.log("target", target[prop]);
        if (prop === "password") throw new Error("Access Denied for this property")
        return target[prop]
    },

    set(target, prop, user) {

    }
})

// Target in get is nothing but the object we are target to add proxy on it and prop is the property of the proxy we are trying to access

// console.log("ProxyUser : ", proxyUser.password);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop)
            if (index < 0) {
                return target[target.length + index]
            }
            return target[prop]
        },
        set(target, prop, value) {
            const index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
            } else {
                target[index] = value
            }
            return true
        }
    })
}

const negativeIndexArr = negativeIndex(arr)
console.log(negativeIndexArr[-2])
negativeIndexArr[-2] = 100
console.log(negativeIndexArr); // same
console.log(arr); // same result for both 52 and 53

//! WHY we use new keyword for initialising proxy in js