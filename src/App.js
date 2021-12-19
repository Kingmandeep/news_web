

import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Educat from './Educat';
import Ent from './Ent';
import Sport from './Sport';
import Nation from './Nation';
import Movies from './Movies';



function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/education" component={Educat}></Route>
    <Route exact path="/company" component={Ent}></Route>
    <Route exact path="/sports" component={Sport}></Route>
    <Route exact path="/national" component={Nation}></Route>
    <Route exact path="/movies" component={Movies}></Route>
  
    </Switch>
    
    </>
  );
}

export default App;
