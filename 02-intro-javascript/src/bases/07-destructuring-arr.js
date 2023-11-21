const person =['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = person;

console.log(p3);


const returnArr = () => {
    return ['ABC', 123]
}
const [ words, numbers] = returnArr();
console.log(words, numbers);


const useState = (values) => {
    return [values, ()=>{console.log('Hi everyone');
    }]
}

const [nameP, setNameP] = useState('Goku');
console.log(nameP);
setNameP();

