import React from 'react';
import { useTypography } from '../../hooks/useTypography';
import MiniGraph from './MiniGraph';

interface LocalMarketCardProps {
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  chartType: 'positive' | 'negative' | 'neutral';
  lastUpdate: string;
}

const LocalMarketCard: React.FC<LocalMarketCardProps> = ({
  symbol,
  value,
  change,
  changePercent,
  chartType,
  lastUpdate
}) => {
  const { getTypographyClasses } = useTypography();

  // Determine colors based on change
  const isPositive = change > 0;
  const isNeutral = change === 0;
  const changeColor = isPositive ? '#519644' : isNeutral ? '#6B7280' : '#A7001E';

  // Format numbers
  const formattedValue = value.toLocaleString('en-US', { minimumFractionDigits: 2 });
  const formattedChange = Math.abs(change).toLocaleString('en-US', { minimumFractionDigits: 2 });
  const formattedPercent = Math.abs(changePercent).toFixed(2);

  // Change sign and arrow
  const changeSign = isPositive ? '+' : isNeutral ? '' : '-';

  // Calculate last update time (current time minus 5 minutes)
  const now = new Date();
  now.setMinutes(now.getMinutes() - 5);
  const pad = (n: number) => n.toString().padStart(2, '0');
  const lastUpdateTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  return (
    <div 
      className="w-[268px] h-[360px] rounded-[32px] bg-white p-6 flex flex-col"
      style={{
        boxShadow: '0 4px 32px 0 rgba(94, 45, 0, 0.04)'
      }}
    >
      {/* Market Symbol */}
      <div className="mb-4">
        <h3
          className={getTypographyClasses('title')}
          style={{ fontSize: 28, color: '#635E5E', textAlign: 'center', letterSpacing: 0 }}
        >
          {symbol}
        </h3>
      </div>

      {/* Mini Graph */}
      <div className="flex-1 mb-6 flex items-center justify-center">
        <MiniGraph trend={chartType} />
      </div>

      {/* Current Value */}
      <div className="mb-4">
        <div className={`text-3xl font-bold text-black ${getTypographyClasses('title')}`}>{formattedValue}</div>
      </div>

      {/* Change Information */}
      <div className="mb-4">
        <div className="flex items-center justify-center gap-2">
          <div 
            className="font-body-en font-light text-lg"
            style={{ color: changeColor, textAlign: 'center' }}
          >
            {changeSign}{formattedChange} ({changeSign}{formattedPercent}%)
          </div>
          {isPositive && (
            <img 
              src="/images/icons/positivechart.png"
              alt="up"
              className="w-6 h-6"
              style={{ width: 24, height: 24 }}
            />
          )}
          {!isPositive && !isNeutral && (
            <img 
              src="/images/icons/negativechart.png"
              alt="down"
              className="w-6 h-6"
              style={{ width: 24, height: 24 }}
            />
          )}
        </div>
      </div>

      {/* Last Update */}
      <div className="mt-auto">
        <div className={`text-sm text-gray-500 ${getTypographyClasses('body')}`}>Last Update - {lastUpdateTime}</div>
      </div>
    </div>
  );
};

export default LocalMarketCard;
