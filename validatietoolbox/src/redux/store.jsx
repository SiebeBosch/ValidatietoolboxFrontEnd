import { keys } from '@material-ui/core/styles/createBreakpoints';
import {createStore} from 'redux';

export const backgroundMaps = {
    OSM: 'Openstreetmap',
    LUFO: 'Luchtfoto'
}

//hier creëren we een lijst met actions. Deze kun je vanuit je component aanroepen. We koppelen iedere action aan een function die onderstaand wordt gedefineerd.
const objectConstants = {SETBACKGROUNDMAP:'setBackgroundMap', ADDMAPLAYER:'addMapLayer', REMOVEMAPLAYER:'removeMapLayer', SETDATA:'setData', LOADDATA:'loadData', SELECTMARKER:'selectMarker', TOGGLEPANEL:'togglePanel', SETVIEWMODE:'setViewMode', CLOSECONTEXTPANEL:'closeContextPanel', OPENCONTEXTPANEL:'openContextPanel', CLEARSELECTEDMARKER:'clearSelectedMarker', SETFEATURETYPE:'setFeaturetype', SETUSER:'setUser'}

//hier defineren we wat iedere action aan argumenten ontvangt en wat hij teruggeeft
export let objectActions = {
    setBackgroundMap(mode) {return {type: objectConstants.SETBACKGROUNDMAP, mapMode:mode}},
    addMapLayer(mapLayer) {return{type: objectConstants.ADDMAPLAYER, mapLayer:mapLayer}},
    removeMapLayer(mapLayer) {return{type: objectConstants.REMOVEMAPLAYER, mapLayer:mapLayer}},
    setData(data) {return{type: objectConstants.SETDATA, data:data}},
    // loadData(data) {return{type: objectConstants.LOADDATA, data:data}},
    selectMarker(marker) {return{type: objectConstants.SELECTMARKER, marker:marker}},
    togglePanel() {return{type: objectConstants.TOGGLEPANEL}},
    setViewMode(viewMode) {return{type: objectConstants.SETVIEWMODE, viewMode:viewMode}},
    closeContextPanel() {return{type: objectConstants.CLOSECONTEXTPANEL}},
    openContextPanel() {return{type: objectConstants.OPENCONTEXTPANEL}},
    clearSelectedMarker() {return{type: objectConstants.CLEARSELECTEDMARKER}},
    setFeaturetype(feature) {return{type: objectConstants.SETFEATURETYPE, featureType:feature}},
    setUser(user) {return{type: objectConstants.SETUSER, user:user}}
}   

//onderstaande functies voeren de actie ook daadwerkelijk uit en leggen het resultaat vast in de store. Dit zijn de zogeheten 'reducers'
let objectData = function(state ={viewMode:"validatie", featureType:"polyline",objectList:[], filteredObjects:[], drawerState:false, popupState:false, backgroundMap:backgroundMaps.OSM,contextPanelOpen:false},action){
    switch(action.type){
        case objectConstants.SETBACKGROUNDMAP:
            if (action.mapMode == backgroundMaps.OSM) {
                state.backgroundMap = backgroundMaps.OSM;
            } else if (action.mapMode == backgroundMaps.LUFO) {
                state.backgroundMap = backgroundMaps.LUFO;
            }
            return {...state}
        case objectConstants.REMOVEMAPLAYER:
            state.mapLayers = state.mapLayers || [];
            state.mapLayers.splice(state.mapLayers.indexOf(action.mapLayers), 1);
            state.mapLayers = [...state.mapLayers];
            console.log("remove maplayers: ", action.mapLayer);
            return {...state}
        case objectConstants.ADDMAPLAYER:
            state.mapLayers = state.mapLayers || [];
            state.mapLayers.push(action.mapLayer);
            state.mapLayers = [...state.mapLayers];
            console.log("add maplayers: ", action.mapLayer);
            return {...state}
        case objectConstants.SETDATA:
            state.data = action.data;
            console.log("current data: ", action.data);
            return {...state};
        case objectConstants.LOADDATA:
                // loadData();
            default:
            return state;
        case objectConstants.SELECTMARKER:
            state.selectedMarker = action.marker;
            return {...state};
        case objectConstants.CLEARSELECTEDMARKER:
            state.selectedMarker = null;
            return {...state};
        case objectConstants.TOGGLEPANEL:
            state.panelOpen = !state.panelOpen;
            return {...state};
        case objectConstants.SETVIEWMODE:
            state.viewMode = action.viewMode;
            return {...state};
        case objectConstants.CLOSECONTEXTPANEL:
            console.log("Closing the context panel in the store.")
            state.contextPanelOpen = false;
            console.log("current state: ", state.contextPanelOpen);
            return {...state};
        case objectConstants.CLOSECONTEXTPANEL:
            console.log("Closing the context panel in the store.")
            state.contextPanelOpen = false;
            console.log("current state: ", state.contextPanelOpen);
            return {...state};
        case objectConstants.OPENCONTEXTPANEL:
            console.log("opening the context panel in the store.")
            state.contextPanelOpen = true;
            console.log("current state: ", state.contextPanelOpen);
            return {...state};
        case objectConstants.SETFEATURETYPE:
            console.log("Setting the feature type in the store.")
            state.featureType = action.featureType;
            return {...state};
        case objectConstants.SETUSER:
            console.log("Setting the user")
            state.user = action.user;
            return {...state};
        }
}


function readNodes(data){
    let nodes = [];
    for (let item of Object.keys(data)){
        let node = {value:item, label:item}
        let children = data[item]
        for (let child of Object.keys(children)){
            let subnode = {value:child, label:child, ...children[child]}
            node.children = node.children || []
            node.children.push(subnode)      
            console.log("children added ", node.children)              
        }
        console.log("de node is ", node)
        if (node.children)
            node.children.sort((a,b)=> a.order > b.order)
        nodes.push(node)
    }
    return nodes;
}

//export let objectStore = createStore(objectData, initialObjects);
export let objectStore = createStore(objectData);
console.log("Store has been created and populated. State is now: ",objectStore.getState());
