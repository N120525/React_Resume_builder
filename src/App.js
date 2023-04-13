import "./styles.css";
import MainPage from "./View/main";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./View/Dashboard/dashboard";
import ResumePreview from "./View/ResumePreview/index";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Dashboard />
        </Route>
        <Route path="/user-info" exact >
          <MainPage />
        </Route>
        <Route path="/preview" exact >
          <ResumePreview />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
