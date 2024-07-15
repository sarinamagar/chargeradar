import React, { useEffect, useRef, useState } from 'react'
import {useJsApiLoader,GoogleMap, Marker, Circle, TrafficLayer} from '@react-google-maps/api'
import { fetchLocation } from '../../Utils/GetLocation';
import FastCharger1 from '../../Assets/Images/Icons/fast-charger-icon.png'
import {getAllChargers} from '../../TemporaryData/TempDataStore'
import CustomMarker from './CustomMarker';
import FullSidebar from '../Sidebar/FullSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { setMapRef } from '../../State/Action/MapRefAction';
import { searchCharger } from '../../Service/SearchService';
import { saveChargers } from '../../Service/LocalStorage';


function Map(props) {
  const [location, setLocation] = useState(null)
  const [chargers, setChargers] = useState(null)
  const dispatch = useDispatch()
  const search = useSelector(state => state.Search)
  // const [location, setLocation] = useState({ lat: null, lng: null });
  const mapRef = useRef(null)
  useEffect(() => {
    const getLocation = async () => {
      try {
        const userLocation = await fetchLocation();
        setLocation(userLocation);
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    };
    getLocation();
  }, []);

  useEffect(()=>{
    const getChargers = () =>{
      const allChargers = getAllChargers();
      setChargers(allChargers);
      saveChargers(allChargers)
    }
    getChargers();
  },[])

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey : 'AIzaSyBwzuqWT77Rr-OIyo89PnOEIts08So-AxE'
  })
  if(!isLoaded){
    return ""
  }

  return (
    <>
      <GoogleMap
          center={location && location} 
          zoom={15} 
          mapContainerStyle={{height : '100%', width : '100%'}}
          options={{
            mapTypeControl : false,
            zoomControl : false,
            streetViewControl : false,
            fullscreenControl : false,
          }}
          onLoad={(map) => {
            mapRef.current = map;
          }}
          >
          {location && 
          <>
            {/* <Marker
              position={location}
              icon={{
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new window.google.maps.Size(40, 40),
            }}
            /> */}
            <Marker
              position={location}   
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 15,
                fillOpacity: 1,
                strokeWeight: 8,
                fillColor: "#5384ED",
                strokeColor: "#96b6fa",
            }}
            />
            {chargers && 
              chargers.map((charger, index) => (
                <CustomMarker 
                  key={index} 
                  location={{ lat: parseFloat(charger.latitude), lng: parseFloat(charger.longitude )}} 
                  details = {charger}
                  sidebar = {props.sidebar}
                  status = {props.status}
                  currentCharger = {props.setCurrentCharger}
                  mapRef = {mapRef.current}
                />
              ))
            }
          </>
          }
          <TrafficLayer/>
        </GoogleMap>
    </>
  )
}

export default Map