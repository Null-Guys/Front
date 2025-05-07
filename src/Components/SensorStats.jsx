import React from 'react';
import styled from 'styled-components';
import { CheckCircle, AlertTriangle, BarChart, ChevronsUp } from 'lucide-react';

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
        title="열화 지표"
        value="98.5%"
        subtitle="SOH"
        valueColor="#22c55e"
        icon={<CheckCircle size={20} color="#fff" />}
        iconColor="#22c55e" // 초록색
      />
      <StatCard
        title="열화 속도"
        value="0.6"
        subtitle="VDR"
        // icon={<BarChart size={20} color="#fff" />}
        icon={<ChevronsUp size={20} color="#fff" />}
        iconColor="#3b82f6" // 파랑
      />
      <StatCard
        title="전압 임계값 이하 시점"
        value="12 min"
        subtitle="RUL"
        valueColor="#ef4444"
        icon={<AlertTriangle size={20} color="#fff" />}
        iconColor="#ef4444" // 빨강
      />
      {/* TODO: 나중에 정상/경고/열화 별로 색상 다르게? */}
      <StatCard
        title="교체 조건"
        value="정상"
        subtitle="STT"
        icon={<BarChart size={20} color="#fff" />}
        iconColor="#0ea5e9" // 하늘색
      />
    </StatCardWrapper>
  );
}
