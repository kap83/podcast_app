import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './Login';
import Home from './Home';
import './App.css';

function App() {

  const loggedIn = useSelector(state => state.user.loggedIn)

  console.log("in app", loggedIn)


  if (loggedIn) {
    return (
      <>
        <Routes>
            <Route exact path='/' element={<Home />} />  
        </Routes>
      </>
      )} else {
        return (
          <>
            <Login />
          </>
        )}
}
export default App;
