/*
   FILTER
   -Cria um novo array,a apartir do array percorrido (array original)
   -Cria um novo array APENAS com os elementos filtrados
   -Aceita 3 parametros
     - item do array
     -index
     -array completo

*/

const numbers = [1,2,3,4,5,];
const newNumbers = numbers.filter(function(number){
    return number >1

})


const clients =[
    {
        name:"Jader",
        age: 15,       
    },
    {
        name: "Aline",
        age:19,
    },
    {
        name:"Pedro",
        age:43,
    },

];

const newCliets = clients.filter(function(client,index,array){
    //console.log(index)
    //console.log(array)
    return client.age <18

})

console.log(newCliets)