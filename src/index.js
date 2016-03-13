import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import CourseList from './components/CourseList';

render(
    <Provider store={configureStore()}>
        <CourseList />
    </Provider>,
    document.getElementById('root')
);
