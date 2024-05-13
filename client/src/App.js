import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import './App.css';

function App() {


  return (
    <>
      <Routes>
          <Route exact path='/' element={<Home />} />  
          <Route path='/login' element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
