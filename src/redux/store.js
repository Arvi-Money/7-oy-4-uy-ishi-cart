import { combineReducers, createStore} from "redux";
import { bookmarksReducer } from "./bookmarksReducer";

const rootReducer = combineReducers({
    bookmarks: bookmarksReducer
})

export const store = createStore(rootReducer)