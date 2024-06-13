google.maps.event.addDomListener(window, 'load', init);


function init() {
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        center: new google.maps.LatLng(39.161578, -0.241947),
        styles: [	{		"featureType":"landscape",		"stylers":[			{				"hue":"#F1FF00"			},			{				"saturation":-27.4			},			{				"lightness":9.4			},			{				"gamma":1			}		]	},	{		"featureType":"road.highway",		"stylers":[			{				"hue":"#0099FF"			},			{				"saturation":-20			},			{				"lightness":36.4			},			{				"gamma":1			}		]	},	{		"featureType":"road.arterial",		"stylers":[			{				"hue":"#00FF4F"			},			{				"saturation":0			},			{				"lightness":0			},			{				"gamma":1			}		]	},	{		"featureType":"road.local",		"stylers":[			{				"hue":"#FFB300"			},			{				"saturation":-38			},			{				"lightness":11.2			},			{				"gamma":1			}		]	},	{		"featureType":"water",		"stylers":[			{				"hue":"#00B6FF"			},			{				"saturation":4.2			},			{				"lightness":-63.4			},			{				"gamma":1			}		]	},	{		"featureType":"poi",		"stylers":[			{				"hue":"#9FFF00"			},			{				"saturation":0			},			{				"lightness":0			},			{				"gamma":1			}		]	}]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = 'www.cullera-apartment.com/resources/images/marker.png';
    var address = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<div id="bodyContent">'+
    '<p><b>Cullera Apartment</b></p>'+
    '<p>Av. Alacant, 13, 46400 Cullera, Valencia, Spain</p>'
    '</div>'+
    '</div>';
    var infowindow = new google.maps.InfoWindow({
  content: address
  });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.160966,-0.241952),
        icon: image,
        map: map,
        title: 'Cullera Apartment'
    });
    infowindow.open(map,marker);
};
