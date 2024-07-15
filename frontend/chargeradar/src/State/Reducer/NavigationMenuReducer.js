const NavigationMenuVisible = (state = false, action) =>{
    if(action === undefined){
        return state
    }
    switch(action.type){
        case("TOGGLE_NAVIGATION_MENU"):
            return {current : !action.payload.current, cords : action.payload.cords};
        default:
            return {current : state}
    }
}

export default NavigationMenuVisible