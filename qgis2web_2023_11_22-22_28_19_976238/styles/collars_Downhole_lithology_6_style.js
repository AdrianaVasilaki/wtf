var size = 0;
var placement = 'point';
function categories_collars_Downhole_lithology_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(150,212,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'clayey gravels':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,233,77,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'clayey sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,158,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'conglomerate':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(75,230,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'flysch':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,98,122,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gravelly clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(209,50,33,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gravelly sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(131,206,96,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'gravels':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(181,44,208,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'limestone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,139,192,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'marl':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,204,148,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,178,43,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandstone':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,135,223,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandy clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,227,120,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandy gravels':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,13,211,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'sandy marl':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(90,61,206,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silt':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(60,204,197,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silty clay':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(69,179,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'silty sand':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(225,160,113,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,91,240,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_collars_Downhole_lithology_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Lithology");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Lithology") !== null) {
        labelText = String(feature.get("Lithology"));
    }
    
var style = categories_collars_Downhole_lithology_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
