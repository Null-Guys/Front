import { useState, useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';
import LineChart from './Charts/LineChart';
import BasicColumnChart from './Charts/BasicColumnChart';
import styled from 'styled-components';

export default function Test() {
  const wrapperRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  // 컴포넌트가 렌더링될 때, 화면 크기 변화가 감지될 때 차트 너비를 업데이트
  useEffect(() => {
    const updateChartWidth = () => {
      // console.log(wrapperRef.current.offsetWidth); // Wrapper의 너비 출력
      if (wrapperRef.current) {
        setChartWidth(wrapperRef.current.offsetWidth - 500);
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
      <LineChart chartWidth={chartWidth} />
      <BasicColumnChart chartWidth={chartWidth} />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
