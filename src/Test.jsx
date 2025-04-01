import { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';
import LineChart from './Charts/LineChart';
import BasicColumnChart from './Charts/BasicColumnChart';
import PieChart from './Charts/PieChart';
import styled from 'styled-components';
import chartCursor from '/chartCursor.png';

export default function Test() {
  const wrapperRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  // 컴포넌트가 렌더링될 때, 화면 크기 변화가 감지될 때 차트 너비를 업데이트
  useEffect(() => {
    const updateChartWidth = () => {
      // console.log(wrapperRef.current.offsetWidth); // Wrapper의 너비 출력
      if (wrapperRef.current) {
        setChartWidth(wrapperRef.current.offsetWidth * 0.5);
      }
    };

    const observer = new ResizeObserver(() => {
      updateChartWidth();
    });
    const paperElement = wrapperRef.current;
    if (paperElement) {
      observer.observe(paperElement); // 요소의 크기 변화를 감시
    }
    updateChartWidth();

    return () => {
      if (paperElement) {
        observer.unobserve(paperElement); // 컴포넌트가 언마운트될 때 감시 해제
      }
    };
  }, []);

  return (
    <ChartWrapper ref={wrapperRef}>
      <Wrapper>
        <LineChart chartWidth={chartWidth} />
        <BasicColumnChart chartWidth={chartWidth} />
      </Wrapper>
      <Wrapper>
        <PieChart chartWidth={chartWidth} />
      </Wrapper>
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin: 12vh 0 12vh 0;

  /* .apexcharts-canvas {
    cursor: url('/chartCursor.png');
  } */
  // TODO: 커서 색상 바꾸기
  .apexcharts-svg.apexcharts-zoomable.hovering-zoom {
    cursor: url('/chartCursor.png');
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;

  // > * 모든 직계 자손 선택
  > * {
    flex: 1;
  }
`;
