
import Tracker from './Tracker';
import { Switch, Route,  BrowserRouter as Router} from 'react-router-dom'

//PAGES
import Home from './screens/Home';
import Tips from './screens/Tips';
import Signup from './screens/Signup';
import Selfie from './screens/Selfie';

//Styles
import "./css/App.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={Tracker(Home)}></Route>
        <Route path='/tips' component={Tracker(Tips)}></Route>
        <Route path='/signup' component={Tracker(Signup)}></Route>
        <Route path='/' component={Tracker(Selfie)}></Route>
      </Switch>
    </Router>

  );
}

export default App;
