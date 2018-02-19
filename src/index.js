import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(solid.faSpinner);

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
