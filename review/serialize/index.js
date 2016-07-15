function showValues() {
    var str = $( "form" ).serialize();
    $( "#results" ).text( str );
}

$( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
$( "select, input" ).on( "change", showValues );
showValues();

function mySubmit() {
    console.log($(this).serialize());

    //form.onsubmit not called when form is submitted via code
    //document.getElementById("form").submit();
}

$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( $( this ).serialize() );
});