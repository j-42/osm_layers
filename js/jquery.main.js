jQuery(function() {
	initMap();
});

//  init
function initMap() {

  // ---------------------------------- DEFINE MAP & PARAMETERS ----------------------------------> //
  var htc_map = L.map('htc_map', {
      center: [46.227638, 2.213749],
      zoom: 5,
      preferCanvas: false, // ?
      attributionControl:false, // Show/hide Attibution
      layer:[streetTile, satelliteTile],
      scrollWheelZoom: true
  });
  // <--------------------------------- DEFINE MAP & PARAMETERS ----------------------------------- //





  // ---------------------------------- AVAILABLE STYLING - [Here Mapbox] ----------------------------------> //

  // DEFINE LAYERS

  // Define Street Layer
  var streetTile = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets', // 'mapbox.streets', mapbox.satellite
    accessToken: 'pk.eyJ1IjoiamFzbWluZW5mIiwiYSI6ImNqOHg2dG0ycTFieGkyeHBla2ZydDRkc28ifQ.wfN3P0HstWmmmTIY_lDYgQ'
  })
  // Add Layer to the initial Map
  streetTile.addTo(htc_map);

  // Define Satelite Layer
  var satelliteTile = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite', // 'mapbox.streets', mapbox.satellite
    accessToken: 'pk.eyJ1IjoiamFzbWluZW5mIiwiYSI6ImNqOHg2dG0ycTFieGkyeHBla2ZydDRkc28ifQ.wfN3P0HstWmmmTIY_lDYgQ'
  })
  // Add layer to the Map
  // satelliteTile.addTo(htc_map); // not activated in order to display street view first


  // DEFINE LAYERS OBJECT
  var baseLayers = {
    "Carte routière" : streetTile,
    "Carte satellite" : satelliteTile
  }
  // ADD LAYERS CONTROLER
  L.control.layers(baseLayers).addTo(htc_map);



  /* OTHER STYLINGS
    https://docs.mapbox.com/api/maps/#mapbox-styles
    [streets, outdoors, light, dark, satellite, satellite-streets, navigation-preview-day, navigation-preview-night, navigation-guidance-day, navigation-guidance-night]
  */

//  <---------------------------------- AVAILABLE STYLING - [Here Mapbox] ---------------------------------- //



