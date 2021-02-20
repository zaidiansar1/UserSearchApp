import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Comments from './components/Comments';
import Home from './Pages/Home';
import Posts from './Pages/Posts';


function App() {
  return (
    <ul className="App">
      <Router>
        <Switch>
          <Route exact path= '/' component={Home}></Route>
          <Route exact path= '/posts/:userid' component={Posts}/>
          
        </Switch>
      </Router>
    </ul>
  );
}

export default App;
