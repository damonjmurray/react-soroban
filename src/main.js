import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Viewport from './components/viewport';

// create div to contain app
const domNode = document.createElement('div');
domNode.id = 'react-soroban';
document.body.appendChild(domNode);

// create state tree and render components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  render(
    <Provider store={ store }>
      <Viewport />
    </Provider>,
    domNode
  );
});
