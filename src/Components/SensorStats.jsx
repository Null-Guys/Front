import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CheckCircle, AlertTriangle, BarChart, ChevronsUp } from 'lucide-react';
import { fetchInfo } from '../API/fetchInfo';

export default function DashboardTopStats() {
  const [info, setInfo] = useState(null);
  const isLoading = !info;

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const data = await fetchInfo(0);
        // console.log(data); // 응답 데이터
        setInfo(data); // 상태에 저장
      } catch (error) {
        console.error('정보를 가져오는 데 실패했습니다:', error);
      }
    };

    loadInfo();
  }, []);

  return (
    <StatCardWrapper>
      <StatCard
        title="열화 지표"
        value={isLoading ? '로딩 중...' : `${info.SOH}%`}
        subtitle="SOH"
        valueColor={isLoading ? '#9ca3af' : '#22c55e'}
        icon={<CheckCircle size={20} color="#fff" />}
        iconColor="#22c55e"
      />
      <StatCard
        title="열화 속도"
        value={isLoading ? '로딩 중...' : `${info.VDR}`}
        subtitle="VDR"
        valueColor={isLoading ? '#9ca3af' : '#333333'}
        // icon={<BarChart size={20} color="#fff" />}
        icon={<ChevronsUp size={20} color="#fff" />}
        iconColor="#3b82f6"
      />
      <StatCard
        title="전압 임계값 이하 시점"
        value={isLoading ? '로딩 중...' : info.RUL === -1 ? '-' : `${info.RUL}분`}
        subtitle="RUL"
        valueColor={
          isLoading
            ? '#9ca3af' // 회색 (로딩 중)
            : info.RUL === -1
            ? '#333333' // -1일 때
            : '#ef4444' // 자연수일 때
        }
        icon={<AlertTriangle size={20} color="#fff" />}
        iconColor="#ef4444"
      />
      <StatCard
        title="교체 조건"
        value={isLoading ? '로딩 중...' : `${info.STT}`}
        subtitle="STT"
        valueColor={
          isLoading
            ? '#9ca3af' // 로딩 중
            : info.STT === '정상'
            ? '#22c55e'
            : info.STT === '경고'
            ? '#f97316'
            : '#ef4444' // 열화
        }
        icon={<BarChart size={20} color="#fff" />}
        iconColor="#0ea5e9" // 하늘색
      />
    </StatCardWrapper>
  );
}

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
