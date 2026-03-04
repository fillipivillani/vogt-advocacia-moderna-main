import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import History from "@/components/History";
import Office from "@/components/Office";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Specialties />
      <Team />
      <Testimonials />
      <History />
      <Office />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
