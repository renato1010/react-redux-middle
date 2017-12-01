import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
  return (data.reduce((acc, curr) => acc + curr) / data.length).toFixed(2);
}
const Chart = props => {
  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <Sparklines
        // height={80}
        width={180}
        data={props.data}
      >
        <SparklinesLine
          style={{ stroke: props.color, strokeWidth: '1', fill: 'none' }}
        />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <span style={{ fontSize: '0.75rem', color: '#6e077a' }}>
        average: {average(props.data)}
      </span>
    </div>
  );
};

export default Chart;
