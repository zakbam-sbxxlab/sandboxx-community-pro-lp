import Navbar from './Navbar';
import ValueStatement from './ValueStatement';
import Features from './Features';
import CommunityPreview from './CommunityPreview';
import Reviews from './Reviews';
import AnimatedRotate from './AnimatedRotate';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Footer from './Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-brand-dust relative selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main className="pt-24">
        <CommunityPreview />
        <ValueStatement />
        <Features />
        <Reviews />
        <Pricing />
        <AnimatedRotate />
        <FAQ />
      </main>
      <div className="bg-[#3B82F6]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
