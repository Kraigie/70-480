$( document ).ready(function() {
  let worker = new Worker('worker.js');

  worker.onmessage = function(e) {
    $('.count').append(e.data + '\n');
  }
});
