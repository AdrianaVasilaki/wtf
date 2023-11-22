var wms_layers = [];

var lyr_crete_raster_egsa87_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "crete_raster_egsa87",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/crete_raster_egsa87_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2595171.066113, 4121502.211277, 2959920.220381, 4301994.788650]
                            })
                        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_CLIPPED_EXTEND_RASTER_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "CLIPPED_EXTEND_RASTER",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CLIPPED_EXTEND_RASTER_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2766355.923545, 4161860.470352, 2782200.693445, 4173314.410873]
                            })
                        });
var lyr_Clippedextent_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (extent)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedextent_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2766349.845376, 4161860.327955, 2782193.376325, 4173315.085472]
                            })
                        });
var lyr_clipedmap_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "cliped map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/clipedmap_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2766349.845432, 4161860.327941, 2782193.376360, 4173315.085522]
                            })
                        });
var format_GEOLOGICALFORMATIONS_5 = new ol.format.GeoJSON();
var features_GEOLOGICALFORMATIONS_5 = format_GEOLOGICALFORMATIONS_5.readFeatures(json_GEOLOGICALFORMATIONS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGICALFORMATIONS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGICALFORMATIONS_5.addFeatures(features_GEOLOGICALFORMATIONS_5);
var lyr_GEOLOGICALFORMATIONS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GEOLOGICALFORMATIONS_5, 
                style: style_GEOLOGICALFORMATIONS_5,
                interactive: true,
    title: 'GEOLOGICAL FORMATIONS<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_0.png" /> al<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_1.png" /> ft<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_2.png" /> gn<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_3.png" /> Jsfl2<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_4.png" /> M3C<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_5.png" /> M4k<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_6.png" /> PcE3k<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_7.png" /> Pl-Pt<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_8.png" /> Pli<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_9.png" /> Q<br />\
    <img src="styles/legend/GEOLOGICALFORMATIONS_5_10.png" /> <br />'
        });
var format_collars_Downhole_lithology_6 = new ol.format.GeoJSON();
var features_collars_Downhole_lithology_6 = format_collars_Downhole_lithology_6.readFeatures(json_collars_Downhole_lithology_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_Downhole_lithology_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_Downhole_lithology_6.addFeatures(features_collars_Downhole_lithology_6);
var lyr_collars_Downhole_lithology_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_collars_Downhole_lithology_6, 
                style: style_collars_Downhole_lithology_6,
                interactive: true,
    title: 'collars_Downhole_lithology<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_0.png" /> clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_1.png" /> clayey gravels<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_2.png" /> clayey sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_3.png" /> conglomerate<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_4.png" /> flysch<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_5.png" /> gravelly clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_6.png" /> gravelly sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_7.png" /> gravels<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_8.png" /> limestone<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_9.png" /> marl<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_10.png" /> sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_11.png" /> sandstone<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_12.png" /> sandy clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_13.png" /> sandy gravels<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_14.png" /> sandy marl<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_15.png" /> silt<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_16.png" /> silty clay<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_17.png" /> silty sand<br />\
    <img src="styles/legend/collars_Downhole_lithology_6_18.png" /> <br />'
        });
var format_collars_Desurvey_7 = new ol.format.GeoJSON();
var features_collars_Desurvey_7 = format_collars_Desurvey_7.readFeatures(json_collars_Desurvey_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_Desurvey_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_Desurvey_7.addFeatures(features_collars_Desurvey_7);
var lyr_collars_Desurvey_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_collars_Desurvey_7, 
                style: style_collars_Desurvey_7,
                interactive: true,
                title: '<img src="styles/legend/collars_Desurvey_7.png" /> collars_Desurvey'
            });
var format_collars_3D_8 = new ol.format.GeoJSON();
var features_collars_3D_8 = format_collars_3D_8.readFeatures(json_collars_3D_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_3D_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_3D_8.addFeatures(features_collars_3D_8);
var lyr_collars_3D_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_collars_3D_8, 
                style: style_collars_3D_8,
                interactive: true,
                title: '<img src="styles/legend/collars_3D_8.png" /> collars_3D'
            });
var format_collars_9 = new ol.format.GeoJSON();
var features_collars_9 = format_collars_9.readFeatures(json_collars_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_collars_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_collars_9.addFeatures(features_collars_9);
var lyr_collars_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_collars_9, 
                style: style_collars_9,
                interactive: true,
                title: '<img src="styles/legend/collars_9.png" /> collars'
            });

