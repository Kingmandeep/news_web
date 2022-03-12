import React, { useEffect ,useState} from 'react';
import "./main1.css";

function Enter(){

    const [data,setdata] = useState([]);
    const [cdata,setcdata] = useState([]);
    const [gdata,setgdata] = useState([]);
    const getNewsData = async()=>{
        
        
        const res=await fetch(`
        https://gnews.io/api/v4/search?q=multinational company&token=7995e8afd133ac404c076193e126e981`);
        const actdata=await res.json();
        setdata(actdata.articles);
        const cres=await fetch(`
        https://gnews.io/api/v4/search?q=company&token=7995e8afd133ac404c076193e126e981`);
        const cactdata=await cres.json();
        setcdata(cactdata.articles);
        const gres=await fetch(`
        https://gnews.io/api/v4/search?q=google&token=7995e8afd133ac404c076193e126e981`);
        const gactdata=await gres.json();
        setgdata(gactdata.articles);
        
    }
    useEffect(()=>{
        getNewsData();

    },[]);
    return(
        <>
        <div className="main1">
        <div className="box1">
        <img src="https://media.istockphoto.com/photos/looking-directly-up-at-the-skyline-of-the-financial-district-in-city-picture-id1237546531?b=1&k=20&m=1237546531&s=170667a&w=0&h=xNx16TSGJZ0C4Fw4OAxxsYe8eXdGYNR8dDiq-82Qsgs=" alt=""></img>
        </div>
        <div className="box2">
        <img src=" https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
       
        </div>
        <div className="box3">
        <img src="https://images.unsplash.com/photo-1599747645972-73c841de6e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
        <div className="box4">
        <img src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
        </div>
            <div className="boxes">
            {
                data.map((curr,ind)=>{
                    return(
                        <div className="box5">
                <img src={curr.image} alt=""></img>
                <p>{curr.title}</p>
            </div>
                    );
                })
            }
            </div>
            <div className="boxes">
            {
                gdata.map((curr,ind)=>{
                    return(
                        <div className="box5">
                <img src={curr.image} alt=""></img>
                <p>{curr.title}</p>
            </div>
                    );
                })
            }
            </div>
            <div className="boxes">
            {
                cdata.map((curr,ind)=>{
                    return(
                        <div className="box5">
                <img src={curr.image} alt=""></img>
                <p>{curr.title}</p>
            </div>
                    );
                })
            }
            </div>
        </div>
        </>
    );
}

export default Enter;