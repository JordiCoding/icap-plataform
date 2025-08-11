import React, { useRef, useEffect, useState } from 'react';

interface MiniGraphProps {
  trend: 'positive' | 'negative' | 'neutral';
}

const MiniGraph: React.FC<MiniGraphProps> = ({ trend }) => {
  // Chart dimensions
  const width = 130;
  const height = 75;
  const padding = 6;
  const chartHeight = height - padding * 2;
  const chartWidth = width - padding * 2;
  const pointsCount = 8;

  // Dramatic shapes for each trend
  let data: number[] = [];
  if (trend === 'positive') {
    data = [0.2, 0.4, 0.3, 0.6, 0.5, 0.7, 0.6, 1];
  } else if (trend === 'negative') {
    data = [1, 0.85, 0.8, 0.7, 0.75, 0.6, 0.65, 0.4];
  } else {
    data = [0.5, 0.55, 0.52, 0.6, 0.58, 0.62, 0.6, 0.65];
  }

  // Map data to SVG coordinates
  const stepX = chartWidth / (pointsCount - 1);
  const points = data.map((v, i) => [padding + i * stepX, padding + chartHeight * (1 - v)]);

  // Catmull-Rom to Bezier conversion for ultra-smooth curves
  function getCatmullRomPath(pts: number[][]) {
    if (pts.length < 2) return '';
    let d = `M ${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? i : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];
      const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
      const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
      const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
      const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`;
    }
    return d;
  }

  const linePath = getCatmullRomPath(points);

  // Build SVG path for the area (anchor to bottom)
  let areaPath = linePath;
  areaPath += ` L ${points[points.length - 1][0]},${height - padding}`; // bottom right
  areaPath += ` L ${points[0][0]},${height - padding}`; // bottom left
  areaPath += ' Z';

  // Animation refs and state
  const lineRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [areaVisible, setAreaVisible] = useState(false);

  useEffect(() => {
    if (lineRef.current) {
      const length = lineRef.current.getTotalLength();
      lineRef.current.style.strokeDasharray = String(length);
      lineRef.current.style.strokeDashoffset = String(length);
      // Trigger animation
      setTimeout(() => {
        setDrawn(true);
        setTimeout(() => setAreaVisible(true), 350); // Fade in area after line
      }, 100);
    }
  }, [linePath]);

  // Colors
  const colors = {
    positive: { stroke: '#519644', fill: 'url(#positiveGradient)' },
    negative: { stroke: '#A7001E', fill: 'url(#negativeGradient)' },
    neutral: { stroke: '#6B7280', fill: 'url(#neutralGradient)' }
  };
  const currentColors = colors[trend];

  return (
    <div className="w-[130px] h-[75px]">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}> 
        <defs>
          <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#519644" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#519644" stopOpacity="0.01"/>
          </linearGradient>
          <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A7001E" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#A7001E" stopOpacity="0.01"/>
          </linearGradient>
          <linearGradient id="neutralGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6B7280" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#6B7280" stopOpacity="0.01"/>
          </linearGradient>
        </defs>
        {/* Area fill */}
        <path 
          d={areaPath} 
          fill={currentColors.fill} 
          stroke="none" 
          style={{
            opacity: areaVisible ? 1 : 0,
            transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1) 0s'
          }}
        />
        {/* Line */}
        <path
          ref={lineRef}
          d={linePath}
          fill="none"
          stroke={currentColors.stroke}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{
            strokeDashoffset: drawn ? 0 : undefined,
            transition: drawn ? 'stroke-dashoffset 0.7s cubic-bezier(.4,0,.2,1)' : undefined
          }}
        />
      </svg>
    </div>
  );
};

export default MiniGraph;
