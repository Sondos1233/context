
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axiosInstance from "../../axios/axisConfig";
import { useSelector , useDispatch} from "react-redux";
import changeMovieDetails from './../../../store/action/moviesDetails'

const Moviedetails = () => {
  const params = useParams();
  const movie= useSelector((state) => state.movieDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeMovieDetails(params.id));
  }, []);

     
  return (
    
    <>
    <div>
        <div className="card m-5 p-2" >
        <p><b>overview: </b>{movie.overview}</p>
        <p><b>vote: </b>{movie.vote_average}</p>
        <p><b>vote_count: </b>{movie.vote_count}</p>
        <p><b>Budget: </b>{movie.budget}</p>
        <p><b>original_language: </b>{movie.original_language}</p>
        <p><b>original_title: </b>{movie.original_title}</p>
        
        </div>
       
    </div>
   
    </>

  );
};

export default Moviedetails;