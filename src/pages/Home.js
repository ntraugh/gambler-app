import React, { useEffect, useState } from 'react'
import axios from "axios";
import BetCards from '../components/BetCards';


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
    
        <BetCards isLoading={loading} games={games}/>
    
  )
}

export default Home