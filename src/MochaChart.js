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
                    columns={24} />
              <Line values={this.props.data}
                    colorIndex='accent-1'
                    points={true}
                    activeIndex={this.props.data.length - 1} />
              <Marker colorIndex='graph-2'
                      count={24}
                      vertical={true}
                      index={23} />
              <Marker colorIndex='critical'
                      count={24}
                      vertical={true}
                      index={this.props.marker} />
            </Layers>
            <Axis count={2}
                  labels={[{"index": 0, "label": this.props.end}, {"index": 1, "label": this.props.start}]} />
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
