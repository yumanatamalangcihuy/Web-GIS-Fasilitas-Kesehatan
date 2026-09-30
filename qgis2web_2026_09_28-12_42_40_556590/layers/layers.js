var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KotaMalang_1 = new ol.format.GeoJSON();
var features_KotaMalang_1 = format_KotaMalang_1.readFeatures(json_KotaMalang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMalang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMalang_1.addFeatures(features_KotaMalang_1);
var lyr_KotaMalang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMalang_1, 
                style: style_KotaMalang_1,
                popuplayertitle: 'Kota Malang',
                interactive: true,
                title: '<img src="styles/legend/KotaMalang_1.png" /> Kota Malang'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_SungaiBesar_4 = new ol.format.GeoJSON();
var features_SungaiBesar_4 = format_SungaiBesar_4.readFeatures(json_SungaiBesar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiBesar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiBesar_4.addFeatures(features_SungaiBesar_4);
var lyr_SungaiBesar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiBesar_4, 
                style: style_SungaiBesar_4,
                popuplayertitle: 'Sungai Besar',
                interactive: true,
                title: '<img src="styles/legend/SungaiBesar_4.png" /> Sungai Besar'
            });
var format_Irigasi_5 = new ol.format.GeoJSON();
var features_Irigasi_5 = format_Irigasi_5.readFeatures(json_Irigasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irigasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irigasi_5.addFeatures(features_Irigasi_5);
var lyr_Irigasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irigasi_5, 
                style: style_Irigasi_5,
                popuplayertitle: 'Irigasi',
                interactive: true,
                title: '<img src="styles/legend/Irigasi_5.png" /> Irigasi'
            });
var format_FaskesKarangbesuki_6 = new ol.format.GeoJSON();
var features_FaskesKarangbesuki_6 = format_FaskesKarangbesuki_6.readFeatures(json_FaskesKarangbesuki_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaskesKarangbesuki_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaskesKarangbesuki_6.addFeatures(features_FaskesKarangbesuki_6);
var lyr_FaskesKarangbesuki_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaskesKarangbesuki_6, 
                style: style_FaskesKarangbesuki_6,
                popuplayertitle: 'Faskes Karangbesuki',
                interactive: true,
                title: '<img src="styles/legend/FaskesKarangbesuki_6.png" /> Faskes Karangbesuki'
            });
var format_FaskesBlimbing_7 = new ol.format.GeoJSON();
var features_FaskesBlimbing_7 = format_FaskesBlimbing_7.readFeatures(json_FaskesBlimbing_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaskesBlimbing_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaskesBlimbing_7.addFeatures(features_FaskesBlimbing_7);
var lyr_FaskesBlimbing_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaskesBlimbing_7, 
                style: style_FaskesBlimbing_7,
                popuplayertitle: 'Faskes Blimbing',
                interactive: true,
                title: '<img src="styles/legend/FaskesBlimbing_7.png" /> Faskes Blimbing'
            });
var format_FaskesKedungkandang_8 = new ol.format.GeoJSON();
var features_FaskesKedungkandang_8 = format_FaskesKedungkandang_8.readFeatures(json_FaskesKedungkandang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaskesKedungkandang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaskesKedungkandang_8.addFeatures(features_FaskesKedungkandang_8);
var lyr_FaskesKedungkandang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaskesKedungkandang_8, 
                style: style_FaskesKedungkandang_8,
                popuplayertitle: 'Faskes Kedungkandang',
                interactive: true,
                title: '<img src="styles/legend/FaskesKedungkandang_8.png" /> Faskes Kedungkandang'
            });
var format_FaskesKlojen_9 = new ol.format.GeoJSON();
var features_FaskesKlojen_9 = format_FaskesKlojen_9.readFeatures(json_FaskesKlojen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaskesKlojen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaskesKlojen_9.addFeatures(features_FaskesKlojen_9);
var lyr_FaskesKlojen_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaskesKlojen_9, 
                style: style_FaskesKlojen_9,
                popuplayertitle: 'Faskes Klojen',
                interactive: true,
                title: '<img src="styles/legend/FaskesKlojen_9.png" /> Faskes Klojen'
            });
var format_FaskesLowokwaru_10 = new ol.format.GeoJSON();
var features_FaskesLowokwaru_10 = format_FaskesLowokwaru_10.readFeatures(json_FaskesLowokwaru_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FaskesLowokwaru_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaskesLowokwaru_10.addFeatures(features_FaskesLowokwaru_10);
var lyr_FaskesLowokwaru_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaskesLowokwaru_10, 
                style: style_FaskesLowokwaru_10,
                popuplayertitle: 'Faskes Lowokwaru',
                interactive: true,
                title: '<img src="styles/legend/FaskesLowokwaru_10.png" /> Faskes Lowokwaru'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KotaMalang_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_SungaiBesar_4.setVisible(true);lyr_Irigasi_5.setVisible(true);lyr_FaskesKarangbesuki_6.setVisible(true);lyr_FaskesBlimbing_7.setVisible(true);lyr_FaskesKedungkandang_8.setVisible(true);lyr_FaskesKlojen_9.setVisible(true);lyr_FaskesLowokwaru_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KotaMalang_1,lyr_Jalan_2,lyr_Sungai_3,lyr_SungaiBesar_4,lyr_Irigasi_5,lyr_FaskesKarangbesuki_6,lyr_FaskesBlimbing_7,lyr_FaskesKedungkandang_8,lyr_FaskesKlojen_9,lyr_FaskesLowokwaru_10];
