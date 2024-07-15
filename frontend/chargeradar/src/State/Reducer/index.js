import { combineReducers } from 'redux';
import toggleViewer from './ImageViewerReducer';
import MapRef from './MapRefReducer';
import {BookingFormVisible, BookingSuccessVisible} from './BookingFormReducer';
import NavigationMenuVisible from './NavigationMenuReducer';
import Search from './SearchReducer';

const rootReducer = combineReducers({
    toggleViewer,
    MapRef,
    BookingFormVisible,
    BookingSuccessVisible,
    NavigationMenuVisible,
    // Search
});

export default rootReducer;