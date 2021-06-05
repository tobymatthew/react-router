import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import About from './pages/about'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Project from './pages/project'



const App = ()=>{
  return (
      
     <Router>
         <div style={{
                 width:100 + "vw",
                 height:80,
                 backgroundColor: "black",
                 marginBottom: 40 + "px"
             }}>

             <Link to="/">Home</Link>
             <Link to="/about">About</Link>
             <Link to="/project">Project</Link>
             
             
         </div>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" exact component={About}/>
       <Route path="/project" exactcomponent={Project}/>
       <Route path="*" exact component={PageNotFound}/>

       
       
     </Switch>
     </Router>
  )
}

export default App;