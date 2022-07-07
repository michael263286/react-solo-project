import {Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Starters from './routes/Starters';
import TopNav from './components/TopNav';
import Accolades from './routes/Accolades';
import './App.css';

function App() {
  return (
    <div style={{backgroundImage:`url("https://ysnlive.com/wp-content/uploads/2018/12/23b53f53c317b0f91dc8e0c22a1200e3.jpg")`}}className="App">
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/starters' element={<Starters/>}/>
        <Route path='/accolades' element={<Accolades/>}/>
      </Routes>
    </div>
  );
}

export default App;