lyr_crete_raster_egsa87_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_CLIPPED_EXTEND_RASTER_2.setVisible(true);lyr_Clippedextent_3.setVisible(true);lyr_clipedmap_4.setVisible(true);lyr_GEOLOGICALFORMATIONS_5.setVisible(true);lyr_collars_Downhole_lithology_6.setVisible(true);lyr_collars_Desurvey_7.setVisible(true);lyr_collars_3D_8.setVisible(true);lyr_collars_9.setVisible(true);
var layersList = [lyr_crete_raster_egsa87_0,lyr_OpenStreetMap_1,lyr_CLIPPED_EXTEND_RASTER_2,lyr_Clippedextent_3,lyr_clipedmap_4,lyr_GEOLOGICALFORMATIONS_5,lyr_collars_Downhole_lithology_6,lyr_collars_Desurvey_7,lyr_collars_3D_8,lyr_collars_9];
lyr_GEOLOGICALFORMATIONS_5.set('fieldAliases', {'id': 'id', 'Geology': 'Geology', 'Symbolism': 'Symbolism', });
lyr_collars_Downhole_lithology_6.set('fieldAliases', {'fid': 'fid', 'HoleID': 'HoleID', 'DepthFrom': 'DepthFrom', 'DepthTo': 'DepthTo', 'Lithology': 'Lithology', '_From_x': '_From_x', '_From_y': '_From_y', '_From_z': '_From_z', '_To_x': '_To_x', '_To_y': '_To_y', '_To_z': '_To_z', '_Mid_x': '_Mid_x', '_Mid_y': '_Mid_y', '_Mid_z': '_Mid_z', });
lyr_collars_Desurvey_7.set('fieldAliases', {'fid': 'fid', 'CollarID': 'CollarID', 'SegLength': 'SegLength', });
lyr_collars_3D_8.set('fieldAliases', {'fid': 'fid', 'HoleID': 'HoleID', 'DepthFrom': 'DepthFrom', 'DepthTo': 'DepthTo', 'Easting': 'Easting', 'Northing': 'Northing', 'elevation': 'elevation', 'Azimuth': 'Azimuth', 'Dip': 'Dip', 'EOH': 'EOH', });
lyr_collars_9.set('fieldAliases', {'HoleID': 'HoleID', 'DepthFrom': 'DepthFrom', 'DepthTo': 'DepthTo', 'Easting': 'Easting', 'Northing': 'Northing', 'elevation': 'elevation', 'Azimuth': 'Azimuth', 'Dip': 'Dip', 'EOH': 'EOH', });
lyr_GEOLOGICALFORMATIONS_5.set('fieldImages', {'id': 'TextEdit', 'Geology': 'TextEdit', 'Symbolism': 'TextEdit', });
lyr_collars_Downhole_lithology_6.set('fieldImages', {'fid': 'TextEdit', 'HoleID': 'TextEdit', 'DepthFrom': 'TextEdit', 'DepthTo': 'TextEdit', 'Lithology': 'TextEdit', '_From_x': 'TextEdit', '_From_y': 'TextEdit', '_From_z': 'TextEdit', '_To_x': 'TextEdit', '_To_y': 'TextEdit', '_To_z': 'TextEdit', '_Mid_x': 'TextEdit', '_Mid_y': 'TextEdit', '_Mid_z': 'TextEdit', });
lyr_collars_Desurvey_7.set('fieldImages', {'fid': '', 'CollarID': '', 'SegLength': '', });
lyr_collars_3D_8.set('fieldImages', {'fid': '', 'HoleID': '', 'DepthFrom': '', 'DepthTo': '', 'Easting': '', 'Northing': '', 'elevation': '', 'Azimuth': '', 'Dip': '', 'EOH': '', });
lyr_collars_9.set('fieldImages', {'HoleID': 'TextEdit', 'DepthFrom': 'TextEdit', 'DepthTo': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'elevation': 'TextEdit', 'Azimuth': 'TextEdit', 'Dip': 'TextEdit', 'EOH': 'TextEdit', });
lyr_GEOLOGICALFORMATIONS_5.set('fieldLabels', {'id': 'header label', 'Geology': 'no label', 'Symbolism': 'no label', });
lyr_collars_Downhole_lithology_6.set('fieldLabels', {'fid': 'no label', 'HoleID': 'no label', 'DepthFrom': 'no label', 'DepthTo': 'no label', 'Lithology': 'no label', '_From_x': 'no label', '_From_y': 'no label', '_From_z': 'no label', '_To_x': 'no label', '_To_y': 'no label', '_To_z': 'no label', '_Mid_x': 'no label', '_Mid_y': 'no label', '_Mid_z': 'no label', });
lyr_collars_Desurvey_7.set('fieldLabels', {'fid': 'no label', 'CollarID': 'no label', 'SegLength': 'no label', });
lyr_collars_3D_8.set('fieldLabels', {'fid': 'no label', 'HoleID': 'no label', 'DepthFrom': 'no label', 'DepthTo': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'elevation': 'no label', 'Azimuth': 'no label', 'Dip': 'no label', 'EOH': 'no label', });
lyr_collars_9.set('fieldLabels', {'HoleID': 'no label', 'DepthFrom': 'no label', 'DepthTo': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'elevation': 'no label', 'Azimuth': 'no label', 'Dip': 'header label', 'EOH': 'no label', });
lyr_collars_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});