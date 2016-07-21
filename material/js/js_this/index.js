function doSomething() {
    this.style.color = 'red';
}

function doSomething2(test) {
    test.style.color = 'red';
}

test = document.getElementById('test');
test.onclick = doSomething;