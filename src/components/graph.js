import React, { Component } from 'react';
import { LineChart, CartesianGrid, Legend, XAxis, YAxis, Line, Brush, Tooltip } from 'recharts';

class Graph extends Component {

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
        <div className='line-chart-wrapper'>
          <LineChart width={800} height={400} data={data} syncId="test">
            <CartesianGrid stroke='#f5f5f5' />
            <Legend/>
            <XAxis type='number' dataKey='pv' />
            <YAxis type='number' />
            <Tooltip />
            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
          </LineChart>
        </div>
      </div>
    );
  }
}

module.exports = Graph;
