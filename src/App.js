import './App.css';
import About from './components/About';
import Column from './components/Column';
import FeaturesSection from './components/FeaturesSection';
import Header from './components/Header';
import SectionTours from './components/SectionTours';

function App() {
  return (
    <div >
      <Header/>
      {/* <Column/> */}
      <main>
      <About/>
      <FeaturesSection/>
      <SectionTours/>
      </main>
    </div>
  );
}

export default App;
