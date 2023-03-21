import { Route, Routes } from 'react-router-dom';
import Global from './components/style/global.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Operateur from './pages/operateur/Operateur';
import Plus from './pages/plus/Plus';
import Autorisation from './pages/autorisation/Autorisation.jsx';
import './App.css';



function App() {
  return (
    <div className="App">
      <Global />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plus' element={<Plus />} />
        <Route path='/autorisation' element={<Autorisation />} />
        <Route path='/operateur' element={<Operateur />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
    
    </div>
  );
}

export default App;
