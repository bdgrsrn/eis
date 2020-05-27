import isHoveredReducer from './isHovered';
import sysActionReducer from './sysActions';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isHovered:isHoveredReducer,
    sysAction:sysActionReducer
});


export default  allReducers;