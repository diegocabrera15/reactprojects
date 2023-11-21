const firstName = 'Fernando';
const lastName = 'Cabrera';

//const fullName = firstName + ' ' + lastName;
const fullName = `${firstName} ${lastName}`

console.log(fullName);


function getWave(firstName){
    return 'Hi thats all ' + firstName;
}

console.log(`This is a text: ${getWave(firstName)}`);
