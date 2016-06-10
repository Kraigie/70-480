function geoSupport() {
  return 'geolocation' in navigator;
}

function showLocation(lat, lon) {
  document.getElementById('lat').innerHTML = `Lat: ${lat}`;
  document.getElementById('lon').innerHTML = `Lon: ${lon}`;
}

if(geoSupport()) {
  navigator.geolocation.getCurrentPosition(position => {
    showLocation(position.coords.latitude, position.coords.longitude);
  });
}
