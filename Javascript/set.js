// Create Array
const mySet = new Set()

// Add value in Array
mySet.add("a")
mySet.add("b")
mySet.add("c")

// check value is or isn't
console.log(mySet.has(3))

// Array in set
let arr = [1,2,3,4,1,11,2,3,8,9,5]

const arrSet = new Set(arr)

// convert object to array
const setArr = Array.from(arrSet)
console.log("🚀 ~ setArr:", setArr)

// delete value
arrSet.delete(11)
console.log(arrSet)

const value = arrSet.values()
console.log("🚀 ~ value:", value)

let text = "";
for (const x of arrSet.values()) {
    text += x;
}
console.log("🚀 ~ text:", text)
