import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import CalculatorPage from './pages/CalculatorPage';
import RealEstate from './pages/RealEstate';
import Brokerage from './pages/Brokerage';
import LocalMarket from './pages/LocalMarket';
import InternationalMarkets from './pages/InternationalMarkets';
import MarginLending from './pages/MarginLending';
import AssetManagement from './pages/AssetManagement';
import InvestmentBanking from './pages/InvestmentBanking';
import NewsDetailPage from './pages/NewsDetailPage';
import Testing from './components/testing/Testing';
import PromotionModal from './components/common/PromotionModal';
import { usePromotionPopup } from './hooks/usePromotionPopup';
import { useScrollToTop } from './hooks/useScrollToTop';
import './utils/i18n'; // Initialize i18n

function App() {
  const { popup, isVisible, closePopup } = usePromotionPopup();
  useScrollToTop(); // Scroll to top on route changes

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brokerage" element={<Brokerage />} />
        <Route path="/local-market" element={<LocalMarket />} />
        <Route path="/international-markets" element={<InternationalMarkets />} />
        <Route path="/margin-lending" element={<MarginLending />} />
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/investment-banking" element={<InvestmentBanking />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/newsroom" element={<PlaceholderPage title="Newsroom" />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
      
      {/* Promotion Popup */}
      {popup && (
        <PromotionModal
          popup={popup}
          isVisible={isVisible}
          onClose={closePopup}
        />
      )}
    </Layout>
  );
}

export default App;
