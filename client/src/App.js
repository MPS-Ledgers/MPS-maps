import React from 'react'
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import forgotPassword from './pages/forgotpassword';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PrivateRoute from "./pages/routing/privateroute"
import PrivatePage from './pages/privatepage';
import Traffic from './pages/traffic';
import Emergency from './pages/emergency';
import Maps from './pages/maps';
function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/private" component={PrivatePage}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/forgotpassword" component={forgotPassword}/>
        <PrivateRoute exact path="/private/traffic" component={Traffic}/>
        <PrivateRoute exact path="/private/emergency" component={Emergency}/>
        <PrivateRoute exact path="/private/maps" component={Maps}/>
      </Switch>
    </Router>
  );
}

export default App;