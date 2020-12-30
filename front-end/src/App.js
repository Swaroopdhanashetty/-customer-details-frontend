import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Home from './components/Home'
import Navbar from './layout/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './pages/NotFound'
import AddUser from "./pages/AddUser";
import EditCust from "./pages/EditCust";
import Customer from "./pages/Customer";
import Login from './components/Login'
function App() {
  return (
   <Router>
    <div className="App">
      <Navbar/>
        <Switch>

          <Route exact path ='/login' component={Login}/>
          <Route exact path ='/Home' component={Home}/>
          <Route exact path="/user/Add" component={AddUser}/>
          <Route exact path="/user/Edit/:id" component={EditCust}/>
          <Route exact path="/cust/:id" component={Customer}/>
          <Route component={NotFound}/>
          
        </Switch>
      </div>
   </Router>
  );
}

export default App;
