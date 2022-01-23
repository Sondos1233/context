
import './App.css';
import Navbar2 from "./Component/navbar/nav";
import Movies from './Component/navbar/Movies/Movie';
import Moviedetails from './Component/navbar/Movies/Moviedetails';
import Form from './Component/Register/form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {languageContext, LanguageProvider} from './Component/navbar/Context/context';
import { useContext, useState } from 'react';




function App() {
  const [lang,setlang] = useState("en")
  return (
    
    <>
      <Router>
       <LanguageProvider value={{lang,setlang}}>

      <Navbar2 />
      
        <Switch>
        <Route path="/register" exact component={Form}/>
        <Route path="/" exact component={Movies}/>
        <Route path="/movie-details/:id" exact component={Moviedetails}/>
        </Switch>
        </LanguageProvider>
      </Router>
    </>
  );
}

export default App;
