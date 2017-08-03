import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';

class MochaInfo extends Component {
  constructor(props) {
    super(props);
  }

  getInfo(info, index){
    let result = null;
    if(info[index].passes !== null){
      result = (
        <List>
          <ListItem justify="center">
            <Label>{info[index].start}</Label>
          </ListItem>
          <ListItem justify="center">
            <Label>Passed Tests: {info[index].passes}</Label>
          </ListItem>
          <ListItem justify="center">
            <Label>Failed Tests: {info[index].failures}</Label>
          </ListItem>
          <ListItem justify="center">
            <Label>Slow Tests: {info[index].slow}</Label>
          </ListItem>
        </List>
      );
    }
    return result;
  }

  render(){

    let { info, index } = this.props;
    return (
      <Box>
        {this.getInfo(info, index)}
      </Box>
    );
  }
}

MochaInfo.propTypes = {
  info: PropTypes.array,
  index: PropTypes.number
};

export default MochaInfo;
