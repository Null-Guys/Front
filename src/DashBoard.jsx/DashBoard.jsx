import SensorStats from './SensorStats';
import styled from 'styled-components';

export default function DashBoard() {
  return (
    <DashBoardWrapper>
      <StatsWrapper>
        <SensorStats />
      </StatsWrapper>
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
