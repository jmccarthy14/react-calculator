import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Calculator from './components/Calculator';
import calculator from './reducers'

import './index.css';

const store = createStore(calculator);
const render = () => ReactDOM.render(
    <Calculator store={store}/>,
    document.getElementById('root')
);

render();
store.subscribe(render);

