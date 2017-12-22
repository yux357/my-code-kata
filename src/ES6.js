class Animal{

    constructor(props){

        this.legs = props.legs;

        this.eyes = props.eyes;

        this.head = props.head;

        this.fingles = props.fingles;

    }
}

class Cat extends Animal{

    constructor(props){

        super(props);

        this.ears = props.ears;

        this.name = props.name;
    }
}

let myCat = new Cat({
    legs : 4,
    eyes : 2,
    head : 1,
    fingles : 10,
    ears : 2,
    name : 'little white'
})

let [a,b,c] = [1,2];

console.log(`${a}. I have a cat who name is ${myCat.name},it has ${myCat.ears} ears and ${myCat.fingles} fingles
${b}. waiting
${c}. none`);