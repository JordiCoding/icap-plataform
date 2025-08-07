import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GridCard from '../ui/GridCard';
import GridLayout from '../ui/GridLayout';
import type { LayoutType } from '../ui/GridLayout';

// Simple test card component
const TestCard: React.FC<{
  title: string;
  subtitle: string;
  width: string;
  height: string;
  bgColor: string;
}> = ({ title, subtitle, width, height, bgColor }) => {
  return (
    <div 
      className={`${width} ${height} ${bgColor} rounded-lg p-6 flex flex-col justify-between`}
      style={{ border: '2px solid #333' }}
    >
      <div>
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded w-fit">
        Test Button
      </button>
    </div>
  );
};

const GridLayoutDemo: React.FC = () => {
  const [selectedLayout, setSelectedLayout] = useState<LayoutType>('platform-access');
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getCardsForLayout = (layout: LayoutType) => {
    switch (layout) {
      case 'platform-access':
        return [
                <GridCard
        key="mobile-app"
        title="gridCard.mobileApp.title"
        subtitle="gridCard.mobileApp.subtitle"
        buttonText="gridCard.mobileApp.button"
        variant="glassmorphism"
        backgroundImage="/images/cards/mobileapplication.png"
        align="bottom"
        height="h-[500px]"
        className="rounded-lg p-6"
      />,
          <GridCard
            key="web-platform"
            title="gridCard.webPlatform.title"
            subtitle="gridCard.webPlatform.subtitle"
            buttonText="gridCard.webPlatform.button"
            variant="flat"
            align="bottom"
            height="h-[240px]"
            className="rounded-lg"
          />,
          <GridCard
            key="direct-phone"
            title="gridCard.directPhone.title"
            subtitle="gridCard.directPhone.subtitle"
            buttonText="gridCard.directPhone.button"
            variant="flat"
            align="bottom"
            height="h-[240px]"
            className="rounded-lg"
          />,
          <GridCard
            key="trading-terminal"
            title="gridCard.tradingTerminal.title"
            subtitle="gridCard.tradingTerminal.subtitle"
            buttonText="gridCard.tradingTerminal.button"
            variant="glassmorphism"
            backgroundImage="/images/cards/tradingterminal.png"
            align="bottom"
            height="h-[500px]"
            className="rounded-lg p-6"
          />
        ];

      case 'three-row':
        return [
          <TestCard
            key="card-1"
            title="Card 1"
            subtitle="First card in three row layout"
            width="w-full"
            height="h-[300px]"
            bgColor="bg-blue-600"
          />,
          <TestCard
            key="card-2"
            title="Card 2"
            subtitle="Second card in three row layout"
            width="w-full"
            height="h-[300px]"
            bgColor="bg-green-600"
          />,
          <TestCard
            key="card-3"
            title="Card 3"
            subtitle="Third card in three row layout"
            width="w-full"
            height="h-[300px]"
            bgColor="bg-purple-600"
          />
        ];

      case 'two-side':
        return [
          <TestCard
            key="left-card"
            title="Left Card"
            subtitle="First card in two side layout"
            width="w-full"
            height="h-[400px]"
            bgColor="bg-blue-600"
          />,
          <TestCard
            key="right-card"
            title="Right Card"
            subtitle="Second card in two side layout"
            width="w-full"
            height="h-[400px]"
            bgColor="bg-green-600"
          />
        ];

      case 'murabaha-four':
        return [
          <TestCard
            key="murabaha-1"
            title="Murabaha 1"
            subtitle="First murabaha card"
            width="w-full"
            height="h-full"
            bgColor="bg-blue-600"
          />,
          <TestCard
            key="murabaha-2"
            title="Murabaha 2"
            subtitle="Second murabaha card"
            width="w-full"
            height="h-full"
            bgColor="bg-green-600"
          />,
          <TestCard
            key="murabaha-3"
            title="Murabaha 3"
            subtitle="Third murabaha card"
            width="w-full"
            height="h-full"
            bgColor="bg-purple-600"
          />,
          <TestCard
            key="murabaha-4"
            title="Murabaha 4"
            subtitle="Fourth murabaha card"
            width="w-full"
            height="h-full"
            bgColor="bg-red-600"
          />
        ];

      case 'investment-strategy':
        return [
          <GridCard
            key="strategy-1"
            title="gridCard.mobileApp.title"
            subtitle="gridCard.mobileApp.subtitle"
            buttonText="gridCard.mobileApp.button"
            variant="glassmorphism"
            backgroundImage="/images/mobileapplication.png"
            align="bottom"
            height="h-[500px]"
            className="rounded-lg p-6"
          />,
          <GridCard
            key="strategy-2"
            title="gridCard.webPlatform.title"
            subtitle="gridCard.webPlatform.subtitle"
            buttonText="gridCard.webPlatform.button"
            variant="flat"
            align="bottom"
            height="h-[240px]"
            className="rounded-lg"
          />,
          <GridCard
            key="strategy-3"
            title="gridCard.directPhone.title"
            subtitle="gridCard.directPhone.subtitle"
            buttonText="gridCard.directPhone.button"
            variant="flat"
            align="bottom"
            height="h-[240px]"
            className="rounded-lg"
          />,
          <GridCard
            key="strategy-4"
            title="gridCard.tradingTerminal.title"
            subtitle="gridCard.tradingTerminal.subtitle"
            buttonText="gridCard.tradingTerminal.button"
            variant="glassmorphism"
            backgroundImage="/images/tradingterminal.png"
            align="bottom"
            height="h-[500px]"
            className="rounded-lg p-6"
          />,
          <TestCard
            key="strategy-5"
            title="Strategy Card 1"
            subtitle="First additional strategy card"
            width="w-full"
            height="h-[300px]"
            bgColor="bg-blue-600"
          />,
          <TestCard
            key="strategy-6"
            title="Strategy Card 2"
            subtitle="Second additional strategy card"
            width="w-full"
            height="h-[300px]"
            bgColor="bg-green-600"
          />
        ];

      default:
        return [];
    }
  };

  const cards = getCardsForLayout(selectedLayout);

  return (
    <section ref={ref} className="py-16 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {selectedLayout.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h2>
          <p className="text-gray-400 text-lg">
            {selectedLayout === 'platform-access' && '1 Tall + 2 Stacked + 1 Tall (300px + 405px + 300px)'}
            {selectedLayout === 'three-row' && '3 Cards in a row'}
            {selectedLayout === 'two-side' && '2 Cards side by side'}
            {selectedLayout === 'murabaha-four' && '4 Cards in a grid (275px x 330px)'}
            {selectedLayout === 'investment-strategy' && 'Platform Access + 2 Additional Cards'}
          </p>
        </div>

        {/* Demo Controls */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {(['platform-access', 'three-row', 'two-side', 'murabaha-four', 'investment-strategy'] as LayoutType[]).map((layoutType) => (
            <button
              key={layoutType}
              onClick={() => setSelectedLayout(layoutType)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedLayout === layoutType
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {layoutType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Grid Layout Component */}
        <GridLayout
          type={selectedLayout}
          variant="production"
          cards={cards}
          showControls={false}
          gap={24}
        />
      </motion.div>
    </section>
  );
};

export default GridLayoutDemo; 