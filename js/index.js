// Masalalar
// forEach metodiga oid masalalar
// masala 1
// let numbers =[2,5,8,9,6,3,1,4,7];
// function kvadrat(arr){
//     let res=arr.forEach(function(value){
//         console.log(value*2);
//     })
//     return res;
// }
// console.log(kvadrat(numbers))

// masala 2
// const words = ['apple', 'banana', 'cherry'];
// function undefontss(arr){
//     arr.forEach(function(value){
//             console.log(value.toUpperCase())
//     })
//     return arr;
// }
// console.log(undefontss(words))

// masala 3
// let numbers =[2,5,8,9,6,3,1,4,7];
// function gain (arr, arr1){
//     arr1=arr.forEach(function(value){
//         console.log(value+5)
//     })
//     return arr1;
// }
// console.log(gain(numbers))


// masala 4     111111111111111111111111111111111111111111111111111111111111111111111111111111111111
// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78}
//   ];
//  let res=students.forEach(function(value){
//     console.log(value.name, value.grade)
//  })
//  console.log(res)


// Map metodiga oid masalalar
// masala 1
// let numbers =[2,5,8,9,6,3,1,4,7];
// function gain (arr, arr1){
//     arr1=arr.map(function(value){
//        return value*2;
//     })
//     return arr1;
// }
// console.log(gain(numbers))


// masala 2
// const words = ['apple', 'banana', 'cherry'];
// function undefontss(arr, arr1){
//     arr1=arr.map(function(value){
//             return value.toUpperCase()
//     })
//     return arr1;
// }
// console.log(undefontss(words))


// masala 3
// let numbers =[2,5,8,9,6,3,1,4,7];
// function gain (arr, arr1){
//     arr1=arr.map(function(value){
//        return value+5;
//     })
//     return arr1;
// }
// console.log(gain(numbers))


// masala 4
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// const students = [
//         {name: 'Ali', grade: 85},
//         {name: 'Vali', grade: 92},
//         {name: 'Hasan', grade: 78}
//       ];
//      let res=students.map(function(value){
//         console.log(value.name, value.grade+10)
//      })
//      console.log(res)
// filter metodiga oid masalalar

// masala 1
// let numbers =[2,5,8,9,6,3,1,4,7];
// function gain (arr, arr1){
//     arr1=arr.filter(function(value){
//        return value%2==0;
//     })
//     return arr1;
// }
// console.log(gain(numbers))


// masala 2
// const words = ['apple', 'banana', 'cherry', 'olcha','dolana'];
// function undefontss(arr, arr1){
//     arr1=arr.filter(function(value){
//             return value.length>5
//     })
//     return arr1;
// }
// console.log(undefontss(words))


// masala 3
// const ages = [12, 17, 18, 19, 21];
// function age (arr,arr1){
//     arr1=arr.filter(function(value){
//         return value>18;
//     })
//     return arr1;
// }
// console.log(age(ages))


// masala 4
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];

//      let res=students.filter(function(value){
//         return value.name, value.grade>80  
//      })
//      console.log(res)

// find metodiga oid masalalar
// masala 1
// const numbers = [4, 9, 11, 2, 18];
// function number(arr,arr1){
//     arr1=arr.find(function(value){
//         return value>10;
//     })
// return arr1;
// }
// console.log(number(numbers))

// masala 2
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const students = [
//     {name: 'Ali', grade: 80},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];

//      let res=students.find(function(value){
//         return value.name, value.grade>85  
//      })
//      console.log(res)

// some/every metodiga oid masalalar
// masala 1
// const numbers = [4, 9, 11, 2, -78, -9, 18];
// function musbat (arr){
//     return arr.some(function(value){return value>0})
// }

// console.log(musbat(numbers))


// masala 2
// const words = ['cat', 'dog', 'elephant'];
// function word (arr){
//     return arr.some(function(value){
//         return value.length>5;
//     })

// }
// console.log(word(words))


// masala 3
// const numbers = [4, 9, 11, 2, 8, 9, 18];
// function musbat (arr){
//     return arr.every(function(value)
//     {return value>0})
// }

// console.log(musbat(numbers))

// masala 4
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];

//      let res=students.every(function(value){
//         return value.name, value.grade>50
//      })
//      console.log(res)

// String metodlariga oid masalalar
// masala 1
// let ar = 'hello'
// function third (arr){
//     let res= arr.charAt(3)
//     return res
// }
// console.log(third(ar))

// masala 2
// let ar = 'hello'
// function third (arr){
//     let res= arr.charCodeAt(1)
//     return res
// }
// console.log(third(ar))

// masala 3
// let ar = 'hello'
// let a = 'world'
// function third (arr,arr1){
//     let res= arr.concat(arr1)
//     return res
// }
// console.log(third(ar,a))

// masala 4
// let ar = 'hello world'
// let a = 'wo'
// function third (arr,arr1){
//     let res= arr.includes(arr1)
//     return res
// }
// console.log(third(ar,a))

// masala 5
// let ar = 'hello world'
// let a = 'rld'
// function third (arr,arr1){
//     let res= arr.endsWith(arr1)
//     return res
// }
// console.log(third(ar,a))

// masala 6
// let ar = 'hello world'
// let a = 'wo'
// function third (arr,arr1){
//     let res= arr.indexOf(arr1)
//     return res
// }
// console.log(third(ar,a))

// masala 7
// let ar = 'hello world world'
// let a = 'wo'
// function third (arr,arr1){
//     let res= arr.lastIndexOf(arr1)
//     return res
// }
// console.log(third(ar,a))


// masala 9
// let ar = 'hello world'
// function third (arr){
//     let res= arr.repeat(11)
//     return res
// }
// console.log(third(ar))

// masala 10
// let ar = 'hello world'
// let a = 'wo'
// function third (arr){
//     let res= arr.replace('hello','chokolo')
//     return res
// }
// console.log(third(ar))

// masala 11
// let ar = 'hello world'
// let a = 'wo'
// function third (arr,arr1){
//     let res= arr.search(arr1)
//     return res
// }
// console.log(third(ar,a))

// masala 12
// let ar = 'hello world'
// function third (arr){
//     let res= arr.slice(5,12)
//     return res
// }
// console.log(third(ar))


// masala 13
// let ar = 'hello world'
// function third (arr){
//     let res= arr.split(' ')
//     return res
// }
// console.log(third(ar))

// masala 14
// let ar = 'hello world'
// let a = 'h'
// function third (arr,arr1){
//     let res= arr.startsWith(arr1)
//     return res
// }
// console.log(third(ar,a))

// masala 15
// let ar = 'hello world'
// function third (arr){
//     let res= arr.substr(5,9)
//     return res
// }
// console.log(third(ar))


// masala 16
// let ar = 'hello world'
// function third (arr){
//     let res= arr.substring(5,9)
//     return res
// }
// console.log(third(ar))

// masala 17
// let ar = 'Hello World'
// function third (arr){
//     let res= arr.toLowerCase()
//     return res
// }
// console.log(third(ar))

// masala 18
// let ar = 'Hello World'
// function third (arr){
//     let res= arr.toUpperCase()
//     return res
// }
// console.log(third(ar))

// masala 19
// let ar = ' Hello World'
// function third (arr){
//     let res= arr.trim()
//     return res
// }
// console.log(third(ar))

// masala 20
// let ar = ' Hello World '
// function third (arr){
//     let res= arr.trimStart().trimEnd()
//     return res
// }
// console.log(third(ar))