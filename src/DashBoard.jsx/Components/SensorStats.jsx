import React from 'react';
import styled from 'styled-components';
import { CheckCircle, AlertTriangle, BarChart, Cpu } from 'lucide-react';

// 스타일 정의
const StatCardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);
  padding: 16px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const TextGroup = styled.div``;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333333;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 4px;
  color: ${(props) => props.valueColor || '#333333'};
`;

const Subtitle = styled.div`
  font-size: 13px;
  color: #9ca3af;
  margin-top: 2px;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || '#ccc'};
`;

const StatCard = ({ title, value, subtitle, valueColor, icon, iconColor }) => (
  <Card>
    <TextGroup>
      <Title>{title}</Title>
      <Value valueColor={valueColor}>{value}</Value>
      <Subtitle>{subtitle}</Subtitle>
    </TextGroup>
    <IconWrapper color={iconColor}>{icon}</IconWrapper>
  </Card>
);

export default function DashboardTopStats() {
  return (
    <StatCardWrapper>
      <StatCard
        title="실시간 센서 상태"
        value="98.5%"
        subtitle="정상 가동 중"
        valueColor="#22c55e"
        icon={<CheckCircle size={20} color="#fff" />}
        iconColor="#22c55e" // 초록색
      />
      <StatCard
        title="전체 센서 수"
        value="256"
        subtitle="개 설치"
        // icon={<BarChart size={20} color="#fff" />}
        icon={<Cpu size={20} color="#fff" />}
        iconColor="#3b82f6" // 파랑
      />
      <StatCard
        title="이상 감지 건수"
        value="12"
        subtitle="오늘"
        valueColor="#ef4444"
        icon={<AlertTriangle size={20} color="#fff" />}
        iconColor="#ef4444" // 빨강
      />
      <StatCard
        title="정상 가동률"
        value="99.2%"
        subtitle="지난 30일"
        icon={<BarChart size={20} color="#fff" />}
        iconColor="#0ea5e9" // 하늘색
      />
    </StatCardWrapper>
  );
}
