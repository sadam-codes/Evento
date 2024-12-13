import Slider from "./HomeComponents/Slider";
import Navbar from "./HomeComponents/Navbar";
import Date from "./HomeComponents/Date";
import Counter from "./HomeComponents/Counter";
import AboutEvent from "./HomeComponents/AboutEvent";
import FourCards from "./HomeComponents/FourCards";
import Speaker from "./HomeComponents/Speaker";
import Pricing from "./HomeComponents/Pricing";
import NextEvent from "./HomeComponents/NextEvent";
import Partners from "./HomeComponents/Partners";
import GetTicket from "./HomeComponents/GetTicket";
import EISdsection from "./HomeComponents/EISdsection";
import Footer from "./HomeComponents/Footer";
import Hello from "./HomeComponents/Hello";

function Home() {
  return (
    <>
      <div className="background">
        <Navbar />
        <Slider />
      </div>
      <Date />
      <Counter />
      <AboutEvent />
      <FourCards />
      {/* <Speaker /> */}
      <Hello />
      <Pricing />
      <NextEvent />
      <Partners />
      <GetTicket />
      <EISdsection />
      <Footer />
    </>
  );
}

export default Home;
