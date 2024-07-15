import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../Components/Sidebar/SearchBar'
import BottomBar from '../Components/BottomBar/BottomBar'
import FullSidebar from '../Components/Sidebar/FullSidebar'
import MenuBarUser from '../Components/MenuBar/MenuBarUser'
import Map from '../Components/Map/Map'
import RouteMapper from '../Components/Map/RouteMapper'
import { useDispatch, useSelector } from 'react-redux'
import FullImageViewer from '../Components/Widget/FullImageViewer'
import BookingForm from '../Components/Forms/BookingForm'
import BookingSuccess from '../Components/PopUp/BookingSuccess'
import NavigationInfo from '../Components/PopUp/NavigationInfo'

const Wrapper = styled.div`
  overflow-y : hidden;
`
const MapContainer = styled.div`
  position : absolute !important;
  width : 100%;
  height : 100%;
  margin-top :-15px;
  z-index : 0;
  overflow-y : hidden;
  .gm-style iframe + div { border:none!important; }
`
const SideBar = styled.div`
  position : absolute;
  z-index : 99;
`
function ChargerPage() {
    const fullImageViewerVisible = useSelector(state => state.toggleViewer)
    const bookingFormVisible = useSelector(state => state.BookingFormVisible)
    const bookingSuccessVisible = useSelector(state => state.BookingSuccessVisible)
    const navigationMenuVisible = useSelector(state => state.NavigationMenuVisible)
    const [sidebar, setSidebar] = useState(false);
    const [currentCharger, setCurrentCharger] = useState()
    return (
      <Wrapper>
          <MenuBarUser/>
          {fullImageViewerVisible && <FullImageViewer/>}
          <SideBar>
          {sidebar? <FullSidebar charger = {currentCharger} status={sidebar} onClick={setSidebar}/> : <SearchBar onClick = {setSidebar} status = {sidebar}/>}
          </SideBar>
          {bookingSuccessVisible && <BookingSuccess/>}
          {bookingFormVisible && <BookingForm/>}
          {navigationMenuVisible.current === true ? <NavigationInfo cords = {navigationMenuVisible.cords}/> : ""}
          {/* {navigationMenuVisible.current.current.current ?console.log(navigationMenuVisible.current.current.current) : ""} */}
          <MapContainer>
            <Map sidebar={setSidebar} status = {sidebar} setCurrentCharger = {setCurrentCharger}/>
          </MapContainer>
          <BottomBar/>
      </Wrapper>
    )
}

export default ChargerPage