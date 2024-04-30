import React from 'react'
import img from "../assets/img.jpg";
import "./HomeStyle.css";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const backgroundImg = {
    backgroundImage: `url(${img})`,
    height: "100vh",
    fontSize: "40px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
 const productPage=()=>{
  navigate("/product")
 }
  return (
    <div style={backgroundImg}>
        <h1 className='h1-txt'>NEW AND TRENDING</h1>
        <h3 className="h3-txt">LEVEL UP YOUR STYLE</h3>
        <button className='shop-now' onClick={productPage}>Shop Now</button>
    </div>
  )
}

export default Home

