import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import PlayerContainer from "./PlayerContainer";
import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";
import Search from "./Search";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/View">
          <PlayerContainer />
        </Route>
        <Route path="/Add">
          <AddPlayer />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
