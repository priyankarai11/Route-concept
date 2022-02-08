import './App.css';
import {BrowserRouter as Router, Routes, Link,Route} from "react-router-dom"
import Home from './Pages/Home';
import Profile from './Pages/Profile';


function App() {
  return (
    <Router>
      <nav>
      <Link to ="/home">Home<br></br></Link>
      <button><Link to ="/profile">Profile</Link></button> 
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;
