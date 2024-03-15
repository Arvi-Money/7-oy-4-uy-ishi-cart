const defaultState = {
    bookmarks: 0
}

export function bookmarksReducer(state = defaultState, actions) {
    switch (actions.type) {
        case 'QOSHISH':
            return{...state, bookmarks: state.bookmarks + 1}
        case 'OCHIRISH':
                return{...state, bookmarks: state.bookmarks - 1}
        case 'TAYINLASH':
                return{...state, bookmarks: actions.payload}
        default:
            return state;
    }
}