import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ChatBot from './components/ChatBot';
import Cart from './components/Cart';
import TradingCardMarketplace from './components/TradingCardMarketplace';
import EntrepreneurDashboard from './pages/dashboard/EntrepreneurDashboard';
import VendorSignup from './pages/vendor/VendorSignup';
import AdminDashboard from './pages/admin/Dashboard';
import ThankYou from './pages/ThankYou';

// Main Navigation Pages
import HowWeCreateChange from './pages/how-we-create-change';
import WhyItMatters from './pages/why-it-matters';
import HowYouCanHelp from './pages/how-you-can-help';

// How We Create Change
import FinancialCapital from './pages/how-we-create-change/FinancialCapital';
import HumanCapital from './pages/how-we-create-change/HumanCapital';
import SocialCapital from './pages/how-we-create-change/SocialCapital';
import Journey from './pages/how-we-create-change/Journey';

// Why It Matters
import AboutUs from './pages/why-it-matters/AboutUs';
import Mission from './pages/why-it-matters/Mission';
import AfricasPotential from './pages/why-it-matters/AfricasPotential';
import Blog from './pages/why-it-matters/Blog';

// How You Can Help
import EntertainmentApp from './pages/how-you-can-help/EntertainmentApp';
import Donate from './pages/how-you-can-help/Donate';
import Apparel from './pages/how-you-can-help/Apparel';
import Sweepstakes from './pages/how-you-can-help/Sweepstakes';
import Subscriptions from './pages/how-you-can-help/Subscriptions';
import Games from './pages/how-you-can-help/Games';
import Courses from './pages/how-you-can-help/Courses';
import SaharanTrail from './pages/how-you-can-help/games/SaharanTrail';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            
            {/* Main Navigation Routes */}
            <Route path="/how-we-create-change" element={<HowWeCreateChange />} />
            <Route path="/why-it-matters" element={<WhyItMatters />} />
            <Route path="/how-you-can-help" element={<HowYouCanHelp />} />
            
            {/* How We Create Change */}
            <Route path="/how-we-create-change/financial-capital" element={<FinancialCapital />} />
            <Route path="/how-we-create-change/human-capital" element={<HumanCapital />} />
            <Route path="/how-we-create-change/social-capital" element={<SocialCapital />} />
            <Route path="/how-we-create-change/journey" element={<Journey />} />
            
            {/* Why It Matters */}
            <Route path="/why-it-matters/about-us" element={<AboutUs />} />
            <Route path="/why-it-matters/mission" element={<Mission />} />
            <Route path="/why-it-matters/africas-potential" element={<AfricasPotential />} />
            <Route path="/why-it-matters/blog" element={<Blog />} />
            
            {/* How You Can Help */}
            <Route path="/how-you-can-help/entertainment" element={<EntertainmentApp />} />
            <Route path="/chip-in" element={<Donate />} />
            <Route path="/how-you-can-help/donate" element={<Donate />} />
            <Route path="/how-you-can-help/apparel" element={<Apparel />} />
            <Route path="/how-you-can-help/sweepstakes" element={<Sweepstakes />} />
            <Route path="/how-you-can-help/subscriptions" element={<Subscriptions />} />
            <Route path="/how-you-can-help/games" element={<Games />} />
            <Route path="/how-you-can-help/courses" element={<Courses />} />
            <Route path="/how-you-can-help/games/saharan-trail" element={<SaharanTrail />} />
            <Route path="/trading-cards/marketplace" element={<TradingCardMarketplace />} />
            
            {/* Vendor */}
            <Route path="/vendor-signup" element={<VendorSignup />} />
            
            {/* Dashboard */}
            <Route path="/dashboard" element={<EntrepreneurDashboard />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Thank You Page */}
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
        <Cart />
      </div>
    </Router>
  );
}

export default App;