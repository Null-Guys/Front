import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';

export default function PieChart({ chartWidth }) {
  const [content, setContent] = useState({
    series: [44, 55, 13, 33],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
    },
  });

  function appendData() {
    let arr = content.series.slice();
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

    setContent({
      ...content,
      series: arr,
    });
  }

  function removeData() {
    if (content.series.length === 1) return;

    let arr = content.series.slice();
    arr.pop();

    setContent({
      ...content,
      series: arr,
    });
  }

  function randomize() {
    setContent({
      ...content,
      series: content.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      }),
    });
  }

  function reset() {
    setContent({
      ...content,
      series: [44, 55, 13, 33],
    });
  }

  return (
    <div>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={content.options}
              series={content.series}
              type="donut"
              width={chartWidth}
            />
          </div>
        </div>

        <ButtonWrapper>
          <button onClick={() => appendData()}>ADD</button>
          <button onClick={() => removeData()}>REMOVE</button>
          <button onClick={() => randomize()}>RANDOMIZE</button>
          <button onClick={() => reset()}>RESET</button>
        </ButtonWrapper>
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
`;
