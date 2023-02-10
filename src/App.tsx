import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePageView from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ShowsProvider from "./context/showsProvider";
import LoginPage from "./pages/LoginPage";
import { useHistory } from "react-router-dom";

function App() {
  localStorage.setItem("role", "user");

  const history = useHistory();
  const token = localStorage.getItem("token");

  console.log(token);

  if (!token) {
    history.push("/login");
  }

  return (
    <ShowsProvider>
      <div className="App">
        <Switch>
          <Route path="/details:id" component={DetailsPage}></Route>
          <Route exact path="/" component={HomePageView}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </div>
    </ShowsProvider>
  );
}

export default App;
