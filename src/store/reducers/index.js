import isHoveredReducer from './isHovered';
import sysActionReducer from './sysActions';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:['isHovered','sysAction']
}

const allReducers = combineReducers({
    isHovered:isHoveredReducer,
    sysAction:sysActionReducer
});



export default persistReducer(persistConfig, allReducers);