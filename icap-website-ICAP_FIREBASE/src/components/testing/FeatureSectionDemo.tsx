import React, { useState } from 'react';
import FeatureSection from '../ui/FeatureSection';
import type { FeatureItem } from '../ui/FeatureSection';

// Sample data for demonstration
const sampleItems: FeatureItem[] = [
  {
    id: '1',
    icon: '/images/why-arrow.webm',
    title: 'whyAlistithmar.secureTitle',
    description: 'whyAlistithmar.secureDescription',
    alt: 'Secure & Trusted'
  },
  {
    id: '2',
    icon: '/images/why-invest.webm',
    title: 'whyAlistithmar.shariaTitle',
    description: 'whyAlistithmar.shariaDescription',
    alt: 'Shariah-Compliant Options'
  },
  {
    id: '3',
    icon: '/images/why-circle.webm',
    title: 'whyAlistithmar.globalTitle',
    description: 'whyAlistithmar.globalDescription',
    alt: 'Global Reach, Local Roots'
  },
  {
    id: '4',
    icon: '/images/why-arrow.webm',
    title: 'whyAlistithmar.secureTitle',
    description: 'whyAlistithmar.secureDescription',
    alt: 'Fourth Feature'
  },
  {
    id: '5',
    icon: '/images/why-invest.webm',
    title: 'whyAlistithmar.shariaTitle',
    description: 'whyAlistithmar.shariaDescription',
    alt: 'Fifth Feature'
  },
  {
    id: '6',
    icon: '/images/why-circle.webm',
    title: 'whyAlistithmar.globalTitle',
    description: 'whyAlistithmar.globalDescription',
    alt: 'Sixth Feature'
  }
];

type VariantType = 'three-items' | 'four-items' | 'slider';

const FeatureSectionDemo: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<VariantType>('three-items');

  const getItemsForVariant = (variant: VariantType) => {
    switch (variant) {
      case 'three-items':
        return sampleItems.slice(0, 3);
      case 'four-items':
        return sampleItems.slice(0, 4);
      case 'slider':
        return sampleItems; // All 6 items for slider
      default:
        return sampleItems.slice(0, 3);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Controls */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            FeatureSection Component Demo
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedVariant('three-items')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedVariant === 'three-items'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              3 Items (Grid)
            </button>
            
            <button
              onClick={() => setSelectedVariant('four-items')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedVariant === 'four-items'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              4 Items (Grid)
            </button>
            
            <button
              onClick={() => setSelectedVariant('slider')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedVariant === 'slider'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Slider (6+ Items)
            </button>
          </div>
          
          <div className="mt-2 text-sm text-gray-600">
            Current variant: <span className="font-medium">{selectedVariant}</span> | 
            Items: <span className="font-medium">{getItemsForVariant(selectedVariant).length}</span>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <FeatureSection
        title="whyAlistithmar.title"
        subtitle="whyAlistithmar.subtitle"
        items={getItemsForVariant(selectedVariant)}
        variant={selectedVariant}
        titleHighlight="Why"
        titleHighlightColor="#F3B660"
      />
    </div>
  );
};

export default FeatureSectionDemo;
