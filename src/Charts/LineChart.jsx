import Chart from 'react-apexcharts'; // React용 ApexCharts
import ApexCharts from 'apexcharts'; // ApexCharts 핵심 라이브러리

const LineChartOptions = {
  chart: {
    type: 'line', // 차트 유형을 라인 차트로 설정
    fontFamily: 'Pretendard, sans-serif', // 차트 폰트
    toolbar: {
      show: true, // 툴바 표시 여부
      tools: {
        zoom: true, // 확대 툴
        zoomin: true, // 확대 버튼
        zoomout: true, // 축소 버튼
        download: true, // 이미지 다운로드 버튼
        pan: true, // 팬 이동 가능 여부
        reset: true, // 차트 초기화 버튼
        selection: true, // 선택 도구 활성화 여부
      },
    },
  },
  title: {
    text: 'Line Chart', // 차트 타이틀 텍스트
    align: 'center', // 타이틀 위치
    margin: 5, // 타이틀과 차트 간의 여백
    offsetY: 0, // Y축 기준으로 타이틀 위치 조정
    style: {
      // fontFamily: 'Pretendard, sans-serif', // 타이틀 폰트
      fontSize: '25px', // 타이틀 텍스트 크기
      color: '#333333', // 타이틀 텍스트 색상
    },
  },
  dataLabels: {
    enabled: false, // 데이터 라벨 표시 여부
    offsetX: -3, // 라벨의 X축 위치를 조정
    offsetY: 0, // 라벨의 Y축 위치를 조정
  },
  stroke: {
    curve: 'smooth', // 곡선형 라인 적용
  },
  xaxis: {
    tickAmount: 10, // X축에 표시될 틱의 수
    labels: {
      show: true, // 라벨 표시 여부
      rotate: 0, // 라벨 회전 각도
      style: {
        // fontSize: '14px',
        // fontFamily: 'Pretendard, sans-serif',
        colors: ['#000', '#000', '#000', '#000'],
      },
    },
  },
  yaxis: {
    labels: {
      show: true, // 라벨 표시 여부
      rotate: 0, // 라벨 회전 각도
      style: {
        // fontSize: '14px',
        // fontFamily: 'Pretendard, sans-serif',
        colors: ['#000', '#000', '#000', '#000'],
      },
    },
  },
  legend: {
    show: true, // 범례 표시 여부
    position: 'bottom', // 범례 위치
    labels: {
      style: {
        // fontFamily: 'Pretendard, sans-serif',
      },
    },
  },
  tooltip: {
    enabled: true, // 툴팁 활성화 여부
    shared: true, // 여러 시리즈의 데이터 값을 동시에 툴팁에 표시
  },
  colors: [
    // 데이터 컬러 리스트
    '#008FFB', // ApexChart에서 기본값으로 사용하는 색상을 일단 적용해 놓았음
    '#00E396',
    '#FEB019',
    '#FF4560',
    '#775DD0',
    '#3F51B5',
    '#4CAF50',
    '#F9CE1D',
    '#33B2DF',
    '#D4526E',
  ],
  // 반응형 디자인 옵션
  // responsive: [
  //   {
  //     breakpoint: 99999,
  //     options: {
  //       chart: { width: '100%' }, // 차트 너비 100%로 설정
  //     },
  //   },
  //   {
  //     breakpoint: 768, // 📌 768px 이하일 때
  //     options: {
  //       chart: { width: '100%' }, // 차트 너비 100%로 설정
  //       legend: { position: 'bottom' }, // 범례를 아래쪽으로 이동
  //     },
  //   },
  //   {
  //     breakpoint: 480, // 📌 480px 이하일 때
  //     options: {
  //       chart: { width: 300 }, // 고정 너비로 변경
  //       legend: { show: false }, // 범례 숨김
  //     },
  //   },
  // ],
};

const LineChartData = [
  {
    name: 'data A',
    data: [
      { x: 1, y: 0.6 },
      { x: 2, y: 7.9 },
      { x: 9, y: 21.7 },
      { x: 10, y: 16.5 },
    ],
  },
  {
    name: 'data B',
    data: [
      { x: 1, y: 8.1 },
      { x: 2, y: 6.3 },
      { x: 9, y: 25.7 },
      { x: 10, y: 15.2 },
    ],
  },
  {
    name: 'data C',
    data: [
      { x: 1, y: 4.8 },
      { x: 2, y: 3.2 },
      { x: 9, y: 12.8 },
      { x: 10, y: 7.6 },
    ],
  },
  {
    name: 'data D',
    data: [
      { x: 1, y: 5.7 },
      { x: 2, y: 9.9 },
      { x: 9, y: 22.9 },
      { x: 10, y: 11.4 },
    ],
  },
];

export default function LineChart({ chartWidth }) {
  return (
    <Chart
      type="line" // 차트 유형 지정
      options={LineChartOptions} // 차트 옵션 적용
      series={LineChartData} // 차트 데이터 적용
      width={chartWidth} // 차트 너비 설정
      // height={400} // 차트 높이 설정
    />
  );
}
