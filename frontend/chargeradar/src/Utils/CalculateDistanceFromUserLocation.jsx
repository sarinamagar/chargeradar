export function calculateDistance(originLat, originLng, destLat, destLng) {
    return new Promise((resolve, reject) => {
      if (!window.google || !window.google.maps) {
        reject('Google Maps JavaScript API is not loaded.');
        return;
      }
  
      const origin = new window.google.maps.LatLng(originLat, originLng);
      const destination = new window.google.maps.LatLng(destLat, destLng);
      
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === 'OK') {
            const result = response.rows[0].elements[0];
            const distanceInMeters = result.distance.value;
            const distanceInKilometers = (distanceInMeters / 1000).toFixed(1); 
            resolve(distanceInKilometers);
          } else {
            reject(`Error fetching distance: ${status}`);
          }
        }
      );
    });
  }