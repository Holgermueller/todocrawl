import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ToDos from "./components/ToDos";
import Crawler from "./components/Crawl";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
      <Crawler />
      <ToDos />

      <Footer />
    </div>
  );
}

export default App;
