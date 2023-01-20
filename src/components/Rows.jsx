import './Rows.css'
import { useState,useEffect } from 'react'
import axios from './../axios'

const Rows = ({title,fetchUrl,isLargeRow=false}) => {
const [movies,setMovies]=useState([])
useEffect(()=>{
    const fetchMovies =async () => {
        const res=axios.get(fetchUrl)
        setMovies((await res).data.results)
    }

    fetchMovies()
},[fetchUrl])

const baseUrl="https://image.tmdb.org/t/p/original"

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_container'>{movies.map((el)=>
         ((isLargeRow&& el.poster_path) || (!isLargeRow &&el.backdrop_path )) &&  (
<img className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${baseUrl}${isLargeRow ? el?.poster_path : el?.backdrop_path}`} alt={el.name} key={el.id} />

        ))}</div>
    </div>
  )
}

export default Rows