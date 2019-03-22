import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './scss/style.scss';
import { App } from './features/App';
import { store } from './store/rootReducer';


render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));

