import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/hero-section/heroSection";
import FirstSection from "./components/first-section/firstSection";
import SecondSection from "./components/second-section/secondSection";
import ThirdSection from "./components/third-section/thirdSection";
import FourthSection from "./components/fourth-section/fourthSection";
import FifthSection from "./components/fifth-section/fifthSection";
// import SixthSection from "./components/sixth-section/sixthSection";
import Footer from "./components/footer/footer";
import SeventhSection from "./components/seventh-section/seventhSection";

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      {/* <SixthSection /> */}
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default Homepage;
