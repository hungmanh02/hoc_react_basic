import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/jobs">
              <MyComponent />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
