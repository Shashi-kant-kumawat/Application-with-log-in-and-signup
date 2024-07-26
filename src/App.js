import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Services from './components/Services';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom" ;
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
