import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';

import MochaChart from './MochaChart';

import { add } from './chart';

import 'grommet/grommet-hpe.min.css';

class Main extends Component{
  constructor(props){
    super(props);

    let date = new Date();
    let new_date = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let start;
    let end;

    start = date.getMonth().toString() + "/" + date.getDay().toString() + " @ " + date.getHours().toString() + ":" + date.getMinutes().toString();
    end  = new_date.getMonth().toString() + "/" + new_date.getDay().toString() + " @ " + new_date.getHours().toString() + ":" + new_date.getMinutes().toString();

    this.state = {
      data: new Array(24).fill(0),
      start,
      end,
      marker: 23
    };

    this.set = this.set.bind(this);
  }

  componentDidMount() {
    add(this.set);

    setInterval(() => {this.addPoint();}, 1000);
  }

  set() {
    this.setState({});
  }

  // MOCK TEST DATA

  addPoint(){
    let point = Math.floor((Math.random() * 100) + 1);
    let arr = this.state.data;
    let date = new Date();
    let new_date = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    let start;
    let end;

    arr.shift();
    arr.push(point);

    start = date.getMonth().toString() + "/" + date.getDay().toString() + " @ " + date.getHours().toString() + ":" + date.getMinutes().toString();
    end  = new_date.getMonth().toString() + "/" + new_date.getDay().toString() + " @ " + new_date.getHours().toString() + ":" + new_date.getMinutes().toString();

    let temp = this.state.marker - 1;

    if(temp >= 0){
      this.setState({marker:temp});
    }

    this.setState({
      data: arr,
      start,
      end
    });
  }

  render(){
    return(
      <App>
        <Box align="center" justify="center" colorIndex="grey-3" pad="medium" margin="medium">
          <MochaChart
            data = {this.state.data}
            start = {this.state.start}
            end = {this.state.end}
            marker = {this.state.marker}
          />
        </Box>
      </App>
    );
  }
}

Main.propTypes = {

};

export default Main;
