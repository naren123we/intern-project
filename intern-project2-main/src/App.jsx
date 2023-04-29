import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Rootlayout from './layout/Rootlayout';
import Benefits from './pages/Benefits';
import Home from './pages/Home';
import Info from './pages/Info';
import Nutritionalinfo from './pages/Nutritionalinfo';
import Processduration from './pages/Processduration';
import Varieties from './pages/Varieties';


function App() {


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rootlayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='general-info' element={<Info />}></Route>
          <Route path='nutritionalinfo' element={<Nutritionalinfo />} ></Route>
          <Route path='benefits' element={<Benefits />} ></Route>
          <Route path='process-duration' element={<Processduration />} ></Route>
          <Route path='varieties' element={<Varieties />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
