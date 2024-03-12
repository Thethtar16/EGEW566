var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_pl_amphoe_1 = new ol.format.GeoJSON();
var features_pl_amphoe_1 = format_pl_amphoe_1.readFeatures(json_pl_amphoe_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_amphoe_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_amphoe_1.addFeatures(features_pl_amphoe_1);
var lyr_pl_amphoe_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_amphoe_1, 
                style: style_pl_amphoe_1,
                popuplayertitle: "pl_amphoe",
                interactive: true,
                title: '<img src="styles/legend/pl_amphoe_1.png" /> pl_amphoe'
            });
var format_pl_village_2 = new ol.format.GeoJSON();
var features_pl_village_2 = format_pl_village_2.readFeatures(json_pl_village_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_village_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_village_2.addFeatures(features_pl_village_2);cluster_pl_village_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_pl_village_2
});
var lyr_pl_village_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_pl_village_2, 
                style: style_pl_village_2,
                popuplayertitle: "pl_village",
                interactive: true,
                title: '<img src="styles/legend/pl_village_2.png" /> pl_village'
            });

lyr_Positron_0.setVisible(true);lyr_pl_amphoe_1.setVisible(true);lyr_pl_village_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_pl_amphoe_1,lyr_pl_village_2];
lyr_pl_amphoe_1.set('fieldAliases', {'AREA': 'AREA', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', 'PROV_CODE': 'PROV_CODE', 'strata': 'strata', });
lyr_pl_village_2.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', });
lyr_pl_amphoe_1.set('fieldImages', {'AREA': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMP_NAM_T': 'TextEdit', 'AMP_NAM_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'strata': 'Range', });
lyr_pl_village_2.set('fieldImages', {'NRD_CODE': 'TextEdit', 'VILL_CODE': 'TextEdit', 'VILL_NAM_T': 'TextEdit', 'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', });
lyr_pl_amphoe_1.set('fieldLabels', {'AREA': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', 'PROV_CODE': 'no label', 'strata': 'no label', });
lyr_pl_village_2.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', });
lyr_pl_village_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});