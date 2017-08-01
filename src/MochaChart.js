import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Chart, {Axis, Base, Layers, Grid, Line, Marker, MarkerLabel, HotSpots} from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';

class MochaChart extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <Box>
        <Chart>
          <Axis count={5}
                labels={[{"index": 2, "label": "50%"}, {"index": 4, "label": "100%"}]}
                vertical={true} />
          <Chart vertical={true}>
            <Base height='medium'
                  width='large' />
            <Layers>
              <Grid rows={10}
                    columns={50} />
              <Line values={this.props.data}
                    colorIndex='accent-1'
                    points={true}
                    activeIndex={this.props.data.length - 1} />
              <Marker colorIndex='graph-2'
                    count={50}
                    vertical={true}
                    index={49} />
              <Marker colorIndex='critical'
                    count={50}
                    vertical={true}
                    index={this.props.marker} />
            </Layers>
            <Axis count={2}
                  labels={[{"index": 0, "label": "50"}, {"index": 1, "label": "0"}]} />
          </Chart>
        </Chart>
      </Box>
    );
  }
}

MochaChart.propTypes = {
  data: PropTypes.array,
  start: PropTypes.string,
  end: PropTypes.string,
  marker: PropTypes.number
};

export default MochaChart;
