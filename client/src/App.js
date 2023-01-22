import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import NavBar from './components/NavBar';
import Main from './views/Main';
import BuildOne from './components/BuildOne-Form';
import UpdateForm from './components/UpdateForm';
import BoardBrands from './components/BoardBrands';
import GripBrands from './components/GripBrands'
import TruckBrands from './components/TruckBrands'
import WheelBrands from './components/WheelBrands'
import BearingsBrands from './components/BearingsBrands'
import Culture from './components/Culture';
// import Videos from './components/Videos'; | FUTURE DEVELOPMENT
import OneBoard from './components/OneBoard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          
          <Route path='/display' element={<> <NavBar /> <Main /> </>} />

          <Route path='/setup/:id' element={<> <NavBar /> <OneBoard />  </> } />
          
          <Route path='/boards/new' element={<> <NavBar /> <BuildOne /> </>} />

          <Route path='/setup/update/:id' element={<> <NavBar /> <UpdateForm /> </>} />
          
          <Route path='/brands/boards' element={<> <NavBar /> <BoardBrands /> </>} />
          <Route path='/brands/grip' element={<> <NavBar /> <GripBrands /> </>} />
          <Route path='/brands/trucks' element={<> <NavBar /> <TruckBrands /> </>} />
          <Route path='/brands/wheels' element={<> <NavBar /> <WheelBrands /> </>} />
          <Route path='/brands/bearings' element={<> <NavBar /> <BearingsBrands /> </>} />
          
          <Route path='/culture' element={<> <NavBar /> <Culture /> </>} />
          
          {/* <Route path='/videos' element={<> <NavBar /> <Videos /> </>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
