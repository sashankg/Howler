import { createStore, combineReducers } from 'redux'

export default function configureStore() {
    const reducers = combineReducers({

    });
    const store = createStore(reducers);
    return store;
}
