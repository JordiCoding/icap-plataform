import React from 'react';

// Export types at the top level
export type LayoutType = 'platform-access' | 'three-row' | 'two-side' | 'murabaha-four' | 'investment-strategy';

export type LayoutVariant = 'demo' | 'production' | 'slide';

interface GridLayoutProps {
  type: LayoutType;
  variant?: LayoutVariant;
  cards: React.ReactNode[];
  gap?: number;
  showControls?: boolean;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  type,
  variant = 'production',
  cards,
  gap = 24,
  showControls = false,
  className = ''
}) => {
  const renderLayout = () => {
    if (type === 'platform-access') {
      return (
        <div 
          className="w-full flex flex-col gap-6 lg:flex-row justify-center items-center lg:items-stretch"
          style={{ gap: `${gap}px` }}
        >
          <div className="w-[300px]">{cards[0]}</div>
          <div className="w-[405px] flex flex-col gap-6">
            <div>{cards[1]}</div>
            <div>{cards[2]}</div>
          </div>
          <div className="w-[300px]">{cards[3]}</div>
        </div>
      );
    }

    if (type === 'three-row') {
      return (
        <div 
          className="flex flex-wrap justify-center gap-6"
          style={{ gap: `${gap}px` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-[310px] h-[324px]">{card}</div>
          ))}
        </div>
      );
    }

    if (type === 'two-side') {
      return (
        <div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          style={{ gap: `${gap}px` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-1">{card}</div>
          ))}
        </div>
      );
    }

    if (type === 'murabaha-four') {
      return (
        <div 
          className="flex flex-wrap justify-center gap-6"
          style={{ gap: `${gap}px` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-[275px] h-[330px]">{card}</div>
          ))}
        </div>
      );
    }

    if (type === 'investment-strategy') {
      return (
        <div className="flex flex-col gap-6">
          {/* Top row - Platform Access layout */}
          <div 
            className="w-full flex flex-col gap-6 lg:flex-row justify-center items-center lg:items-stretch"
            style={{ gap: `${gap}px` }}
          >
            <div className="w-[300px]">{cards[0]}</div>
            <div className="w-[405px] flex flex-col gap-6">
              <div>{cards[1]}</div>
              <div>{cards[2]}</div>
            </div>
            <div className="w-[300px]">{cards[3]}</div>
          </div>
          
          {/* Bottom row - 2 cards centered */}
          <div 
            className="w-full flex justify-center gap-6"
            style={{ gap: `${gap}px` }}
          >
            <div className="w-[514px]">{cards[4]}</div>
            <div className="w-[514px]">{cards[5]}</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`w-full max-w-[1300px] mx-auto px-4 ${className}`}>
      {variant === 'demo' && showControls && (
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {(['platform-access', 'three-row', 'two-side', 'murabaha-four', 'investment-strategy'] as LayoutType[]).map((layoutType) => (
            <button
              key={layoutType}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                type === layoutType
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {layoutType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      )}
      {renderLayout()}
    </div>
  );
};

export default GridLayout; 