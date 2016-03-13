import { createStore, combineReducers } from 'redux';
import courses from '../reducers/courseReducer';

export default function configureStore() {
    const reducers = combineReducers({
        courses
    });
    const store = createStore(reducers);
    return store;
}
