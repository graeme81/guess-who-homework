import React from 'react';
import ReactDOM from 'react-dom'
import GuessContainer from './containers/GuessContainer.jsx'

window.onload = function(){
  ReactDOM.render(
    <GuessContainer />,
    document.getElementById('app')
  );
}
