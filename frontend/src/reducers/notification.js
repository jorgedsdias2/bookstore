const INITIAL_STATE = { message: '' };

export function notification(state = INITIAL_STATE, action) {
    if(action.type === 'ALERT') {
        return { ...state, message: action.message };
    }

    return state;
}