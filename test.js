// const person = {
//     fName : 's',
//     lName: 'Tarun',
//     age: 26,
//     address: {
//         dno: '5-26',
//         street: 'middle street',
//         state: 'AP'
//     },
//     phn: '8008040948'

// }
// const family = [
//     {
//         name: 'teja',
//         age: 29,
//         hobbies: ['car','bike']
//     },
//     {
//         name: 'Sampath',
//         age: 58,
//         hobbies: ['phn','TV']
//     },
//     {
//         name: 'Suhasini',
//         age: 50,
//         hobbies: ['cook','god']
//     }
// ]

// // for(let i in person){
// //     console.log(i, person[i])
// //     for(let j in person.address){
// //         console.log(j, person.address[j])
// //     }
// // }
// family.forEach(i=>{
//     console.log(i)
// })
// // const mapCheck = family.map(function(i){
// //     return i.name
// // })
// // console.log(mapCheck)
// //console.log(person)

let num = new Set();
    num.add(3)
    num.add(4)
    num.add(5)
    num.add(6)
    num.add(3)

num.forEach((element,i,num) => {
    console.log(element,i,num);
    
});
