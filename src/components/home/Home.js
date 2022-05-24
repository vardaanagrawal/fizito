import React from 'react';
import './home.css';
import globe from '../images/globe.webp';

export default function Home() {
  return (
    <div className='home'>
        <div className='home-l1'>Sustainability<br/> In Your Pocket</div>
        <div className='home-l2'>Building a future that's exciting!</div>
        <button className='explore-btn'>Explore</button>
        <div className='globe'><img src={globe}></img></div>
    </div>
  )
}
