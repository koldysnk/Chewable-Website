import './Home.css'
import React from 'react'
import {Link} from 'react-router-dom'



export function Home(props) {



    return (
        <div className="Home">
            <Link className='buttonLink' to="/privacy_policy"><button>Privacy Policy</button></Link>
            <Link className='buttonLink' to="/terms_of_service"><button>Terms of Service</button></Link>
        </div>
    );
}

