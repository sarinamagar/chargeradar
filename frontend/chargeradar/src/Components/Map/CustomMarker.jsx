import React from 'react'
import { Marker} from '@react-google-maps/api'
import FastCharger1 from '../../Assets/Images/Icons/fast-charger-icon.png'
import FastCharger2 from '../../Assets/Images/Icons/fast-charger-icon-2.png'
import FastCharger3 from '../../Assets/Images/Icons/fast-charger-icon-3.png'
import FastCharger4 from '../../Assets/Images/Icons/fast-charger-icon-4.png'



function getUrl(status){
  const urls = {'fast_charging' : FastCharger1, 'commercial_charging' : FastCharger2, 'level2' : FastCharger3, 'unavailable':FastCharger4}
  return urls[status]
}
function CustomMarker(props) {
  return (
    <>  
      <Marker
            position={props.location}
            icon={{
              url: getUrl(props.details.status),
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            onClick={()=>{props.sidebar(props? props : !props.status);
              props.currentCharger(props);
            }}
      />

    </>
  )
}

export default CustomMarker