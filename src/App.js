import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Login/Register/Register";
import Login from "./components/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Details from "./components/Order/Details/Details";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AllProducts from "./components/AllProducts/AllProducts";
import NotFound from "./components/Shared/NotFound/NotFound";
import Payment from "./components/Order/Payment/Payment";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/payment/:id">
              <Payment></Payment>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/sidebar">
              <Sidebar></Sidebar>
            </Route>
            <PrivateRoute exact path="/order/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
