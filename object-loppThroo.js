const person ={
    name:'mona',
    age: 16,
    clg:'polytechnic'
}
const result =[];
// console.log(person['name'])
for(let key in person){
    // console.log(key + ': ' +person[key])

    result.push(`key: ${key} value: ${person [key]}`)
    
}
// console.log(result)

const man ={
    name:'rona',
    age: 30,
    clg:'dhakaPolytechnic'
};
for(let [key, value] of Object.entries(man)){
    console.log(`key: ${key} value: ${value}`)
}