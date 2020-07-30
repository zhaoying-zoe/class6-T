import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';

import App from './App.js';
import './App.css';

ReactDom.render(
	<Provider store={store}>
		<App />,
	</Provider>,
	document.getElementById('root')
)
