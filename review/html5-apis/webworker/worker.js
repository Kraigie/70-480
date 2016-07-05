let count = 0;

setInterval(() => {
  count = count + 1;
  postMessage(count);
}, 500)
