export const saveChargers = (chargers) =>{
    localStorage.setItem('chargers', JSON.stringify(chargers));
}

export const getChargers = () =>{
    let chargers = JSON.parse(localStorage.getItem('chargers'))
    return chargers;
}   

export const removeCharger = () =>{
    localStorage.removeItem('chargers');
}