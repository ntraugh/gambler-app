import React, { useEffect, useState } from 'react'
import axios from "axios";
import BetCards from '../components/BetCards';
import Search from '../components/Search';
const api_key = process.env.api_key




const Home = () => {
    const [games, setGames] = useState([])
    const [loading, isLoading] = useState(false)
    

    useEffect(() => {
        const grabGames = async () => {
            const res = await axios.get
            (`https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=67291c90de631c0ff1719ffd8c62fdaa&regions=us&markets=spreads&oddsFormat=american`)
            setGames(res.data)
            isLoading(false)
        }
        grabGames()
    }, [])
  return (
    <>
        <div className='d-flex align-items-center justify-content-center'>
            <Search/>
        </div>
        <BetCards isLoading={loading} games={games}/>
    </>
    
  )
}

export default Home