import React, { Component } from 'react'
import Chart from "chart.js";
// import classes from "./LineGraph.module.css"; 

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan 01", "Jan 15", "Feb 01", "Feb 15", "Mar 01", "Mar 15", "Apr 01", "Apr 15", "May 01", 
                "May 15", "Jun 01", "Jun 15", "Jul 01", "Jul 15", "Aug 01", "Aug 15", "Sep 01", "Sep 15", "Oct 01", "Oct 15", "Nov 01", "Nov 15", "Dec 01", "Dec 15", "Dec 30"],
                datasets: [
                    {
                        label: "Bitcoin rate",
                        data: [6000, 8700, 10050,6000, 8700, 10050,6000, 8700, 10050,6000, 8700, 10050,6000, 
                            700, 10050,6000, 8700, 10050,6000, 8700, 10050,6000, 8700, 10050,6000],
                        fill: false,
                        borderColor: '#F3B431',
                    },
                    {
                        label: "Ethereum rate",
                        data: [200, 250, 600,200, 250, 600,200, 250, 600,200, 250, 600,200, 250, 600,200, 250, 600,200, 250, 600,200, 250, 600,200,],
                        fill: false,
                        borderColor: '#0A79DF',
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }],
                    yAxes: [{
                        ticks: { display: true },
                        gridLines: {
                            display: true,
                            drawBorder: true
                        }
                    }]
                },
            }
        });
        Chart.defaults.global.defaultFontColor='#24211b';
        Chart.defaults.global.labelFontColor='red';
        Chart.defaults.global.devicePixelRatio=1000;
        Chart.defaults.global.legend.display = true;
        Chart.defaults.global.elements.line.tension = 1;
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}