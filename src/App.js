import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tour from "./components/Tour";
import Footer from "./components/Footer";

function App() {
  console.log("hello");
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tour />
    <Footer />
  </>
  );
}

export default App;
