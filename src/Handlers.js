import React from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';

import Main from './Main';

const storage = window.localStorage;

const Handlers = (props) => {

  let runner = props.runner;
  let passes = [];
  let failures = [];
  let slow = [];
  let data = [];
  let info = [];
  let start = getStart();
  let marker;

  // storage.clear();

  if(storage.length === 0){
    data = new Array(50).fill(0);
    info = new Array(50).fill(0);
    marker = 49;

    for(let i = 0; i < info.length; i++){
      info[i] = {
        start: 0,
        passes: 0,
        failures: 0,
        slow: 0
      };
    }
  }
  else{
    data = JSON.parse(storage.getItem('data'));
    info = JSON.parse(storage.getItem('info'));

    let temp = parseInt(storage.getItem('marker')) - 1;
    if(temp >= 0){
      marker = temp;
    }
  }

  runner.on('start', ()=> {
    console.log(info);
  });

  runner.on('pass', function (test) {
    if(test.duration >= test._slow){
      slow.push(test);
    }
    else{
      passes.push(test);
    }
  });

  runner.on('fail', function (test, err) {
    failures.push(test);
  });

  runner.on('end', function () {

    let obj = {
      start: getStart(),
      passes: passes.length,
      failures: failures.length,
      slow: slow.length
    };

    info.shift();
    info.push(obj);
    storage.setItem('info', JSON.stringify(info));

    data.shift();
    data.push(((failures.length + slow.length)/(failures.length + slow.length + passes.length))*100);
    storage.setItem('data', JSON.stringify(data));

    storage.setItem('marker', marker);
  });

  return(
    <Main
      data = {data}
      info = {info}
      marker = {marker}
      start = {start}
      reset = {() => {reset();}}
    />
  );
};

function reset(){
  storage.clear();
}

function getStart() {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}
Handlers.propTypes = {
  runner: PropTypes.object
};

export default Handlers;
