import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { add } from './Handlers';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

import MochaChart from './MochaChart';

import 'grommet/grommet-hpe.min.css';

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: this.props.data,
      start: this.props.start,
      end: this.props.end,
      marker: this.props.marker
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.data,
      start: nextProps.start,
      end: nextProps.end,
      marker: nextProps.marker
    });
  }

  render(){
    return(
      <App>
        <Box direction="row" colorIndex="grey-3" pad="medium" margin="medium">
          <MochaChart
            data = {this.state.data}
            start = {this.state.start}
            end = {this.state.end}
            marker = {this.state.marker}
          />
          <Button fill={false} label="Reset" onClick={this.props.reset} />
        </Box>
      </App>
    );
  }
}

Main.propTypes = {
  reset: PropTypes.func,
  start: PropTypes.string,
  end: PropTypes.string,
  data: PropTypes.array,
  marker: PropTypes.number
};

export default Main;
