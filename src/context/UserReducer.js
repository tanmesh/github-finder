const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        default:
            return state
    }
}

export default userReducer