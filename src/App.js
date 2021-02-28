import react, {Component} from 'react';
import Navbar from './component/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './component/Home';
import ToDo from './component/ToDo';
import Contact from './component/Contact';
import PostDetail from './component/PostDetail';

class App extends Component{
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/todo" component={ToDo}></Route>
            <Route  path="/contact" component={Contact}></Route>
            <Route  path="/:post_id" component={PostDetail}></Route>
          </Switch>
         
        </div>
      </BrowserRouter>
    );
  }
}
// BrowserRouter
// Switch
export default App;
