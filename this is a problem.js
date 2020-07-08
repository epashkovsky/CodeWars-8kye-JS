function Name(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = `${first} ${last}` ;
}

var n = new Name('John', 'Doe');

console.log(n)