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
      info: this.props.info,
      start: this.props.start,
      marker: this.props.marker
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.data,
      info: nextProps.info,
      start: nextProps.start,
      marker: nextProps.marker
    });
  }

  render(){
    return(
      <App>
        <Box direction="row" colorIndex="grey-3" pad="medium" margin="medium">
          <MochaChart
            data = {this.state.data}
            info = {this.state.info}
            start = {this.state.start}
            marker = {this.state.marker}
          />
        </Box>
        <Box margin={{horizontal:"medium",vertical:"large"}}>
          <Button plain={false} accent={true} fill={false} label="Reset" onClick={this.props.reset} />
        </Box>
      </App>
    );
  }
}

Main.propTypes = {
  reset: PropTypes.func,
  start: PropTypes.string,
  data: PropTypes.array,
  info: PropTypes.array,
  marker: PropTypes.number
};

export default Main;
