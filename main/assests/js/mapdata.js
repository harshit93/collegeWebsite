var CU_simplemaps_worldmap_mapdata = {
	locations:{ 
		0: {
				name: 'Oklahoma',
				lat: 35.467560, 
				lng: -97.516428,
				description: 'Study finds wastewater injection induces Oklahoma earthquakes <a class="tip-link" href="http://news.cornell.edu/stories/2014/07/wastewater-injection-induces-oklahoma-earthquakes">Read More</a>',
				color: 'default',
				url: '',
				size: 'default'
			},
	

		1: {
				name: "Beijing, China",
				lat: 39.999667, 
				lng: 116.326444,
				description: 'Johnson to offer bilingual MBAs with Tsinghua University <a class="tip-link" href="http://news.cornell.edu/stories/2014/06/johnson-offer-bilingual-mbas-chinese-university">Read More</a>',
				color: 'default',
				url: '',
				size: 'default'
			},
		
		2: {
				name: 'Harford, New York',
				lat: 42.426184,
				lng: -76.226598, 
				description: 'Campus visit inspires international farmers <a class="tip-link" href="http://www.news.cornell.edu/stories/2014/07/campus-visit-inspires-international-farmers">Read More</a>',
				color: 'default',
				url: '',
				size: 'default'
			},
		
		3: {
				name: "Etosha National Park, Namibia",
				lat: -18.855591, 
				lng: 16.329320,
				description: 'Study helps prevent rhino deaths during relocation <a class="tip-link" href="http://news.cornell.edu/stories/2014/08/study-helps-prevent-rhino-deaths-during-relocation">Read More</a>',
				color: 'default',
				url: '',
				size: 'default'
			},	
				
		4: {
				name: "Northern Australia",
				lat: -13.092293, 
				lng: 132.393766,
				description: 'Undergrads study behavioral ecology of red-backed fairywrens <a class="tip-link" href="http://www.cornell.edu/video/studying-red-backed-fairywrens-in-australia">Read More</a>',
				color: 'default',
				url: '',
				size: 'default'
			}				
	} 
}


var simplemaps_worldmap_mapdata = {

	main_settings:{
		//General settings
		width: 'responsive',
		background_color: '#ffffff',	
		background_transparent: 'yes',
		label_color: '#d5ddec',		
		border_color: '#444444',
		pop_ups: 'on_click', //on_click, on_hover, detect, off
	
		//Country defaults
		state_description:   'Country description',
		state_color: '#444444',
		state_hover_color: '#444444',
		state_url: 'http://simplemaps.com',
		all_states_inactive: 'yes',
		
		//Location defaults
		location_description:  'Location description',
		location_color: '#b31b1b',
		location_opacity: 1,
		location_url: 'http://www.cornell.edu/',
		location_size: 35,
		location_type: 'circle', //or circle
		all_locations_inactive: 'no',
		
		//Advanced settings - safe to ignore these
		div: 'footerMap',
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		border_size: 0,
		popup_color: '#b31b1b',
		popup_opacity: 1,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'yes',		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no',
		all_states_zoomable: 'no',
		auto_load: 'no',
		zoom: 'yes',
		js_hooks: 'yes',
		url_new_tab: 'no'  		
	},

	state_specific:{	
	},
	
	regions:{ 
	},

	locations:{ 
		0: {
				name: 'Palmyra Atoll, North Pacific',
				lat: 5.8811111, 
				lng: -162.07250009,
				description: 'Research provides insights into marine disease and climate <a class="tip-link" href="http://news.cornell.edu/stories/2013/08/study-offers-insight-marine-disease-and-climate">Read More</a>',
				color: 'default',
				url: '',
				size: 'default'
			}
	} 

}	//end of simplemaps_worldmap_mapdata


