const BookingFormVisible = (state = false, action) =>{
    switch(action.type){
        case("TOGGLE_BOOKING_FORM"):
            return !action.payload
        default:
            return state;
    }
}

const BookingSuccessVisible = (state = false, action) =>{
    console.log(action)
    switch(action.type){
        case("TOGGLE_BOOKING_SUCCESS"):
            return !action.payload
        default:
            return state;
    }
}
export {BookingFormVisible, BookingSuccessVisible}