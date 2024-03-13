
interface MapS<T> {
    [key: string]: T;
}

interface MapI<T> {
    [key: number]: T;
}
interface Hero {
    name: string;
    skill: string;
}

class AvalueAndBvalue {

    private avalue: string;
    private bvalue: string;

    constructor(avalue: string, bvalue: string) {
        this.avalue = avalue;
        this.bvalue = bvalue;
    }

    public getAvalue() {
        return this.avalue;
    }

    public getBvalue() {
        return this.bvalue;
    }
}

const abc: MapI<MapS<any>[]>[] = [{ 1: [{ a: 1 }, { b: 2 }] }];
console.log('abc', abc);


const h1: Hero[] = [{
    name: '12',
    skill: '22',
}];

const h2: Array<any> = [1, 2, 3];
const h3: any[] = [1, 2, 3];

console.log('h1', h1);
console.log('h2', h2);
console.log('h3', h3);

class HeroService {
    private heroes: Hero[] = [
        { name: 'Superman', skill: 'fly' },
        { name: 'Spiderman', skill: 'spider-sense' },
        { name: 'Batman', skill: 'superhuman power' },
        { name: 'Flash', skill: 'run' },
    ];

    public getHero(name: string): Hero;
    public getHero(name: string, skill?: string): Hero;
    public getHero(avalueAndBvalue: AvalueAndBvalue): Hero;
    public getHero(name: string | AvalueAndBvalue, skill?: string): Hero {
        if (name instanceof AvalueAndBvalue) {
            const localName = name.getAvalue();
            const localSkill = name.getBvalue();
            return this.getHero(localName, localSkill);
        }
        if (!skill) {
            return this.heroes.find((hero: Hero) => hero.name === name);
        }
        return this.heroes.find((hero: Hero) => hero.name === name && hero.skill === skill);
    }
}

const hs = new HeroService();
console.log(hs.getHero('Batman'));
console.log(hs.getHero('123'));
console.log(hs.getHero('Flash', 'run'));
const avalueAndBvalue = new AvalueAndBvalue('Superman', 'fly');
console.log(hs.getHero(avalueAndBvalue));

