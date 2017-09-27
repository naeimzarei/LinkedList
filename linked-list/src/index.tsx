import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Store from './Store';

let store = new Store();
ReactDOM.render(
	<App store={store}/>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