lyr_KotaMalang_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'remark': 'remark', 'lcode': 'lcode', 'shape_leng': 'shape_leng', });
lyr_Sungai_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'namobj': 'namobj', 'remark': 'remark', 'lcode': 'lcode', 'shape_leng': 'shape_leng', });
lyr_SungaiBesar_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'namobj': 'namobj', 'remark': 'remark', 'lcode': 'lcode', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Irigasi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'namobj': 'namobj', 'remark': 'remark', 'lcode': 'lcode', 'shape_leng': 'shape_leng', });
lyr_FaskesKarangbesuki_6.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Alamat': 'Alamat', 'Operasiona': 'Operasiona', 'Jam': 'Jam', });
lyr_FaskesBlimbing_7.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Alamat': 'Alamat', 'Operasiona': 'Operasiona', 'Jam': 'Jam', });
lyr_FaskesKedungkandang_8.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Alamat': 'Alamat', 'Operasiona': 'Operasiona', 'Jam': 'Jam', });
lyr_FaskesKlojen_9.set('fieldAliases', {'Name': 'Name', 'Rating': 'Rating', 'Alamat': 'Alamat', 'Operasiona': 'Operasiona', 'Jam': 'Jam', });
lyr_FaskesLowokwaru_10.set('fieldAliases', {'Name': 'Name', 'icon': 'icon', 'Alamat': 'Alamat', 'Operasiona': 'Operasiona', 'Jam': 'Jam', });
lyr_KotaMalang_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'remark': 'TextEdit', 'lcode': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'lcode': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_SungaiBesar_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'lcode': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Irigasi_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'lcode': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_FaskesKarangbesuki_6.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Alamat': 'TextEdit', 'Operasiona': 'TextEdit', 'Jam': 'TextEdit', });
lyr_FaskesBlimbing_7.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Alamat': 'TextEdit', 'Operasiona': 'TextEdit', 'Jam': 'TextEdit', });
lyr_FaskesKedungkandang_8.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Alamat': 'TextEdit', 'Operasiona': 'TextEdit', 'Jam': 'TextEdit', });
lyr_FaskesKlojen_9.set('fieldImages', {'Name': 'TextEdit', 'Rating': 'TextEdit', 'Alamat': 'TextEdit', 'Operasiona': 'TextEdit', 'Jam': 'TextEdit', });
lyr_FaskesLowokwaru_10.set('fieldImages', {'Name': 'TextEdit', 'icon': 'TextEdit', 'Alamat': 'TextEdit', 'Operasiona': 'TextEdit', 'Jam': 'TextEdit', });
lyr_KotaMalang_1.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'OBJECTID': 'no label', 'remark': 'no label', 'lcode': 'no label', 'shape_leng': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'OBJECTID': 'no label', 'namobj': 'no label', 'remark': 'no label', 'lcode': 'no label', 'shape_leng': 'no label', });
lyr_SungaiBesar_4.set('fieldLabels', {'OBJECTID': 'no label', 'namobj': 'no label', 'remark': 'no label', 'lcode': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Irigasi_5.set('fieldLabels', {'OBJECTID': 'no label', 'namobj': 'no label', 'remark': 'no label', 'lcode': 'no label', 'shape_leng': 'no label', });
lyr_FaskesKarangbesuki_6.set('fieldLabels', {'Name': 'no label', 'Rating': 'no label', 'Alamat': 'no label', 'Operasiona': 'no label', 'Jam': 'no label', });
lyr_FaskesBlimbing_7.set('fieldLabels', {'Name': 'no label', 'Rating': 'no label', 'Alamat': 'no label', 'Operasiona': 'no label', 'Jam': 'no label', });
lyr_FaskesKedungkandang_8.set('fieldLabels', {'Name': 'no label', 'Rating': 'no label', 'Alamat': 'no label', 'Operasiona': 'no label', 'Jam': 'no label', });
lyr_FaskesKlojen_9.set('fieldLabels', {'Name': 'no label', 'Rating': 'no label', 'Alamat': 'no label', 'Operasiona': 'no label', 'Jam': 'no label', });
lyr_FaskesLowokwaru_10.set('fieldLabels', {'Name': 'no label', 'icon': 'no label', 'Alamat': 'no label', 'Operasiona': 'no label', 'Jam': 'no label', });
lyr_FaskesLowokwaru_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});