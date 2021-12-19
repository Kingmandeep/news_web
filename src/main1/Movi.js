import React, { useEffect ,useState} from 'react';
import "./main1.css";

function Movi(){

    const [data,setdata] = useState([]);
    const [cdata,setcdata] = useState([]);
    const [gdata,setgdata] = useState([]);
    const getNewsData = async()=>{
        
        
        const res=await fetch(`
        https://newsapi.org/v2/everything?q=bollywood&from=2021-12-18&to=2021-12-18&sortBy=popularity&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const actdata=await res.json();
        setdata(actdata.articles);
        const cres=await fetch(`
        https://newsapi.org/v2/everything?q=movie&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const cactdata=await cres.json();
        setcdata(cactdata.articles);
        const gres=await fetch(`
        https://newsapi.org/v2/everything?q=actors&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
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
        <img src="https://media.istockphoto.com/photos/carefree-seniors-having-fun-on-rollercoaster-at-amusement-park-picture-id1179332911?b=1&k=20&m=1179332911&s=170667a&w=0&h=QcyRF2dTmvdDKr4O8S78-2VT48nCSJd_TSH7pM_8ZFs=" ></img>
        </div>
        <div className="box2">
        <img src=" https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVudGVydGFpbm1lbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ></img>
       
        </div>
        <div className="box3">
        <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW50ZXJ0YWlubWVudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" ></img>
        </div>
        <div className="box4">
        <img src="https://images.unsplash.com/photo-1624972137336-298c80d19064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVudGVydGFpbm1lbnQlMjBwYXJrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ></img>
        </div>
            <div className="boxes">
            {
                data.map((curr,ind)=>{
                    return(
                        <div className="box5">
                <img src={curr.urlToImage}></img>
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
                <img src={curr.urlToImage}></img>
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
                <img src={curr.urlToImage}></img>
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

export default Movi;