function Person(a, h, g, c) {
    var age = a;
    var height = h;
    var gender = g;
    c = c;  //this works

    this.getInfo = function() { //'this' is important as it's what allows the method to be called
        return `${age}, ${height}, ${gender}`;
    }

    getAge = function() { //will return the last created instance of age, when we make a new object it overwrites the getAge functions to return that objects age
        return age;
    }

    function getHeight() { //can only be used locally
        return height;
    }

    this.getC = function() {
        return c;
    }
}

function Person2(a,h,g) {
    this.age = a;
    this.height = h;
    this.gender = g;
}

Person.prototype.getInfo = function() {
    return `${this.age}, ${this.height}, ${this.gender}`;
}

