import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Column from './components/Column';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Popup from './components/Popup';
import SectionTours from './components/SectionTours';
import Stories from './components/Stories';

function App() {
  return (
    <div >
      <Navigation/>
      <Header/>
      {/* <Column/> */}
      <main>
      <About/>
      <FeaturesSection/>
      <SectionTours/>
      <Stories/>
      <Booking/>
      </main>
      <footer>
        <Footer/>
      </footer>
      <Popup/>
    </div>
  );
}

export default App;
