import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'


function App() {
  return (
    // <div className="App">
    //     HELLO
    //   <Home/>
    // </div>
    <Router className="App">
      <Routes>
        <Route path = '/' element ={<Home/>}/>
        <Route path = '/dashboard' element ={<Dashboard/>}/>
      </Routes>
    </Router>

  );
}

export default App;
