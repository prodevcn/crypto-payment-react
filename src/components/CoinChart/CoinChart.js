import React from 'react';
import {Chart} from 'react-charts';
// import {Chart} from 'react-chatist';
function CoinChart() {
    const data = React.useMemo (
      () => [
        {
          label: 'Series 1',
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7], [9, 10]]
        },
        {
          label: 'Series 2',
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        },
      ],
      []
    );   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom', color: 'white' },
        { type: 'linear', position: 'left' }
      ],
      []
    );
   
    return(
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <Chart data={data} axes={axes} />
      </div>
    );
  }


  export default CoinChart;