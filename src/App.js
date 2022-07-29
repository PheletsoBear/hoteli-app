import './App.css';
import Login from './components/Login';
import SignUp from '../src/components/SignUp'
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
         <Route path="/ForgotPassword" component={ForgotPassword}></Route>    
           <Route path="/Home" component={Home}></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
