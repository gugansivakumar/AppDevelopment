import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {BrowserRouter as Router , Route, BrowserRouter, Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/register' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    );
 
}

export default App;
