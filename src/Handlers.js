import React from 'react';
import { PropTypes } from 'prop-types';

import Main from './Main';

const storage = window.localStorage;

const Handlers = (props) => {

  let runner = props.runner;
  let passes = [];
  let failures = [];
  let slow = [];
  let data = [];
  let start = getStart();
  let end = getEnd();
  let marker;

  // storage.clear();

  if(storage.length === 0){
    data = new Array(24).fill(0);
    marker = 23;
  }
  else{
    data = JSON.parse(storage.getItem('data'));

    let temp = parseInt(storage.getItem('marker')) - 1;
    if(temp >= 0){
      marker = temp;
    }
  }

  runner.on('start', ()=> {

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

    start = getStart();
    end  = getEnd();

    data.shift();
    data.push(((failures.length + slow.length)/(failures.length + slow.length + passes.length))*100);
    storage.setItem('data', JSON.stringify(data));
    storage.setItem('marker', marker);
  });

  return(
    <Main
      data = {data}
      marker = {marker}
      start = {start}
      end = {end}
      reset = {() => {reset();}}
    />
  );
};

function reset(){
  storage.clear();
}

function getStart(){
  let date = new Date();
  return date.getMonth().toString() + "/" + date.getDay().toString() + " @ " + date.getHours().toString() + ":" + date.getMinutes().toString();
}

function getEnd(){
  let new_date = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
  return new_date.getMonth().toString() + "/" + new_date.getDay().toString() + " @ " + new_date.getHours().toString() + ":" + new_date.getMinutes().toString();
}

Handlers.propTypes = {
  runner: PropTypes.object
};

export default Handlers;
