
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InstitutesSection from '@/components/InstitutesSection';
import CompaniesSection from '@/components/CompaniesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InstitutesSection />
        <CompaniesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
