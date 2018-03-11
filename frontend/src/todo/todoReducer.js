const INITIAL_STATE = {description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGE':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        default:
            return state
        case 'TODO_CLEAR':
            return {...state, description: ''}
    }
}