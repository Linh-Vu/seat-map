export const config = {
	viewportSelector: '.svg-pan-zoom_viewport',
	panEnabled: true,
	controlIconsEnabled: false,
	zoomEnabled: true,
	dblClickZoomEnabled: false,
	mouseWheelZoomEnabled: true,
	preventMouseEventsDefault: true,
	zoomScaleSensitivity: 0.2,
	minZoom: 0.5,
	maxZoom: 10,
	fit: true,
	contain: false,
	center: true,
	refreshRate: 'auto',
	beforeZoom: function(){},
	onZoom: function(){},
	beforePan: function(){},
	onPan: function(){},
	onUpdatedCTM: function(){},
	eventsListenerElement: null
};

export const controlId = 'seat-map';
