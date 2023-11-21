//Desestructuracion


const person = {
    firstName: 'Sandra',
    age: 45,
    password: '12312',
    rango: 'Soldado'
}
console.log(person.firstName);
console.log(person.age);
console.log(person.password);

console.log('**************************');

const { firstName, age, password } = person;
console.log(firstName);
console.log(age);
console.log(password);

console.log('**************************');

const returnPerson = ({ firstName, age, password }) =>{
    console.log(firstName);
    console.log(age);
    console.log(password);
}

returnPerson(person)

console.log('**************************');
const useContext = ({ firstName, age, password, rango = 'Razo' }) =>{
    return {
        passwordName: password,
        age2: age,
        latlng: {
            lat: 14.2365,
            lng: -12.6598
        }
    }
}

const {passwordName, age2, latlng: { lat, lng} } = useContext(person);
console.log(passwordName, age2);
console.log( lat, lng);

