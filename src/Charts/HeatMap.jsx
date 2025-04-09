import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function HeatMap({ chartWidth }) {
  const data = [
    // {
    //   name: '정상',
    //   data: [90, 80, 70, 60, 50, 40, 30],
    // },
    {
      name: '고장',
      data: [20, 30, 40, 50, 60, 70, 80],
    },
  ];

  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

  const [content, setContent] = useState({
    series: data,
    options: {
      chart: {
        height: 450,
        type: 'heatmap',
        fontFamily: 'Pretendard, sans-serif',
      },
      dataLabels: {
        enabled: false,
      },
      colors: colors,
      xaxis: {
        type: 'category',
        categories: [
          '모델명1',
          '모델명2',
          '모델명3',
          '모델명4',
          '모델명5',
          '모델명6',
          '모델명7',
        ],
      },
      title: {
        text: 'HeatMap Chart (Different color shades for each series)',
        align: 'center', // 가운데 정렬
        style: {
          fontSize: '16px',
          color: '#333333',
          fontWeight: 'bold',
        },
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={content.options}
          series={content.series}
          type="heatmap"
          width={600} // TODO: 고치기
          // width={chartWidth}
          height={450}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
