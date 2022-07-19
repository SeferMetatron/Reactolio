import "./App.css";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Main from "./components/Main/main";
import Gallery from "./components/Gallery/gallery";
import Hero from "./components/Hero/hero";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
