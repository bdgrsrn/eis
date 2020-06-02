
const initialState={
    isHoveMenu:false,
    activeTabName:'Home',
    lang: 'mn',
}


const isHoveredReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'HOVER_TOGGLE':
            return {
                ...state,
                isHoveMenu: !state.isHoveMenu
            };
        case 'TAB_CLICK':
            return {
                ...state,
                activeTabName: action.payload
            };

        case 'CHOOSE_LANGUAGE':
            return {
                ...state,
                lang: action.payload
                
            };
            
        default:
            return state;
    }
}

export default isHoveredReducer;
