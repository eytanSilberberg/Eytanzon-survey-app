const initialState = {
    questions: null,
}

export function questionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_QUESTIONS':
            return { questions: action.questions }
        case 'ADD_QUESTION':
            return { ...state, miniAnys: [action.miniAnys, ...state.miniAnys] }
        case 'REMOVE_QUESTION':
            return { ...state, miniAnys: state.miniAnys.filter(mini => mini._id !== action.anyId) }
        case 'UPDATE_QUESTION':
            return {
                ...state,
                miniAnys: state.miniAnys.map(mini =>
                    mini._id === action.mini._id ? action.mini : mini
                )
            }
        case 'SET_BOARD':
            return { ...state, any: action.any }
        case 'CLEAR_BOARD':
            return { ...state, any: null }
        default:
            return state
    }

}