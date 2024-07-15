const MapRef = (state = null, action) =>{
    switch(action.type){
        case('SET_REF'):
            return action.payload;
        default:
            return state;
    }
}
export default MapRef;