const sayHi = function (firstName){
    return `Hi, ${firstName}`;
}
 //sayHi = 9;

 const sayHi2 = firstName => `Hi, ${firstName}`;


console.log(sayHi('Sandra'));
console.log(sayHi2('Sebas'));

const getUser = () => {
    return {
        uid: 'ASDAS',
        username: 'Elfede'
    }
}

const getUser2 = () => ({
        uid: 'QWEQWEQW',
        username: 'Elfede2'
});

console.log(getUser());
console.log(getUser2());


function getActiveUser(firtsName){
    return{
        uid: 'ASDF',
        username: firtsName
    }
};

const userActive = getActiveUser('Fernando');
console.log(userActive);


///

const getActiveUser2 = firstName => ({
    uid: 'ASDF',
    username: firstName
})

const userActive2 = getActiveUser2('Diego');
console.log(userActive2);
