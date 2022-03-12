

import React,{useState} from "react";
import "./heading.css";
import { NavLink } from 'react-router-dom';
function Heading (){
    
    
    const [ctime,settime]=useState();
    const [cday,setday]=useState();

    const UpdateTime = ()=>{
        var time=new Date().toLocaleTimeString();
        settime(time);
        var date=new Date().toLocaleDateString();
        setday(date);
    }
    setInterval(UpdateTime,1000);
    
    return(
        <>
        <div className="heads">
            <div className="logo">
                {/* <img src="https://media.istockphoto.com/photos/rolled-newspaper-pages-abstract-background-picture-id1294416288?b=1&k=20&m=1294416288&s=170667a&w=0&h=7horZJjbcMmdmNver6xiyOCCmqFEmxTnG6wdYXaHNrM="></img> */}
                <h1>NEWS</h1>
            </div>
            <div className="main_content">
                <ul>
                <li><NavLink activeClassName="active_class"  to='/' className="main_nav">HOME</NavLink></li>
            <li><NavLink activeClassName="active_class"  to='/company' className="main_nav">COMPANY</NavLink> </li>
            <li><NavLink activeClassName="active_class"  to='/education' className="main_nav">EDUCATION</NavLink></li>
            <li><NavLink activeClassName="active_class"  to='/sports' className="main_nav">SPORTS</NavLink></li>
            <li><NavLink activeClassName="active_class"  to='/national' className="main_nav">NATIONAL</NavLink></li>
            <li><NavLink activeClassName="active_class"  to='/movies' className="main_nav">ENTERTAINMENT</NavLink></li>
                    
                </ul>
            </div>
            <div className="c_weather">
                <ul>
                    
                    <li>{ctime}</li>
                    <li> {cday}</li>
                    
                </ul>
            </div>
        </div>
        </>
    );
}

export default Heading;