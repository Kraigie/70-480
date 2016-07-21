//http://api.jquery.com/jQuery.ajax/

function getData() {
    $.ajax("http://rest-service.guides.spring.io/greeting", {
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

$('#btn').click(getData);