import React from 'react';
import './offer.css';

export default function Offer() {

    const data = [
        {
            id: 1,
            name: "Sustainable Products",
            desc: "Buy sustainable zero-waste products from best brands.",
            img: "https://static.wixstatic.com/media/272cf7_85bd2da00ccf4d9a86f2eda94b19111a~mv2.png/v1/fill/w_95,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sustainability.png",
        },
        {
            id: 2,
            name: "B2B Services",
            desc: "Introducing sustainable culture in corporate environment.",
            img: "https://static.wixstatic.com/media/272cf7_40028ca4a08346769adf960399e7b010~mv2.png/v1/fill/w_111,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_40028ca4a08346769adf960399e7b010~mv2.png",
        },
        {
            id: 3,
            name: "Our Community",
            desc: "Introducing sustainable culture in all communities. ",
            img: "https://static.wixstatic.com/media/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png/v1/fill/w_95,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_688b3eb266084f59972bebd8ed91c439~mv2.png",
        },
    ]

  return (
    <div className='offer'> 
        <div className='offer-title'>WHAT WE OFFER</div>
        <div className='offer-desc'>Qizaa is an All In One platform for Sustainable Products, B2B Sustainable Services, and Community Programs for a Sustainable Lifestyle.</div>
        <div className='offer-body'>
            {
                data.map((item) => (
                    <div className='offer-card' key={item.id}>
                        <div style={{marginTop: "40px", marginBottom: "10px"}}><img src={item.img}></img></div>
                        <div style={{fontWeight: "bold", fontSize: "x-large"}}>{item.name}</div>
                        <div>{item.desc}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
