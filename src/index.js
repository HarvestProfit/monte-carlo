import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
