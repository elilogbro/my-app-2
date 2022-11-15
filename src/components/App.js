import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import PlayerContainer from "./PlayerContainer";
import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";

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
        <Route path="/Search"></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
