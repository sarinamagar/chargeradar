const Search = (state = "", action) =>{
    switch(action.type){
        case('SEARCH_CHARGER'):
           return action.payload ===  undefined? "": action;
        default:
            return state
    }
} 
export default Search