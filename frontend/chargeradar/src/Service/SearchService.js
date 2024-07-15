import { getAllChargers } from "../TemporaryData/TempDataStore"

export const searchCharger = (keyword) => {
    const keywords = keyword.toLowerCase().split(/\s+/);
    const results = [];
    const data = getAllChargers()
    data.forEach(item => {
        const nameWords = item.name.toLowerCase().split(/\s+/);
        const addressWords = item.address.toLowerCase().split(/\s+/);
        const matches = keywords.some(keyword => 
        nameWords.includes(keyword) || addressWords.includes(keyword)
    );
    if (matches) {
    results.push({lng:item.lng,lat:item.lat});
    }
    });
  
    return results;
  };