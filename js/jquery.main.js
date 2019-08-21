jQuery(function() {
	initMap();
});

//  init
function initMap() {

  // ---------------------------------- DEFINE MAP & PARAMETERS ----------------------------------> //
  var htc_map = L.map('htc_map', {
      center: [46.227638, 2.213749],
      zoom: 6,
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
    id: 'mapbox.light', // 'mapbox.streets', mapbox.satellite   [streets, outdoors, light, markerAltem, satellite]
    accessToken: 'pk.eyJ1IjoiamFzbWluZW5mIiwiYSI6ImNqOHg2dG0ycTFieGkyeHBla2ZydDRkc28ifQ.wfN3P0HstWmmmTIY_lDYgQ'
  })
  // Add Layer to the initial Map
  streetTile.addTo(htc_map);

  // Define Satelite Layer
  var satelliteTile = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.satellite', // 'mapbox.streets', mapbox.satellite  [streets, outdoors, light, dark, satellite]
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


  // DEFINE MARKERS OBJECTS
	var markerHtc = L.icon({
		iconUrl: '../images/marker_htc.png',
		iconSize:     [30, 33.6], // size of the icon
		shadowSize:   [25, 32], // size of the shadow
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
	});
	var markerAltem = L.icon({
		iconUrl: '../images/marker_altem.png',
		iconSize:     [30, 33.6], // size of the icon
		shadowSize:   [25, 32], // size of the shadow
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
	});
	var markerErese = L.icon({
		iconUrl: '../images/marker_erese.png',
		iconSize:     [30, 33.6], // size of the icon
		shadowSize:   [25, 32], // size of the shadow
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
	});
	var markerApromo = L.icon({
		iconUrl: '../images/marker_apromo.png',
		iconSize:     [30, 33.6], // size of the icon
		shadowSize:   [25, 32], // size of the shadow
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
	});
	var markerEohs = L.icon({
		iconUrl: '../images/marker_eohs.png',
		iconSize:     [30, 33.6], // size of the icon
		shadowSize:   [25, 32], // size of the shadow
		shadowAnchor: [4, 62],  // the same for the shadow
		popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
	});


//  <---------------------------------- AVAILABLE STYLING - [Here Mapbox] ---------------------------------- //



// --------------------------------------------- HTC LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

  // Add a marker
  var markerHTCParis = L.marker([48.873090, 2.301130],{icon: markerHtc});//.addTo(htc_map);

  // Bind Popup
  markerHTCParis.bindPopup("<address><b>HTC Paris</b><br>2 rue Lord Byron<br>75008 Paris</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCLyon = L.marker([45.769110, 4.807160],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCLyon.bindPopup("<address><b>HTC Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCSaintHerblain = L.marker([47.242580, -1.609090],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCSaintHerblain.bindPopup("<address><b>HTC Saint Herblain</b><br>8 avenue des Thébaudières<br>44800 Saint-Herblain</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCTours = L.marker([47.384120, 0.682680],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCTours.bindPopup("<address><b>HTC Tours</b><br>30 rue Lakanal<br>37000 Tours</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCLille = L.marker([50.631860, 3.092960],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCLille.bindPopup("<address><b>HTC Lille</b><br>2 rue Lord Byron<br>59000 Lille</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCMarseille = L.marker([43.289101, 5.357910],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCMarseille.bindPopup("<address><b>HTC Marseille</b><br>97 avenue de la Corse<br>13007 Marseille</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCBordeaux = L.marker([44.862470, -0.553930],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCBordeaux.bindPopup("<address><b>HTC Bordeaux</b><br>Hangar G2, quai Armand Lalande<br>33300 Bordeaux</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCDijon = L.marker([47.322048, 5.041480],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCDijon.bindPopup("<address><b>HTC Dijon</b></address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // Add a marker
  var markerHTCNancy = L.marker([48.689380, 6.178340],{icon: markerHtc});//.addTo(htc_map);
  // Bind Popup
  markerHTCNancy.bindPopup("<address><b>HTC Nancy</b><br>59 rue Pierre Sémard<br>54000 Nancy</address><br>Téléphone : <a href='tel:+330140757840'>0140757840</a><br><a href='mailto:contact@habitat-territoires.com'>contact@habitat-territoires.com</a>");

  // DEFINE LAYER GROUP
  var htcLayer = L.layerGroup([markerHTCParis, markerHTCLyon, markerHTCSaintHerblain, markerHTCTours, markerHTCLille, markerHTCMarseille, markerHTCBordeaux, markerHTCDijon, markerHTCNancy]);//.addTo(htc_map);


// <--------------------------------------------- HTC LAYER ------------------------------------------------- //




// --------------------------------------------- ALTEM LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

  // Add a marker
  var markerAltemParis = L.marker([48.873090, 2.301130],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemParis.bindPopup("<address><b>ALTEM Paris</b><br>2 rue Lord Byron<br>75008 Paris</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemLyon = L.marker([45.7691, 4.807160000000067],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemLyon.bindPopup("<address><b>ALTEM Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemSaintHerblain = L.marker([47.2428, -1.6077400000000353],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemSaintHerblain.bindPopup("<address><b>ALTEM Saint-Herblain</b><br>8 avenue des Thébaudières<br>44800 Saint-Herblain</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemTours = L.marker([47.382547, 0.682217],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemTours.bindPopup("<address><b>ALTEM Tours</b><br>30 rue Lakanal<br>37000 Tours</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemLille = L.marker([50.6203, 3.075309999999945],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemLille.bindPopup("<address><b>ALTEM Lille</b><br>53/55 rue Jean Jaurès<br>59000 Lille</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	// Add a marker
  var markerAltemMarseille = L.marker([43.2891, 5.357909999999947],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemMarseille.bindPopup("<address><b>ALTEM Marseille</b><br>97 avenue de la Corse<br>13007 Marseille</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	var markerAltemDijon = L.marker([47.3215806, 5.0414701],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemDijon.bindPopup("<address><b>ALTEM Dijon</b></address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

	var markerAltemNancy = L.marker([48.6894, 6.178339999999935],{icon: markerAltem});//.addTo(htc_map);
  // Bind Popup
  markerAltemNancy.bindPopup("<address><b>ALTEM Nancy</b><br>59 rue Pierre Sémard<br>59000 Nancy</address><br>Téléphone : <a href='tel:+330491139465'>0491139465</a><br><a href='mailto:contact@altem-conseil.com'>contact@altem-conseil.com</a>");

  // DEFINE LAYER GROUP
  var altemLayer = L.layerGroup([markerAltemParis, markerAltemLyon, markerAltemSaintHerblain, markerAltemTours, markerAltemLille, markerAltemMarseille, markerAltemDijon, markerAltemNancy]);//.addTo(htc_map);


// <--------------------------------------------- ALTEM LAYER ------------------------------------------------- //






// --------------------------------------------- ERESE LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

	var markerEreseNancy = L.marker([48.6894, 6.178339999999935],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseNancy.bindPopup("<address><b>ERESE Nancy</b><br>59 rue Pierre Sémard<br>59000 Nancy</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	var markerEreseParis = L.marker([48.8730876, 2.3011426],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseParis.bindPopup("<address><b>ERESE Paris</b><br>2 Rue Lord Byron<br>59000 Paris</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	// Add a marker
  var markerEreseLyon = L.marker([45.7691, 4.807160000000067],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseLyon.bindPopup("<address><b>ERESE Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	// Add a marker
  var markerEreseSaintHerblain = L.marker([47.2463712, -1.6045511],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseSaintHerblain.bindPopup("<address><b>ERESE Saint-Herblain</b><br>8 avenue des Thébaudières<br>44800 Saint-Herblain</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	// Add a marker
  var markerEreseTours = L.marker([47.382547, 0.682217],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseTours.bindPopup("<address><b>ERESE Tours</b><br>30 rue Lakanal<br>37000 Tours</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	// Add a marker
  var markerEreseLille = L.marker([50.6203, 3.075309999999945],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseLille.bindPopup("<address><b>ERESE Lille</b><br>53/55 rue Jean Jaurès<br>59000 Lille</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	// Add a marker
  var markerEreseMarseille = L.marker([43.2891, 5.357909999999947],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseMarseille.bindPopup("<address><b>ERESE Marseille</b><br>97 avenue de la Corse<br>13007 Marseille</address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	var markerEreseDijon = L.marker([47.3215806, 5.0414701],{icon: markerErese});//.addTo(htc_map);
  // Bind Popup
  markerEreseDijon.bindPopup("<address><b>ERESE Dijon</b></address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");

	var markerEreseToulouse = L.marker([43.5948, 1.464460000000031],{icon: markerErese});//.addTo(htc_map);
	// Bind Popup
	markerEreseToulouse.bindPopup("<address><b>ERESE Toulouse</b><br>104 rue Jean Rieux </address><br>Téléphone : <a href='tel:+330140755210'>0140755210</a><br><a href='mailto:contact@erese.fr'>contact@erese.fr</a>");


	// DEFINE LAYER GROUP
  var ereseLayer = L.layerGroup([markerEreseNancy, markerEreseParis, markerEreseLyon, markerEreseSaintHerblain, markerEreseTours, markerEreseLille, markerEreseMarseille, markerEreseDijon, markerEreseToulouse]);//.addTo(htc_map);


// <--------------------------------------------- ERESE LAYER ------------------------------------------------- //




// --------------------------------------------- APROMO LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

	var markerApromoSaintLo = L.marker([49.1123, -1.0840600000000222],{icon: markerApromo});//.addTo(htc_map);
  // Bind Popup
  markerApromoSaintLo.bindPopup("<address><b>APROMO Saint Lô</b><br>14 rue Emile Enault<br>50000 Saint Lô</address><br>Téléphone : <a href='tel:+330233726262'>0233726262</a><br><a href='mailto:contact@apromo.fr'>contact@apromo.fr</a>");

	var markerApromoCaen = L.marker([49.1775, -0.3590920000000324],{icon: markerApromo});//.addTo(htc_map);
  // Bind Popup
  markerApromoCaen.bindPopup("<address><b>APROMO Caen</b><br>5 rue Arhur Le Duc<br>14000 Caen</address><br>Téléphone : <a href='tel:+330233726262'>0233726262</a><br><a href='mailto:contact@apromo.fr'>contact@apromo.fr</a>");

	// DEFINE LAYER GROUP
  var apromoLayer = L.layerGroup([markerApromoSaintLo, markerApromoCaen]);//.addTo(htc_map);

// <--------------------------------------------- APROMO LAYER ------------------------------------------------- //





// --------------------------------------------- EOHS LAYER -------------------------------------------------> //

  // DEFINE MARKERS & ASSOCIATED POPUPS

	// Add a marker
	var markerEohsLyon = L.marker([45.7691, 4.807160000000067],{icon: markerEohs});//.addTo(htc_map);
	// Bind Popup
	markerEohsLyon.bindPopup("<address><b>EOHS Lyon</b><br>26 avenue René Cassin<br>69007 Lyon</address><br>Téléphone : <a href='tel:+330472856730'>0472856730</a><br><a href='mailto:contact@eohs.fr'>contact@eohs.fr</a>");

	// DEFINE LAYER GROUP
  var eohsLayer = L.layerGroup([markerEohsLyon]);//.addTo(htc_map);

// <--------------------------------------------- EOHS LAYER ------------------------------------------------- //





// ------------------------------------------------ EVENTS -------------------------------------------------> //

  $('.buttonContainer > div').each(function(){
    $(this).on('click', function(e) {

      // Toggle active
      $(this).toggleClass("active");

      // Get Layer name from button ID
      var layerToDisplay = $(this).attr('id') + "Layer";

      e.preventDefault();

      if($(this).hasClass('active')){
        htc_map.addLayer(eval(layerToDisplay));
      } else {
        htc_map.removeLayer(eval(layerToDisplay));
      }
    });
  });

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
