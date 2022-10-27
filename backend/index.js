import Dragon from './dragon.js'; 
import Generation from './generation.js';

const generation = new Generation();

const fooey = new Dragon({
    birthdate: new Date(),
    nickname: 'fooey'
});

const baloo = new Dragon({
    birthdate: new Date(), 
    nickname: 'baloo',
    traits: [{
        traitType: 'backgroundColor',
        traitValue: 'green'
    }]
});

const mimar1 = generation.newDragon();
const mimar2 = generation.newDragon();

// console.log('fooey', fooey);
// console.log('baloo', baloo);
console.log('mimar1', mimar1);
console.log('mimar2', mimar2);