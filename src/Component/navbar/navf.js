import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import changeLanguage from './../../store/action/language';
import { useContext } from "react";
import { languageContext } from './Context/context';


 const Navbar2 =() => {
  

    const { lang, setLang } = useContext(languageContext);
 
  
    const toggleLanguage = () => {
      setLang(lang == "en" ? "ar" : "en");
  
    };
    return (
      <>
        <div dir={this.props.language == "en" ? "ltr" : "rtl"} >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movies
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/fav">
                Favourites
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>

            <li className="nav-item ms-5 ps-5">
              <Link className="nav-link" to="#">
                Log in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                register
              </Link>
            </li>
            <li className="nav-item">
            <select className="mt-2 ms-2" onChange={() => {
              this.toggleLanguage();
            }}>
              <option>en</option>
              <option>ar</option>
            </select>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              id="Name"
          
            />
            <button
              className="btn btn-secondary my-2 my-sm-0"
           
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
        </div>
      </>
    );
  }
  export default Navbar2;