import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Rows from '../components/Rows'
import './Home.css'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <Rows  title ='NETFLIX ORIGINAL'fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
        <Rows  title ='TRENDING NOW'fetchUrl={requests.fetchTrending}
        />
        <Rows  title ='TOP RATED'fetchUrl={requests.fetchTopRated}
        />
        <Rows  title ='ACTION MOVIES'fetchUrl={requests.fetchActionMovies}
        />
        <Rows  title ='COMEDY MOVIES'fetchUrl={requests.fetchComedyMovies}
        />
        <Rows  title ='HORROR MOVIES'fetchUrl={requests.fetchHorrorMovies}
        />
        <Rows  title ='ROMANCE MOVIES'fetchUrl={requests.fetchRomanceMovies}
        />
        <Rows  title ='DOCUMENTARIES'fetchUrl={requests.fetchDocumentaries}
        />
        
    </div>
  )
}

export default Home