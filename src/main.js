import React from 'react';
import ReactDOM from 'react-dom';
import Viewport from './components/viewport';

const divId = 'react-soroban';
const div = document.createElement('div');
div.id = divId;

document.body.appendChild(div);
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Viewport),
    document.getElementById(divId)
  );
});
