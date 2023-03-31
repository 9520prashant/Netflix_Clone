import React, { useEffect, useState } from 'react'
import "./Home.scss";
import axios from 'axios';
import {Link} from "react-router-dom";
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai"

const apiKey = "9ead7ee110f4bd208179353f8fba6cb1";
const url = "https://api.themoviedb.org/3/movie";
const imgurl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const now_playing = "now_playing";
const popular  = "popular";
const top_rated = "top_rated";

const Card=({img})=>{
  return(
    <img src={img} alt="dsd" className='card'/>
  )
}
const Row =({title, arr = [{
  img:"https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
},{
  img:"https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
},{
  img:"https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
},]})=>{
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div>
              {
                arr.map((item, index)=>(
                  <Card key ={index} img = {`${imgurl}/${item.poster_path}`}/>
                ))
              }
        </div>
      
    </div>
  )
}
const Home = () => {

  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [now_playingMovies, Setnow_playingMovies] = useState([]);
  const [popularMovies, SetpopularMovies] = useState([]);
  const [top_ratedMovies, settop_ratedMovies] = useState([]);
  // const [genre, setgenre] = useState([]);

  useEffect(() =>{
      const fetchUpcoming = async()=>{
        const {data:{results}} = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`)
        // console.log(UpcomingMovies);
        setUpcomingMovies(results)
      };
      const fetchNowPlaying = async()=>{
        const {data:{results}} = await axios.get(`${url}/${now_playing}?api_key=${apiKey}`)
        // console.log(UpcomingMovies);
        Setnow_playingMovies(results)
      };
      const fetchPopuler = async()=>{
        const {data:{results}} = await axios.get(`${url}/${popular}?api_key=${apiKey}`)
        // console.log(UpcomingMovies);
        SetpopularMovies(results)
      };
      const fetchTopRated = async()=>{
        const {data:{results}} = await axios.get(`${url}/${top_rated}?api_key=${apiKey}`)
        // console.log(UpcomingMovies);
        settop_ratedMovies(results)
      };
      // const getAllgenre = async()=>{
      //   const {data:{genres}} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      //   // console.log(UpcomingMovies);
      //   setgenre(genres)
      // }; 
      
      fetchUpcoming();
      // getAllgenre();
      fetchNowPlaying();
      fetchPopuler();
      fetchTopRated();
  }, [])


  return (
   <section className='Home'>
        <div className="banner" style={{
          backgroundImage: popularMovies[0]?`url(${`${imgurl}/${popularMovies[0].poster_path}`})`:"rgb(24,24,24)"
        }}>
            {
              popularMovies[0] &&
              (
            <h1>{popularMovies[0].original_title}</h1>
              )
            }
            {
              popularMovies[0] &&
              (
                <p>{popularMovies[0].overview}</p>
              )
            }
            <div className='btn'>
                <button><BiPlay/> Play</button>
                <button>My List <AiOutlinePlus/></button>
            </div>
        </div>
        <Row title={"Upcoming"} arr={UpcomingMovies}/>
        <Row title={"Now Playing"} arr={now_playingMovies}/>
        <Row title={"Popular"} arr={popularMovies}/>
        <Row title={"Top Rated"} arr={top_ratedMovies}/>
        {/* <Row title={"Genre"} arr={genre}/> */}
   </section>
  )
}

export default Home
