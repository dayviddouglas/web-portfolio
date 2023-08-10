
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Newproject from './components/pages/Newproject';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Login from './components/login/Login';
import CadastrarUsuario from "./components/login/CadastrarUsuario";

function App() {
  return (
    <div className='App'>


  <Router>   
      <Navbar/>
        <Container customClass = "min-height">
          <Routes>     
                    <Route exact path='/' element={<Home/>}/> 
                    <Route exact path='/contato' element={<Contato/>}/>
                    <Route exact path='/newproject' element={<Newproject/>}/>
                    <Route exact path='/projects' element={<Projects/>}/>
                    <Route exact path='/company' element={<Company/>}/>
                    <Route exact path='/login' element={<Login/>}> </Route>
                    <Route exact path='/cadastrarUsuario' element={<CadastrarUsuario/>}/>
                    
          </Routes>
          </Container>
      <Footer/>
  </Router>
 
  
      
    </div>
  );
}

export default App;
