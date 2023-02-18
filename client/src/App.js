import './App.css';
import {Home,Landing,Detail,Form} from './pages';
import {Route, useLocation} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';



function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route path exact="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail" component ={Detail}/>
      <Route path="/create" component ={Form}/>   
    </div>
  );
}

export default App;
