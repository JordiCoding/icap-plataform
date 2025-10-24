import React from 'react';
import ReusableHero from '../common/ReusableHero';

const ReusableHeroTest: React.FC = () => {
  return (
    <div>
      <h1>Testing ReusableHero Component</h1>
      <ReusableHero
        title="Test Title"
        subtitle="Test Subtitle"
        backgroundType="image"
        backgroundSrc="/images/hero-background.jpg"
        layout="centered"
        enableAnimations={false}
      />
    </div>
  );
};

export default ReusableHeroTest;
