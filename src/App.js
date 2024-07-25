import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Services from './components/Services';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import { UsercontextProvider } from './components/Userinformation';
import { useState } from 'react';

function App() {
  const[information,setInformation]=useState("")
  return (
    <Router>
      <Navbar />
      <UsercontextProvider value={{information,setInformation}}>
      <Routes>
        <Route exact path='/' element={ <Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
      </UsercontextProvider>
    </Router>
  );
}

export default App;
