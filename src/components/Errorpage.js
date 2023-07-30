import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>    
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <div className="notfound-text">
                    <h2>We are sorry, page not found!</h2>
                    <p className='pt-2'>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR IS TEMPORARILY UNAVAILABLE</p>
                    <NavLink to="/" className="back_btn mt-3">Back to Homepage</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Errorpage