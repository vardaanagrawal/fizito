import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer' style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 0px 40px 0px", backgroundColor: "#131a22", color: "white"}}>
        <div><img src="https://static.wixstatic.com/media/272cf7_76258203c40940639e5df0ab1f940991~mv2.jpg/v1/crop/x_113,y_101,w_878,h_878/fill/w_98,h_98,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2022-100.jpg" style={{borderRadius: "50%"}}></img></div>
        <div><img src="https://static.wixstatic.com/media/272cf7_455db7932ac74703ab2d706980e02654~mv2.png/v1/crop/x_61,y_0,w_241,h_65/fill/w_118,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_455db7932ac74703ab2d706980e02654~mv2.png" style={{backgroundColor: "white", margin: "10px 0px"}}></img></div>
        <div>All Rights Reserved   © 2021 by Qizaa -  Sustainablity in Your Pocket</div>
    </div>
  )
}
