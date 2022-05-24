import React from "react";
import "./shop.css";

export default function Shop() {
  const data = [
    {
      id: 1,
      title: "Biodegradable  Jute Bags 8x 12 inches with Cloth Handle.",
      img: "https://static.wixstatic.com/media/272cf7_f6000ad208464b2680de083b412e54d0~mv2.jpeg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/272cf7_f6000ad208464b2680de083b412e54d0~mv2.webp",
      price: "135.00",
    },
    {
      id: 2,
      title: "Biodegradable  Jute Bags 8x 12 inches with Cloth Handle.",
      img: "https://static.wixstatic.com/media/272cf7_ab22f73117474208a5fc62f2819b9fcc~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/272cf7_ab22f73117474208a5fc62f2819b9fcc~mv2.webp",
      price: "135.00",
    },
    {
      id: 3,
      title: "Biodegradable  Jute Bags 8x 12 inches with Cloth Handle.",
      img: "https://static.wixstatic.com/media/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.jpeg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/272cf7_1cbf0077a77d47b0984d348055a83f23~mv2.webp",
      price: "135.00",
    },
    {
      id: 4,
      title: "Biodegradable  Jute Bags 8x 12 inches with Cloth Handle.",
      img: "https://static.wixstatic.com/media/272cf7_f572753db0c74993ad213f48d4a40710~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/272cf7_f572753db0c74993ad213f48d4a40710~mv2.webp",
      price: "135.00",
    },
    {
      id: 5,
      title: "Biodegradable  Jute Bags 8x 12 inches with Cloth Handle.",
      img: "https://static.wixstatic.com/media/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/272cf7_21cc9507814b472681dcb9ac04d9e9f0~mv2.webp",
      price: "135.00",
    },
    {
      id: 6,
      title: "Biodegradable  Jute Bags 8x 12 inches with Cloth Handle.",
      img: "https://static.wixstatic.com/media/272cf7_5e8e36bab406442ca755ea76fc0d5152~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01/272cf7_5e8e36bab406442ca755ea76fc0d5152~mv2.webp",
      price: "135.00",
    },
  ];
  return (
    <div className="shop">
      <div className="shop-title">SHOP NOW</div>
      <div className="shop-body">
        {data.map((item) => (
          <div className="shop-card" key={item.id}>
            <div className="shop-card-img">
              <img src={item.img}></img>
              <div className="shop-card-quick-view">Quick View</div>
            </div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
      <div className="shop-pagination">
      <i class="fa-solid fa-angle-left"></i> 1 2 <i class="fa-solid fa-angle-right"></i>
      </div>
      <button className="view-more-btn">View More</button> 
    </div>
  );
}
