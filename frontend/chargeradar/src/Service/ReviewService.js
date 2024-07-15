import { getChargers, removeCharger, saveChargers } from "./LocalStorage"

export const addReview = (id, content) =>{
    const allChargers = getChargers();
    allChargers.forEach((charger)=>{
        if(charger.id === id){
            charger.reviews.push(content)
        }
    })
    removeCharger()
    saveChargers(allChargers)
    console.log(allChargers)
}

export const getReviews = (id) =>{
    const reviews = []
    const allChargers = getChargers();
    allChargers.forEach((charger)=>{
        if(charger.id === id){
            reviews.push(charger.reviews)
        }
    })
    console.log(reviews)
    return reviews;
}