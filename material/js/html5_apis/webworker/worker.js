var count = 0;

setInterval(function() {
  count = count + 1;
  postMessage(count);
}, 500)
