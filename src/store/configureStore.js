import { createStore, combineReducers } from 'redux';
import courses as '../reducers/courseReducer';
export default function configureStore() {
    const reducers = combineReducers({
        courses
    });
    const store = createStore(reducers);
    return store;
}
