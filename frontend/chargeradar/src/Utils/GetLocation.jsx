export const fetchLocation = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        return { lat: latitude, lng: longitude };
      } catch (error) {
        console.error("Error getting the location: ", error);
        throw error; 
      }
    } else {
      console.error("Geolocation is not supported by this browser.");
      throw new Error("Geolocation is not supported by this browser.");
    }
  };