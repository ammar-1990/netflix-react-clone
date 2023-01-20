import './Banner.css'
import { useState,useEffect } from 'react'
import axios from './../axios'
import requests from '../Requests'

const Banner = () => {
const [movie,setMovie]=useState([])
useEffect(()=>{
    const fetchData = async ()=>{
        const res = await axios.get(requests.fetchNetflixOriginals)
        setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length -1)])
      return res
    }

    fetchData()
},[])



    const trunk =(text,n)=> {
return text?.length > n ? text.substring(0,n-1) + '...' : text
    }


  return (
    <header className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>

        <div className="banner__content">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
            <p className="banner__desc">{trunk(movie?.overview,300)}</p>
        </div>
        <div className="banner--fade" />

    </header>
  )
}

export default Banner