import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Batman from './pages/Batman';
import Superman from './pages/Superman';

const App = () => {

  const [user, setUser] = useState(null)
  const handleLogin = () => setUser({ id: '1', name: 'haidar' });
  const handleLogout = () => setUser(null);

  return (
    <div className="App">
      <div className="routes">
        <Router>
          
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid m-auto">
                    <Link className="navbar-brand" to="/"> <h1>Marvel Movies</h1></Link>
                    <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">+</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/BatmanMovies"><h4>Batman Movies</h4></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/SupermanMovies"><h4>Superman Movies</h4></Link>
                        </li>
                        {user ? (
                              <button className='btn-auth btn-lg m-auto text-center' onClick={handleLogout}>Log Out</button>
                            ) : (
                              <button className='btn-auth btn-lg m-auto text-center' onClick={handleLogin}>Log In</button>
                            )} 
                    </ul>
                    </div>
                </div>
            </nav> 
            
            <Routes>
              <Route exact path="/" element={ <Home/> } />
              <Route path="/BatmanMovies"  element={ <Batman user={user}/> } />
              <Route path="/SupermanMovies"  element={ <Superman user={user}/> }  />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
