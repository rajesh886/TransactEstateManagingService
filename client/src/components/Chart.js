import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import './Chart.css';

function Chart(props) {

    const [deviceNum, setDeviceNum] = useState([]);
    const [offlineCount, setOfflineCount] = useState([]);
    const [onlineCount, setOnlineCount] = useState([]);

    useEffect(() => {
        setDeviceNum(props.deviceCategory)
        setOfflineCount(props.deviceOfflineCount)
        setOnlineCount(props.deviceOnlineCount)
    })

    const chartData = {
        labels: ['Campus Access Devices', 'Point of Sale', 'Door Access', 'Video Survelliance', 'Smart Terminals'],
        datasets: [
            {
                data:
                    [
                        deviceNum.campusAccessDevices,
                        deviceNum.pointofSale,
                        deviceNum.doorAccess,
                        deviceNum.VideoSurvillance,
                        deviceNum.SmartTerminals
                    ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    }

    const onlineOfflineData = {
        labels: ['Online', 'Offline'],
        datasets: [
            {
                data:
                    [
                        onlineCount,
                        offlineCount
                    ],
                backgroundColor: [
                    'rgb(0,128,0)',
                    'rgb(255,0,0)'
                ]
            }
        ]
    }

    return (
        <div className="chart">
            <div id="PieChart">
                <Pie data={onlineOfflineData}
                    options={{
                        title: {
                            display: true,
                            text: 'Device Statuses',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        label: {
                            display: false
                        },

                    }}
                />
            </div>
            <div id="BarChart">
                <Bar data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Devices by Type',
                            fontSize: 25
                        },
                        legend: {
                            display: false,
                        },
                        responsive: true,
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Chart;
