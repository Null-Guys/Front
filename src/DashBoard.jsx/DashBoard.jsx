import styled from 'styled-components';
import SensorStats from './SensorStats';
import LineChart from '../Charts/LineChart';
import Scatter from '../Charts/Scatter';

export default function DashBoard() {
  return (
    <DashBoardWrapper>
      <StatsWrapper>
        <SensorStats />
      </StatsWrapper>
      <ChartWrapper>
        <LineChart style={{ flex: '1' }} />
        <Scatter style={{ flex: '1' }} />
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
