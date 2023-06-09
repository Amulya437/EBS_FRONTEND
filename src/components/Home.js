import React from "react";
import Navbar from "./navbar/navbar";
import "../components/home.css";
import homeImg from "../components/assests/images/electricity1.jpg";
import logoImg from "../components/assests/logo1.png";

function Home(){
    return (
        <div className="background">
            <div>
            <div className="logo">
                       <img src={logoImg} />
                        </div>
            <div className="landing-page">
                <div className="content">
                    <div className="container">
                        <div className="info">
                            <h2>Talent is like Electricity.We don't understand Electricity.We use it</h2>
                            <p>Save Electricity for Your Better Tomorrow</p>
                        </div>
                        <div className="image">
                       <img src={homeImg} />
                        </div>
                       
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Home;