import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './templates/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
