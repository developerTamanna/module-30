

// object er key  ber kore ana
const person ={
    name:'sathi',
    roll: 4532,
    country: 'BD'
};
const result = (Object.keys(person));
// console.log(result);


// next object er value  ber kore ana

const product = {
    name:'leptop',
    brand:'dell',
    price:50000,
    color:'black',
}
const productValue = (Object.values(product));
// console.log(productValue)




// next sobgolo ke access korte cayle

const phone = {
    name:'iphone',
    brand:'apple',
    price:50000,
    color:'black',
}
const phoneArray = (Object.entries(phone));
// console.log(phoneArray)


// noton property jok korte

const mobile = {
    name:'iPhone',
    brand:'Apple',
    price:50000,
    color:'black',
}
 mobile.company ='America';
// console.log(mobile)

// next: cayna r noton property jof hok

const watch = {
    name:'Touch',
    brand:'GLAss',
    price:50000,
    color:'Purple',
}

Object.seal(watch);
// cayle value change kora jai jemon
// watch.price = 40000
watch.price =40000;
 watch.company ='BD';
// console.log(watch);



// next: amon akta use korbo jeno property o jog na kore jay abr jno value o change kora na jay


// start:


const fruits = {
    name:'orange',
    location:'PorboBAzar',
    price:'400 tk kilo',
    color:'orange',
}

Object.freeze(fruits);
fruits.company='fruits company';
fruits.price = '200 tk kilo'
console.log(fruits)