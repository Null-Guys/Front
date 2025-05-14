import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import NavBar from '../../Components/NavBar';
import SensorStats from '../../Components/SensorStats';
import LifePredictionChart from '../../Charts/LifePredictionChart';
import FailurePredictionChart from '../../Charts/FailurePredictionChart';
import CollapsibleTable from '../../Components/DataTable';
import { fetchInfo } from '../../API/fetchInfo';

export default function DashBoard() {
  const wrapperRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);

  const [info, setInfo] = useState(null);
  const [voltages, setVoltages] = useState([]);
  const [states, setStates] = useState([]);
  const [requestIdx, setRequestIdx] = useState(0); // 요청 순번

  // 컴포넌트가 렌더링될 때 화면 크기 변화가 감지될 때 차트 너비를 업데이트
  useEffect(() => {
    const updateChartWidth = () => {
      const el = document.getElementById('card');
      if (el) {
        const width = el.clientWidth - 40; // 양쪽 패딩 20px 빼기
        const height = el.clientHeight - 50; // 위아래 패딩 20px + 살짝 빼기
        setChartWidth(width);
        setChartHeight(height);
        // console.log('차트 너비:', width);
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
  }, [chartWidth]);

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const data = await fetchInfo(requestIdx);

        setInfo(data);
        console.log(data);
        setVoltages((prev) => {
          const next = [...prev, data.utot[1]];
          return next.length > 7 ? next.slice(-7) : next;
        });

        setStates((prev) => {
          const next = [data.isBreak, ...prev];
          return next.length > 7 ? next.slice(-7) : next;
        });

        // 다음 요청은 약간의 지연 후에 실행 (렌더링 보장)
        setTimeout(() => {
          if (requestIdx < 29) setRequestIdx((prev) => prev + 1);
        }, 100); // 100ms 정도면 충분
      } catch (error) {
        console.error('정보를 가져오는 데 실패했습니다:', error);
      }
    };

    if (requestIdx < 30) {
      loadInfo();
    }
  }, [requestIdx]);

  return (
    <Container>
      <NavBar />
      <DashBoardWrapper ref={wrapperRef}>
        <StatsWrapper>
          <SensorStats info={info} />
        </StatsWrapper>
        <ChartWrapper>
          <Card id="card">
            <LifePredictionChart
              chartWidth={chartWidth}
              chartHeight={chartHeight}
              voltages={voltages}
              requestIdx={requestIdx}
            />
          </Card>
          <Card>
            <FailurePredictionChart
              chartWidth={chartWidth}
              chartHeight={chartHeight}
              states={states}
              requestIdx={requestIdx}
            />
          </Card>
        </ChartWrapper>
        <Card style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ color: '#333333', fontWeight: 'bold', margin: ' 0 0 16px 8px' }}>상세 데이터</div>
          <CollapsibleTable style={{ margin: '0 -20px' }} />
        </Card>
      </DashBoardWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DashBoardWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 40px 0;
  margin-top: calc(40px + 56px); // 56px은 NavBar 높이
`;

const StatsWrapper = styled.div`
  display: flex;
`;

const ChartWrapper = styled.div`
  display: flex;
  margin: 28px 0;
  width: 80vw;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  padding: 20px;
  min-width: 0; //자식이 커져도 부모가 늘어나지 않음
  box-sizing: border-box; // padding이 너비에 포함되도록 처리
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
`;
