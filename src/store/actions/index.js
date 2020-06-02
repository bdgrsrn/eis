export const toggleHover = () => {
    return {
        type: 'HOVER_TOGGLE'
    };
};

export const clickTab = (tab_name) => {
    return {
        type: 'TAB_CLICK',
        payload:tab_name
    };
};
