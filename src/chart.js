import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

const listeners = [];

export function add(set) {
  listeners.push(set);
}

export default function chart(runner){

  const mochaElement = document.getElementById('chart');

  function notifyListeners() {
    listeners.forEach(function (listener) {
      listener();
    });
  }

  ReactDOM.render(
    <Main/>
    , mochaElement);

  runner.on('start', ()=> {

  });

  runner.on('hook', function(hook){

  });

  runner.on('suite end', function (suite) {

  });

  runner.on('test end', function (test) {
  });

  runner.on('pass', function (test) {

  });

  runner.on('fail', function (test, err) {

  });

  runner.on('pending', function (test) {

  });

  runner.on('end', function () {

  });
}
