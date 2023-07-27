var osm = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  map = L.map('map', {

    sleep: true,
    sleepTime: 750,
    wakeTime: 750,
    sleepNote: true,
    sleepNoteStyle: {
      color: '#5680e9'
    },
    hoverToWake: true,
    sleepOpacity: .8

  }).setView([50.0386, 22.0042], 13).addLayer(L.tileLayer(osm));

L.marker([50.0386, 22.0042]).addTo(map)
  .openPopup();