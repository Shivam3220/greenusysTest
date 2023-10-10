import './App.css';
import Footer from './Components/Footer';
import MapImage from './Components/MapImage';
import MoreService from './Components/MoreService';
import Navbar from './Components/Navbar';
import SimpleSteps from './Components/SimpleSteps';
import Slickslider from './Components/Slickslider';
import TopBanquet from './Components/TopBanquet';

function App() {
  return (
    <>
    <Navbar />
    <Slickslider/>
    <TopBanquet/>
    <SimpleSteps/>
    <MapImage/>
    <MoreService/>
    <Footer/>
    </>
  );
}

export default App;
