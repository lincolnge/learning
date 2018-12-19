class AvalueAndBvalue {
    constructor(avalue, bvalue) {
        this.avalue = avalue;
        this.bvalue = bvalue;
    }
    getAvalue() {
        return this.avalue;
    }
    getBvalue() {
        return this.bvalue;
    }
}
const abc = [{ 1: [{ a: 1 }, { b: 2 }] }];
console.log('abc', abc);
const h1 = [{
        name: '12',
        skill: '22',
    }];
const h2 = [1, 2, 3];
const h3 = [1, 2, 3];
console.log('h1', h1);
console.log('h2', h2);
console.log('h3', h3);
class HeroService {
    constructor() {
        this.heroes = [
            { name: 'Superman', skill: 'fly' },
            { name: 'Spiderman', skill: 'spider-sense' },
            { name: 'Batman', skill: 'superhuman power' },
            { name: 'Flash', skill: 'run' },
        ];
    }
    getHero(name, skill) {
        if (name instanceof AvalueAndBvalue) {
            const localName = name.getAvalue();
            const localSkill = name.getBvalue();
            return this.getHero(localName, localSkill);
        }
        if (!skill) {
            return this.heroes.find((hero) => hero.name === name);
        }
        return this.heroes.find((hero) => hero.name === name && hero.skill === skill);
    }
}
const hs = new HeroService();
console.log(hs.getHero('Batman'));
console.log(hs.getHero('123'));
console.log(hs.getHero('Flash', 'run'));
const avalueAndBvalue = new AvalueAndBvalue('Superman', 'fly');
console.log(hs.getHero(avalueAndBvalue));