// --------------------------------------------- HTC LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

  // Add a marker
  var markerHTCParis = L.marker([48.873090, 2.301130]);//.addTo(htc_map);

  // Bind Popup
  markerHTCParis.bindPopup("<address><b>HTC Paris</b><br>2 rue Lord Byron<br>75008 Paris</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCLyon = L.marker([45.769110, 4.807160]);//.addTo(htc_map);
  // Bind Popup
  markerHTCLyon.bindPopup("<address><b>HTC Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCSaintHerblain = L.marker([47.242580, -1.609090]);//.addTo(htc_map);
  // Bind Popup
  markerHTCSaintHerblain.bindPopup("<address><b>HTC Saint Herblain</b><br>8 avenue des Thébaudières<br>44800 Saint-Herblain</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCTours = L.marker([47.384120, 0.682680]);//.addTo(htc_map);
  // Bind Popup
  markerHTCTours.bindPopup("<address><b>HTC Tours</b><br>30 rue Lakanal<br>37000 Tours</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCLille = L.marker([50.631860, 3.092960]);//.addTo(htc_map);
  // Bind Popup
  markerHTCLille.bindPopup("<address><b>HTC Lille</b><br>2 rue Lord Byron<br>59000 Lille</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCMarseille = L.marker([43.289101, 5.357910]);//.addTo(htc_map);
  // Bind Popup
  markerHTCMarseille.bindPopup("<address><b>HTC Marseille</b><br>97 avenue de la Corse<br>13007 Marseille</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCBordeaux = L.marker([44.862470, -0.553930]);//.addTo(htc_map);
  // Bind Popup
  markerHTCBordeaux.bindPopup("<address><b>HTC Bordeaux</b><br>Hangar G2, quai Armand Lalande<br>33300 Bordeaux</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCDijon = L.marker([47.322048, 5.041480]);//.addTo(htc_map);
  // Bind Popup
  markerHTCDijon.bindPopup("<address><b>HTC Dijon</b></address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCNancy = L.marker([48.689380, 6.178340]);//.addTo(htc_map);
  // Bind Popup
  markerHTCNancy.bindPopup("<address><b>HTC Nancy</b><br>59 rue Pierre Sémard<br>54000 Nancy</address><a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // DEFINE LAYER GROUP
  var htcLayer = L.layerGroup([markerHTCParis, markerHTCLyon, markerHTCSaintHerblain, markerHTCTours, markerHTCLille, markerHTCMarseille, markerHTCBordeaux, markerHTCDijon, markerHTCNancy]);//.addTo(htc_map);


// <--------------------------------------------- HTC LAYER ------------------------------------------------- //




// --------------------------------------------- ALTEM LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

  // Add a marker
  var markerAltemParis = L.marker([48.873090, 2.301130]);//.addTo(htc_map);
  // Bind Popup
  markerAltemParis.bindPopup("<address><b>ALTEM Paris</b><br>2 rue Lord Byron<br>75008 Paris</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemLyon = L.marker([45.7691, 4.807160000000067]);//.addTo(htc_map);
  // Bind Popup
  markerAltemLyon.bindPopup("<address><b>ALTEM Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemSaintHerblain = L.marker([45.7691, 4.807160000000067]);//.addTo(htc_map);
  // Bind Popup
  markerAltemSaintHerblain.bindPopup("<address><b>ALTEM Saint-Herblain</b><br>8 avenue des Thébaudières<br>44800 Saint-Herblain</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemTours = L.marker([47.382547, 0.682217]);//.addTo(htc_map);
  // Bind Popup
  markerAltemTours.bindPopup("<address><b>ALTEM Tours</b><br>30 rue Lakanal<br>37000 Tours</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemLille = L.marker([50.6203, 3.075309999999945]);//.addTo(htc_map);
  // Bind Popup
  markerAltemLille.bindPopup("<address><b>ALTEM Lille</b><br>53/55 rue Jean Jaurès<br>59000 Lille</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemMarseille = L.marker([43.2891, 5.357909999999947]);//.addTo(htc_map);
  // Bind Popup
  markerAltemMarseille.bindPopup("<address><b>ALTEM Marseille</b><br>97 avenue de la Corse<br>13007 Marseille</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	var markerAltemDijon = L.marker([47.3215806, 5.0414701]);//.addTo(htc_map);
  // Bind Popup
  markerAltemDijon.bindPopup("<address><b>ALTEM Dijon</b></address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	var markerAltemNancy = L.marker([48.6894, 6.178339999999935]);//.addTo(htc_map);
  // Bind Popup
  markerAltemNancy.bindPopup("<address><b>ALTEM Nancy</b><br>59 rue Pierre Sémard<br>59000 Nancy</address><a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

  // DEFINE LAYER GROUP
  var altemLayer = L.layerGroup([markerAltemParis, markerAltemLyon, markerAltemSaintHerblain, markerAltemTours, markerAltemLille, markerAltemMarseille, markerAltemDijon, markerAltemNancy]);//.addTo(htc_map);


// <--------------------------------------------- ALTEM LAYER ------------------------------------------------- //






// --------------------------------------------- ERESE LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

	var markerEreseNancy = L.marker([48.6894, 6.178339999999935]);//.addTo(htc_map);
  // Bind Popup
  markerEreseNancy.bindPopup("<address><b>ERESE Nancy</b><br>59 rue Pierre Sémard<br>59000 Nancy</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	var markerEreseParis = L.marker([48.8730876, 2.3011426]);//.addTo(htc_map);
  // Bind Popup
  markerEreseParis.bindPopup("<address><b>ERESE Paris</b><br>2 Rue Lord Byron<br>59000 Paris</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	// Add a marker
  var markerEreseLyon = L.marker([45.7691, 4.807160000000067]);//.addTo(htc_map);
  // Bind Popup
  markerEreseLyon.bindPopup("<address><b>ERESE Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	// Add a marker
  var markerEreseSaintHerblain = L.marker([45.7691, 4.807160000000067]);//.addTo(htc_map);
  // Bind Popup
  markerEreseSaintHerblain.bindPopup("<address><b>ERESE Saint-Herblain</b><br>8 avenue des Thébaudières<br>44800 Saint-Herblain</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	// Add a marker
  var markerEreseTours = L.marker([47.382547, 0.682217]);//.addTo(htc_map);
  // Bind Popup
  markerEreseTours.bindPopup("<address><b>ERESE Tours</b><br>30 rue Lakanal<br>37000 Tours</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	// Add a marker
  var markerEreseLille = L.marker([50.6203, 3.075309999999945]);//.addTo(htc_map);
  // Bind Popup
  markerEreseLille.bindPopup("<address><b>ERESE Lille</b><br>53/55 rue Jean Jaurès<br>59000 Lille</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	// Add a marker
  var markerEreseMarseille = L.marker([43.2891, 5.357909999999947]);//.addTo(htc_map);
  // Bind Popup
  markerEreseMarseille.bindPopup("<address><b>ERESE Marseille</b><br>97 avenue de la Corse<br>13007 Marseille</address><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	var markerEreseDijon = L.marker([47.3215806, 5.0414701]);//.addTo(htc_map);
  // Bind Popup
  markerEreseDijon.bindPopup("<address><b>ERESE Dijon</b></address><a href='tel:+330491139465'>0491139465</a><br><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");

	var markerEreseToulouse = L.marker([43.5948, 1.464460000000031]);//.addTo(htc_map);
	// Bind Popup
	markerEreseToulouse.bindPopup("<address><b>ERESE Toulouse</b></address><a href='tel:+330491139465'>0491139465</a><br><a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr/a>");


	// DEFINE LAYER GROUP
  var ereseLayer = L.layerGroup([markerAltemNancy, markerEreseParis, markerEreseLyon, markerEreseSaintHerblain, markerEreseTours, markerEreseLille, markerEreseMarseille, markerEreseDijon, markerEreseToulouse]);//.addTo(htc_map);


// <--------------------------------------------- ERESE LAYER ------------------------------------------------- //




// --------------------------------------------- APROMO LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

	var markerApromoSaintLo = L.marker([49.1123, -1.0840600000000222]);//.addTo(htc_map);
  // Bind Popup
  markerApromoSaintLo.bindPopup("<address><b>APROMO Saint Lô</b><br>14 rue Emile Enault<br>50000 Saint Lô</address><a href='tel:+330233726262'>0233726262</a><br><a href='mailto:contact@apromo.fr'>contact@apromo.fr/a>");

	var markerApromoCaen = L.marker([49.1775, -0.3590920000000324]);//.addTo(htc_map);
  // Bind Popup
  markerApromoCaen.bindPopup("<address><b>APROMO Caen</b><br>5 rue Arhur Le Duc<br>14000 Caen</address><a href='tel:+330233726262'>0233726262</a><br><a href='mailto:contact@apromo.fr'>contact@apromo.fr/a>");

	// DEFINE LAYER GROUP
  var apromoLayer = L.layerGroup([markerApromoSaintLo, markerApromoCaen]);//.addTo(htc_map);

// <--------------------------------------------- APROMO LAYER ------------------------------------------------- //





// --------------------------------------------- EOHS LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

	// Add a marker
	var markerEohsLyon = L.marker([45.7691, 4.807160000000067]);//.addTo(htc_map);
	// Bind Popup
	markerEohsLyon.bindPopup("<address><b>EOHS Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><a href='tel:+330472856730'>0472856730</a><br><a href='mailto:contact@eohs.fr'>contact@eohs.fr/a>");

	// DEFINE LAYER GROUP
  var eohsLayer = L.layerGroup([markerApromoSaintLo]);//.addTo(htc_map);

// <--------------------------------------------- EOHS LAYER ------------------------------------------------- //





// ------------------------------------------------ EVENTS -------------------------------------------------> //

  $('.buttonContainer > div').each(function(){
    $(this).on('click', function(e) {

      // Toggle active
      $(this).toggleClass("active");

      // Get Layer name from button ID
      var layerToDisplay = $(this).attr('id') + "Layer";
      console.log("typeOf layerToDisplay: " + typeof(layerToDisplay));
      console.log("layerToDisplay: " +layerToDisplay);

      e.preventDefault();

      if($(this).hasClass('active')){
        htc_map.addLayer(eval(layerToDisplay));
      } else {
        htc_map.removeLayer(eval(layerToDisplay));
      }
    });
  });


/*
  $('#htc').click(function(){
    htc_map.addLayer(htcLayer);
  });
  $('#altem').click(function(){
    htc_map.removeLayer(htcLayer);
  });
*/
// <--------------------------------------------- EVENTS ------------------------------------------------- //


} // <- INIT




/* EVENTS
baselayerchange	LayersControlEvent	Fired when the base layer is changed through the layer control.
overlayadd 	LayersControlEvent	Fired when an overlay is selected through the layer control.
overlayremove 	LayersControlEvent	Fired when an overlay is deselected through the layer control.
layeradd 	LayerEvent	Fired when a new layer is added to the map.
layerremove 	LayerEvent	Fired when some layer is removed from the map
*/

/* METHODS
addLayer(<Layer> layer) this
removeLayer(<Layer> layer)  this
*/
