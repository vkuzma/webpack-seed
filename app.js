class Animal {
    constructor() {
        console.log('Animal');
    }

    walk() {
        console.log('walking');
    }
}

class Tiger extends Animal {
    walk() {
        console.log('walking like a Tiger');
    }
}

var animal = new Animal();

var tiger = new Tiger();
