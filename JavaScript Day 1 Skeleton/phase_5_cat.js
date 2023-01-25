function Cat(name, owner, store){
    this.name = name
    this.owner = owner
    this.store = store  
}

Cat.prototype.cuteStatement = function() {
    console.log(`Everybody loves ${this.name}!`)
}

Cat.prototype.meow = function() {
    console.log(`${this.name} meows`)
}
const nalgene = new Cat('Nalgene', 'Daniel', 'The Wild')

nalgene.meow = function() {
    console.log(`${this.name} meows loudly`)
}

const whiskers = new Cat('Whiskers', 'Jasmine', 'PetCo')
const bean = new Cat('Bean', 'Stephen', 'Kitty Mill')

whiskers.cuteStatement();

nalgene.meow()
bean.meow()