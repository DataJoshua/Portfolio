import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './templates/Nav';
import Contact from './pages/Contact';
import SupaProvider from './context/SupaProvider';
import Projects from './pages/Projects';
import Admin from './pages/Admin';


function App() {
  return (
    <BrowserRouter>
      <div className='bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen'>
        <Nav/>
        <SupaProvider>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Routes>
        </SupaProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
