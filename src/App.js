
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Demo from "./Demo";
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";

;


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
    return (
      
            <Router>
        
             <Switch>
               <Route path="/" exact >
                 <Home/>
               </Route>
               <Route path="/movie/:imdbId"  >
                <MovieDetails/>
               </Route>
             </Switch>
           
          </Router>

  );
};

export default App;