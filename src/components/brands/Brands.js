import React from 'react';
import './brands.css';

export default function Brands() {

const data = [
    {
        id: 1,
        name: "Brown Living",
        desc: "Buy sustainable zero-waste products from best brands.",
        img: "https://static.wixstatic.com/media/272cf7_bb28fddf078b47d9a57afc75d5d287ca~mv2.png/v1/fill/w_305,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_bb28fddf078b47d9a57afc75d5d287ca~mv2.png"
    },
    {
        id: 2,
        name: "Planet Care",
        desc: "Buy sustainable zero-waste products from best brands.",
        img: "https://static.wixstatic.com/media/272cf7_f6bddb509d9d4f4192062f0f3418ea5d~mv2.png/v1/fill/w_256,h_100,al_c,lg_1,q_85,enc_auto/272cf7_f6bddb509d9d4f4192062f0f3418ea5d~mv2.png"
    },
    {
        id: 3,
        name: "Prakati",
        desc: "Buy sustainable zero-waste products from best brands.",
        img: "https://static.wixstatic.com/media/272cf7_d8cca9fbf15940d89bca76fffbcc4174~mv2.png/v1/fill/w_134,h_115,al_c,lg_1,q_85,enc_auto/272cf7_d8cca9fbf15940d89bca76fffbcc4174~mv2.png"
    },
    {
        id: 4,
        name: "Ecohoy",
        desc: "Buy sustainable zero-waste products from best brands.",
        img: "https://static.wixstatic.com/media/272cf7_16c9371c095f401c93d9f9246004f72d~mv2.png/v1/fill/w_265,h_106,al_c,lg_1,q_85,enc_auto/272cf7_16c9371c095f401c93d9f9246004f72d~mv2.png"
    },
    {
        id: 5,
        name: "The Sustainable Indian",
        desc: "Buy sustainable zero-waste products from best brands.",
        img: "https://static.wixstatic.com/media/272cf7_8362aff0740e476ca8eaef385556e09a~mv2.png/v1/fill/w_294,h_71,al_c,lg_1,q_85,enc_auto/272cf7_8362aff0740e476ca8eaef385556e09a~mv2.png"
    },
    {
        id: 6,
        name: "Earthsy.in",
        desc: "Buy sustainable zero-waste products from best brands.",
        img: "https://static.wixstatic.com/media/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg/v1/fill/w_203,h_90,al_c,lg_1,q_80,enc_auto/272cf7_c394cc3873a94c9bab2b1f74ea10705f~mv2.jpg"
    },
]

  return (
    <div className='brands'>
        <div className='brands-title'>Sustainable Brands</div>
        <div className='brands-body'>
            {data.map((item) => (
                <div className='brand-card' key={item.id}>
                    <div className='brand-card-img'><img src={item.img}></img></div>
                    <div className='brand-card-name'>{item.name}</div>
                    <div className='brand-card-desc'>{item.desc}</div>
                </div>
            ))}
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "40px"}}><button className='view-more-btn'>View All</button></div>
    </div>
  )
}
