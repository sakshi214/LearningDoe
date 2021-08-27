import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Quicklinks from './components/pages/Quicklinks';
import SignUp from './components/pages/SignUp';



function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/courses' component={Courses} />
       <Route path='/quicklinks' component={Quicklinks} />
       <Route path='/sign-up' component={SignUp} />
       
     </Switch>
   </Router>
   </>

  );
}

export default App;
