import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SensorStats from './SensorStats';
import LifePredictionChart from '../Charts/LifePredictionChart';
import FailurePredictionChart from '../Charts/FailurePredictionChart';

export default function DashBoard() {
  const wrapperRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  // 컴포넌트가 렌더링될 때, 화면 크기 변화가 감지될 때 차트 너비를 업데이트
  useEffect(() => {
    const updateChartWidth = () => {
      console.log(window.innerWidth * 0.8 * 0.5); // 차트 너비 출력
      if (wrapperRef.current) {
        setChartWidth(window.innerWidth * 0.8 * 0.5);
        // 전체 화면 너비의 80%, 가로로 차트 2개이므로 /2
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
    <DashBoardWrapper>
      <StatsWrapper>
        <SensorStats />
      </StatsWrapper>
      <ChartWrapper>
        <LifePredictionChart chartWidth={chartWidth} />
        <FailurePredictionChart chartWidth={chartWidth} />
      </ChartWrapper>
    </DashBoardWrapper>
  );
}

const DashBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const StatsWrapper = styled.div`
  display: flex;
`;

const ChartWrapper = styled.div`
  display: flex;
  margin-top: 28px;
`;
