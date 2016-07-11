var socket = new WebSocket('ws://echo.websocket.org');

socket.onopen = function(event) {
    console.log('Opened : ' + event.currentTarget.url);
};

socket.onerror = function(err) {
  console.log('Err: ' + err);
};

socket.onmessage = function(event) {
    console.log('Received: ' + JSON.stringify(event.data));
}

socket.onclose = function(event) {
    console.log('Socket was closed');
}

function sendData() {
    if(socket.readyState !== 3) {
        console.log('Sending: ' + $('#input').val());
        socket.send($('#input').val());
    } else {
        console.log('Socket is not open');
    }
}

function close() {
    socket.close();
}

$('#btn').click(sendData);
$('#btnc').click(close);