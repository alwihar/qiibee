const initialState = {
    isChecked : false,
    user: 'customer'
};

export default function checked(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_CHECKED':
            return {
                ...state,
                isChecked: !state.isChecked,
            };
        case 'SWITCH_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}