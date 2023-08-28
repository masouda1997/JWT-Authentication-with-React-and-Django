import './App.css';
import {Home} from './pages/Home'
import {LoginPage} from './pages/Loginpage'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path='/' exact/>
          <Route Component={LoginPage} path='/login' exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
