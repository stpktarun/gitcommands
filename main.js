const todos = [
    {
        id: 1,
        text: 'gym',
        isDone: true
    },
    {
        id: 2,
        text: 'JS',
        isDone: true
    },
    {
        id: 3,
        text: 'Pickelball',
        isDone: false
    }
];
// for(let i of todos) {
//     console.log(i)
// }

const completed = todos.filter(function(i){
    return i.isDone === true
}).map(function (i){
    return i.text
})
console.log(completed)