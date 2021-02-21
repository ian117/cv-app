import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CvBuilder from "./components/CvBuilder";

function App() {
  return (
    <div className="App">
      <Header/>
      <CvBuilder/>
      <Footer/>
    </div>
  );
}

export default App;
