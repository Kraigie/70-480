$('#localbtn').click(() => {
  var key = $('#localinputkey').val();
  var data = $('#localinput').val();
  localStorage[key] = data;
});

$('#sessionbtn').click(() => {
  var key = $('#sessioninputkey').val();
  var data = $('#sessioninput').val();
  sessionStorage[key] = data;
});

$('#clear').click(() => {
  localStorage.clear();
  sessionStorage.clear();
});

$('#print').click(() => {
  console.clear();
  console.log('local');
  for(let prop in localStorage) {
    console.log(`${prop} : ${localStorage[prop]}`);
  }

  console.log('session');
  for(let prop in sessionStorage) {
    console.log(`${prop} : ${sessionStorage[prop]}`);
  }
});
