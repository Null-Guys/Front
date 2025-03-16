import Chart from 'react-apexcharts';
import { LineChartOptions } from './chartOptions/LineChartOption';
import { LineChartData } from './chartData/LineChartData';
import styled from 'styled-components';

export default function Test() {
  return (
    <ChartWrapper>
      <Chart
        type="line" // 차트 유형 지정
        options={LineChartOptions} // 차트 옵션 적용
        series={LineChartData} // 차트 데이터 적용
        width={'100%'} // 차트 너비 설정
        height={400} // 차트 높이 설정
      />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 100vw;
  display: grid;
`;
