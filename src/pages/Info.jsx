import './Info.css'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import { useEffect,useState } from 'react'
import axios from '../axios'

const Info = () => {
    const API_KEY ='22b8ce84984ef92c7b8557faa4045066'

    const params=useParams()
    const [data,setData]=useState({})
    useEffect(()=>{
axios.get(`/movie/${params.id}?api_key=${API_KEY}`).then(res=>{
  setData(res.data)
    console.log(res.data)
})
    },[])
  return (
    <div className='info' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`}}>
<Nav />

<div className="info__content">
<h1 className="info__title">{data.original_title}</h1>
<p className="info__overview">{data.overview}.</p>
<span className="info__budget">Budget : 
${data.budget}.</span>

<span className="info__date">Release Date :{data.release_date}.</span>
<span className='revenue
'>revenue :${data.revenue
}.
</span>

<span className='info__time'>Run Time : {data.runtime} minutes.</span>

<span className='info__status'> Status :{data.status}</span>

</div>

<div className="info__layout" />
</div>
    
  )
}

export default Info