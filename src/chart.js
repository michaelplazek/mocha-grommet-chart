import React from 'react';
import ReactDOM from 'react-dom';

import Handlers from './Handlers';

export default function chart(runner){

  // setInterval(() => {run(runner);}, 10000);
  run(runner);
}

function run(runner){

  const mochaElement = document.getElementById('chart');

  ReactDOM.render(
    <Handlers
      runner = {runner}
    />
    , mochaElement);
}
