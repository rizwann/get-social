import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Profile from "./pages/profile/Profile";
import Home from "./pages/Home"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
function App() {
  return (
    <div className="App">
 <Router>
   <Switch>
     <Route exact path='/'>
     <Home/>
     </Route>
     <Route path='/login'>
     <Login/>
     </Route>
     <Route path='/register'>
     <Register/>
     </Route>
     <Route path='/profile/:username'>
     <Profile/>
     </Route>
     
   </Switch>
 </Router>
    </div>
  );
}

export default App;
