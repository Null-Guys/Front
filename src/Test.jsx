import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';
import LineChart from './Charts/LineChart';
import BasicColumnChart from './Charts/BasicColumnChart';
import styled from 'styled-components';

export default function Test() {
  return (
    <ChartWrapper>
      <LineChart />
      <BasicColumnChart />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
