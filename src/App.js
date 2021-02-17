import './App.css';
import About from './components/About';
import Booking from './components/Booking';
import Column from './components/Column';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import SectionTours from './components/SectionTours';
import Stories from './components/Stories';

function App() {
  return (
    <div >
      <Header/>
      {/* <Column/> */}
      <main>
      <About/>
      <FeaturesSection/>
      <SectionTours/>
      <Stories/>
      <Booking/>
      </main>
    </div>
  );
}

export default App;
