import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import courses from '../reducers/courseReducer';
import assignments from '../reducers/assignmentReducer';

export default function configureStore() {
    const reducers = combineReducers({
        courses,
        assignments
    });
    const store = createStore(
        reducers, 
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f    
        )
    );
    return store;
}
