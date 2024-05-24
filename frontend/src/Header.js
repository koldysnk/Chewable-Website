import './Header.css'
import React from 'react'

export function Header() {
  return (
    <div className="Header">
        <a href="https://www.youtube.com/channel/UCKGYUPpInXI5X4cYMoDEBpg" target="_blank" rel="noreferrer">
            <img className="BannerLogo" src={process.env.PUBLIC_URL + './ShortBannerv2.png'} alt="BannerLogo" />
        </a>
    </div>
  );
}

