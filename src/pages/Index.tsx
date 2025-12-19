import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import VideoSection from "@/components/VideoSection";
import ProgramSection from "@/components/ProgramSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CoursesSection />
      <VideoSection />
      <ProgramSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
