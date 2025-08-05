import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GridCard from '../ui/GridCard';
import GridLayout from '../ui/GridLayout';

const SlidePlatformAccess: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Platform Access cards
  const platformCards = [
    <GridCard
      key="mobile-app"
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
      key="web-platform"
      title="gridCard.webPlatform.title"
      subtitle="gridCard.webPlatform.subtitle"
      buttonText="gridCard.webPlatform.button"
      variant="glassmorphism"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
    />,
    <GridCard
      key="direct-phone"
      title="gridCard.directPhone.title"
      subtitle="gridCard.directPhone.subtitle"
      buttonText="gridCard.directPhone.button"
      variant="glassmorphism"
      align="center"
      height="h-[240px]"
      className="rounded-lg"
    />,
    <GridCard
      key="trading-terminal"
      title="gridCard.tradingTerminal.title"
      subtitle="gridCard.tradingTerminal.subtitle"
      buttonText="gridCard.tradingTerminal.button"
      variant="glassmorphism"
      backgroundImage="/images/tradingterminal.png"
      align="top"
      height="h-[500px]"
      className="rounded-lg p-6"
    />
  ];

  return (
    <section 
      ref={ref} 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/images/darkbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Chap Light' }}>
            Your Portfolio Always by Your Side
          </h2>
          <p className="text-gray-300 text-lg" style={{ fontFamily: 'Jokker Regular' }}>
            One platform, many ways to trade. All in your control.
          </p>
        </div>

        {/* Grid Layout Component */}
        <GridLayout
          type="platform-access"
          variant="production"
          cards={platformCards}
          showControls={false}
          gap={24}
        />
      </motion.div>
    </section>
  );
};

export default SlidePlatformAccess;