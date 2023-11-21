const person ={
    firstName: 'Sandra',
    lastName: 'Tul',
    age: 38,
    address: {
        city: 'Quito',
        zip: 5465465456,
        lat: 14.3232,
        lng: 34.9254
    }
}

//console.table(person);
const person2 = {...person};
person2.firstName = 'Rocio';
console.log(person);
console.log(person2);

