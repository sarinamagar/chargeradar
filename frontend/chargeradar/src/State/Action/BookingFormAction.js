export const toggleBookingForm = current => {
    return {
        type : "TOGGLE_BOOKING_FORM",
        payload : current
    }
}

export const toggleBookingSuccess = current => {
    return {
        type : 'TOGGLE_BOOKING_SUCCESS',
        payload : current
    }
}