import { Link, Outlet, Route, BrowserRouter, Routes } from 'react-router-dom'


import './App.scss';
import ArtCrimes from './pages/artCrimes/artCrimes';
import Home from './pages/home/home';
import Wanted from './pages/wanted/wanted';

function App() {






  return (

    <BrowserRouter>

      <div className="header">
        <Link className='btn' to="/">Home</Link> 
        <Link className='btn' to="/art-crimes">Art Crimes</Link> 
        <Link className='btn' to="/wanted">Wanted</Link>
      </div>



      <Routes >
        <Route index path='/' element={<Home />} ></Route>
        <Route path='/wanted' element={<Wanted />} ></Route>
        <Route path='/art-crimes' element={<ArtCrimes />} ></Route>
      </Routes>



    </BrowserRouter>



  );
}

export default App;
