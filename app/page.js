import FeaturesHowItWorks from "./_components/Fnh";
import Footer from "./_components/Footer";
import Landing from "./_components/Landing";
import Navbar from "./_components/Navbar";


export default function Home() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div>
        <Landing />
        <FeaturesHowItWorks />
      </div>
      <footer>
       <Footer />
      </footer>
    </div>
  );
}
