// import {heroes} from './data/heroes';

import { heroes } from './data/heroes';

const getHerorebyId = id => {
    return heroes.find( idHeroes => {
        if (id === parseInt(idHeroes.id)){
            return true;
        }else{
            return false;
        }
    })
}
console.log(getHerorebyId(1));

const getHeroreById2 = id => {
    return heroes.find( idHeroes =>  id === parseInt(idHeroes.id) ? true : false   )
}
console.log(getHeroreById2(2));

