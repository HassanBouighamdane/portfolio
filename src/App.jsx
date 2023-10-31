import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import NoPage from './Pages/NoPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Education from './Pages/Education';


function App() {

  return (
    
    <Router>
      <div className="App" >
        
        <Routes >
          <Route path='/portfolio' element={<Home/>}/>
          <Route path='portfolio/Skills' element={<Skills/>}/>
          <Route path='portfolio/Projects' element={<Projects/>}/>
          <Route path='portfolio/Education' element={<Education/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
