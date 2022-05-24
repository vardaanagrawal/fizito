import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact" style={{backgroundColor: "#232f3e"}}>
      <div className="contact-top" style={{display: "flex", color: "white", justifyContent: "space-evenly", padding: "100px 0px 150px 0px"}}>
        <div style={{width: "20%"}}>
          <div style={{fontWeight: "bolder", fontSize: "large"}}>Contact</div><br/>
          <div>
            483/14, Opp. Harikaka Compound, NH4, Belgavi-Hubli Service Road,
            Belgavi - Karnataka India - 590016
            <br /> Email- info@qizaa.com <br />
            Call - +91 9075006557<br/><br/>
            <div style={{fontSize: "xx-large", letterSpacing: "15px"}}>
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter-square"></i>
            </div>
          </div>
        </div>
        <div style={{width: "20%"}}>
          <div style={{fontWeight: "bolder", fontSize: "large"}}>Shop</div><br/>
          <div>
            All Products
            <br />
            Lifestyle Products
            <br />
            Organic Product <br />
            Tableware
          </div>
        </div>
        <div style={{width: "20%"}}>
          <div style={{fontWeight: "bolder", fontSize: "large"}}>Customer Support</div><br/>
          <div>
            Contact Us
            <br />
            Help Center
            <br />
            About Us
            <br />
            Careers
          </div>
        </div>
        <div style={{width: "20%"}}>
          <div style={{fontWeight: "bolder", fontSize: "large"}}>Policy</div><br/>
          <div>
            Shipping & Returns <br />
            Terms & Conditions
            <br />
            Privacy Policy
            <br />
            FAQ
          </div>
        </div>
      </div>
      <div className="contact-bottom" style={{display: "flex", flexDirection: "column", alignItems: "center", height: "100px", justifyContent: "space-around", paddingBottom: "50px", color: 'white'}}>
        <div>We accept the following paying methods</div>
        <div style={{width: "70%", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <img src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_75,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png"></img>
        <img src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_74,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png"></img>
        <img src="https://static.wixstatic.com/media/272cf7_2094a5744240432d9685dc17965b2b35~mv2.png/v1/fill/w_124,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/272cf7_2094a5744240432d9685dc17965b2b35~mv2.png"></img>
        <img src="https://static.wixstatic.com/media/272cf7_3a9151013d67468eaee221a8332f481e~mv2.png/v1/fill/w_124,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Upi-Payment-Logo-white.png"></img>
        <img src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_75,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"></img>
        <img src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_75,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"></img>
        </div>
      </div>
    </div>
  );
}
