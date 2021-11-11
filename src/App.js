import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
// import { Switch } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Details from './components/Order/Details/Details';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

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
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/details">
              <Details></Details>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
