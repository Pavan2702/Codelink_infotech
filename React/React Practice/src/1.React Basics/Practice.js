
let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*---------------Get value by index by simple function ------------------*/

function findindexByVal(i) {
  return console.log(`index of ${i} value is`, Array[i])
}
findindexByVal(7)

/*---------------Get value by index by Arrow function ------------------*/

const findIndexOfVal = (i) => {
  return (console.log(`index of ${i} value is`, Array[i]))
}
findIndexOfVal(9)

/*----------------Print every elemrnt by map function------------------*/

let everyEle = Array.map((e) => (
  e
))
console.log("🚀 ~ everyEle:", everyEle)

/*----------------Print every elemrnt by for loop------------------*/

for (let index = 0; index < Array.length; index++) {
  const element = Array[index];
  console.log("🚀 ~ element:", element)
}

/*----------------Changle value of index------------------*/

let changeVal = Array.splice(6, 1, 100)
console.log("🚀 ~ changeVal:", Array)

/*----------------Print Value till element not grater then 100------------------*/

const printValueTill = (value) => {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] == value) {
      break;
    }
    console.log(`Print Value till element not grater then ${value}`, Array[i]);
  }
}
printValueTill(100)

/*----------------add 1 in every element of an array------------------*/

let addValue = Array.map((e) => {
  return e + 1
})
console.log(" addArr:", addValue)

/*----------------add 0 in start of array------------------*/

const AddValue = (a) => {
  Array.unshift(a)
  console.log("🚀 ~ unshift in array:", Array)
}
AddValue(0)

/*----------------add 99 in end of array------------------*/

Array.push(99)
console.log("🚀 ~ Push in Array:", Array)

/*----------------remove 1 element from start of  array------------------*/

Array.shift()
console.log("🚀 ~ shift in Array:", Array)

/*----------------remove 1 element from end of array------------------*/

Array.pop()
console.log("🚀 ~ Pop in Array:", Array)

/*----------------do sum of all value of an array with use of reduce and for-loop------------------*/

function totalSum() {
  let total = 0;
  for (let i = 0; i < Array.length; i++) {
    total += Array[i];
  }
  return total;
}
console.log('Total of array by for loop: ', totalSum(Array));

/*----------------------------Reducer------------------------------*/

var result = Array.reduce((sum, item) => sum + item, 0);
console.log("🚀 ~ result:", result)

/*----------------------------sort a array in acending decending------------------------------*/

const Sorting = () => {
  let SortArr = Array.sort((a, b) => a - b)
  return SortArr
}
console.log("🚀 ~ SortArr:", Sorting())

/*----------------------------reverce an array with use of method------------------------------*/

function Reverse() {
  Array.reverse()
  return Array
}
console.log("🚀 ~ Array:", Reverse())

/*---------------------------- reverce an array with use of for-loop------------------------------*/

function ReverseArray() {
  let reversed_array = []
  for (var i = 0; i < Array.length; i++) {
    reversed_array[i] = Array[Array.length - i - 1];
  }
  return reversed_array;
}
console.log("🚀 ~ reversed_array:", ReverseArray())


// ___________________________________________________________________________________

let Arr = [1, 2, 3, 6, 7, 9, 3, 56, 8]

/*----------------------------value which can devided by 2------------------------------*/

for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] % 2 == 0) {
    console.log("🚀 ~ value which can devided by 2:", Arr[i])
  }
}

/*----------------------------give all value above 3 by use of filter------------------------------*/

let FillArr = Arr.filter((e) => {
  return e > 3
})
console.log("🚀 ~ FillArr:", FillArr)

/*----------------------------give index of 56------------------------------*/

let FindArr = Arr.findIndex((e) => {
  return e == 56
})
console.log("🚀 ~ FindArr:", FindArr)


let check = Arr.map((e) => {
  return e == 7
})
console.log("🚀 ~ check:", check)

// ___________________________________________________________________________________

// 1. ['i','am', 'pavan'] ==> to ['pavan','am','i']

let str = ['i', 'am', 'pavan']

/*----------------------------Revres a string by loop------------------------------*/

let reversed_String = []
for (let i = str.length - 1; i >= 0; i--) {
  reversed_String.push(str[i]);
}
console.log("🚀 ~ reversed_String:", reversed_String)

/*----------------------------//Revres a string by map------------------------------*/

let reversed_String_1 = str.map((str) => {
  return str;
}).reverse();

console.log("🚀 ~ reversed_String_1:", reversed_String_1)

/*----------------------------"i am pavan" without use join method------------------------------*/

let ToString = str.toString().replace(/\,/g, " ")
console.log("🚀 ~ ToString:", ToString)

// ___________________________________________________________________________________

// task-4

// ['i','am', 'pavan'] ==> to ['navap','ma','i']

// by use of loop

let Name = ['i', 'am', 'pavan']

for (let i = Name.length - 1; i >= 0; i--) {
  let revName = Name[i].split(" ")
  for (let i = revName.length - 1; i >= 0; i--) {
    let Arr = revName[i].split("").reverse().join("").split(" ")
    console.log("🚀 ~ Arr:", Arr)
  }
}