import { Outlet, NavLink } from "react-router-dom"
import "./main.css"
import { ProgressBar } from "./progressbar/ProgressBar"
import logo from "../../assets/images/logo.png"
import "./main.css"

export const LandingPage = () =>{
    return(
        <div className="main-container">
            <div className="landingpg-logo-text-container">
                <img src={logo} alt="eden-logo" className="img-responsive logo-img"/>
                <h2 className="logo-text">Eden</h2>
            </div>
            <ProgressBar />
            <Outlet/>
        </div>
    )
}
