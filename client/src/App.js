import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './Login';
import Home from './Home';
import './App.css';
import FrontPage from './FrontPage';

function App() {

  const loggedIn = useSelector(state => state.user.loggedIn)

  console.log("in app", loggedIn)


  if (loggedIn) {
    return (
      <>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/FrontPage' element={<FrontPage />}/> 
        </Routes>
      </>
      )} else {
        return (
          <><Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
            
          </>
        )}
}
export default App;
