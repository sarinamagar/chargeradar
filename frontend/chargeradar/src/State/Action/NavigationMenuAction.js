export const toggleNavigationMenu = (stat, cords) => { 
    return {
        type : 'TOGGLE_NAVIGATION_MENU',
        payload : {current : stat,
                    cords : cords
                }
    }
}