import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Recipes from './components/Recipe';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Most specific path must come first */}
        <Route path="/recipe/:name" component={Recipes} />
        <Route path="/recipe" component={Recipes} />
        <Route path="/new" component={AddRecipe} />
      </Switch>
    </div>
  );
}

export default App;
