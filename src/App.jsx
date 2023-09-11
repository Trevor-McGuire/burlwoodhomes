import Nav from "./routes/Nav";
import Header from "./routes/Header";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Map from "./routes/Map";
import Footer from "./routes/Footer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        <Projects />
        <About />
        <Contact />
        <Map />
      </div>
      <Footer />
    </>
  );
}

export default App;
