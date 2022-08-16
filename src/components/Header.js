import React from 'react'
import "./HeaderStyle.css"
import Search from './Search'

const Header = () => {
  return (
    <>
        <div className="bg d-flex align-items-center text-white justify-content-center">
            <div className='text-bg'>
                <h1 style={{"fontSize": "4rem", "textShadow": "2px 2px black", "marginLeft": "1rem"}}>Traugh's
                <br />
                MLB Sportsbook
                </h1>
            </div>
        </div>
        <div>
            <h2 className='d-flex align-items-center justify-content-center pt-5' style={{"fontSize": "2rem"}}>
                Upcoming Games
            </h2>
        </div>
    </>
  )
}

export default Header