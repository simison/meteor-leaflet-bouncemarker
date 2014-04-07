Package.describe({
  summary: "Bounce animations for Leaflet markers."
});

Package.on_use(function (api) {
  api.use('leaflet', 'client');

  api.add_files('lib/leaflet.bouncemarker/bouncemarker.js', 'client');
});