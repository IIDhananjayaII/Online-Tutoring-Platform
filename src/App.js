//import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import MainFeaturedPost from './components/Section1'
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Home />
        <NavBar />
          <Switch>
          <Route path="/about">
          <About /> 
        </Route>
        <Route path="/contact">
          <Contact /> 
        </Route>
        <Route path="/">
          <MainFeaturedPost /> 
        </Route>
          </Switch>
        
        <Footer />
      </BrowserRouter>
      
    </div> 
  );
}

export default App;
 