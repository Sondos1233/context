import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios/axisConfig";
import { useSelector , useDispatch} from "react-redux";
import changeMovie from "../../../store/action/Movies";

const Movies = () => {
  const dispatch = useDispatch();
  const Movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(changeMovie());
  }, []);

  
  return (
    <>
      <h1 className=" text-center my-5 text-success">All Movies</h1>
      
      <div className="container">
        <div className="row">
          {Movies.map((movie) => {
            return (
              <div key={movie.id} className="col-3 card text-center m-4 pb-2">
                
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  width="300"
                  height="300"
                  className="text-center"
                />
                <Link to={`/movie-details/${movie.id}`}>
                  {movie.original_title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Movies;
