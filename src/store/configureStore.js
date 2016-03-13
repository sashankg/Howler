import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import courses from '../reducers/courseReducer';

export default function configureStore() {
    const reducers = combineReducers({
        courses
    });
    const store = createStore(
        reducers, 
        compose(
            window.devToolsExtension ? window.devToolsExtension() : f => f    
        )
    );
    return store;
}
