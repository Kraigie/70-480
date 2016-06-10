function geoSupport() {
  return 'geolocation' in navigator;
}

function showLocation(lat, lon, date) {
  document.getElementById('lat').innerHTML = `Lat: ${lat}`;
  document.getElementById('lon').innerHTML = `Lon: ${lon}`;

  var ret = new Date(date).toLocaleString();
  document.getElementById('date').innerHTML = `Date: ${ret}`;
}

if(geoSupport()) {
  navigator.geolocation.getCurrentPosition(position => {
    showLocation(position.coords.latitude, position.coords.longitude, position.timestamp);
  });
}
