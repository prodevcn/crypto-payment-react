import React from 'react';
// import {Chart} from 'react-charts';
import Chart from 'react-chartist';
// import { FaBluetooth } from 'react-icons/fa';
function ChartistGraph() {   
    const dataSales = {
        labels: [
          "Jan 01",
          "Jan 15",
          "Jan 30",
          "Feb 01",
          "Feb 15",
          "Feb 30",
          "Mar 01",
          "Mar 15",
          "Mar 30",
        ],
        series: [
          [21, 385, 490, 492, 554, 586, 698, 695],
          [67, 152, 143, 240, 287, 335, 435, 437],
          [23, 113, 67, 108, 190, 239, 307, 308],
        ]
      };
    const optionsSales = {
        low: 0,
        high: 800,
        showArea: false,
        height: 500,
        axisX: {
          showGrid: true,
          stroke: 'white',
        },
        lineSmooth: true,
        showGrid: true,
        showLine: true,
        stroke: 'white',
        showPoint: true,
        fullWidth: true,
        chartPadding: {
          right: 50
        }
      };
    const responsiveSales = [
        [
          "screen and (max-width: 640px)",
          {
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ];
    return(
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Chart
            data={dataSales}
            type="Line"
            options={optionsSales}
            responsiveOptions={responsiveSales}
            style={{color: 'white'}}
        />
      </div>
    );
  }


  export default ChartistGraph;