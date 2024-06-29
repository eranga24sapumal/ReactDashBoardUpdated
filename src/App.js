
import React from 'react'
import MyButton from './Components/MyButton'
import imageUI from './Components/imageUI';
import Topbar from './Components/topbar/topbar';
import Sidebar from './Components/sidebar/sidebar';
import Home from './pages/Home/Home';
import "./app.css"
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



 function App() {
   return (
    <div>
      <Router>
      <Topbar/>
         <div className="container">
            <Sidebar/>
            <Switch>
              <Route exact path="/home">
               <Home/>
              </Route> 
              <Route path="/users">
               <UserList/>
              </Route> 
              <Route path="/user/:userId">
               <User/>
              </Route> 
              <Route path="/newUser">
               <newUser/>
              </Route> 
            </Switch>
         </div>
      </Router>
         
    </div>
  
   );
 }

export default App;

