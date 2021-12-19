import React, { useEffect ,useState} from 'react';
import "./main1.css";

function National(){

    const [data,setdata] = useState([]);
    const [cdata,setcdata] = useState([]);
    const getNewsData = async()=>{
        
        
            const res=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c617e3d07d1e4eed87c136a6b99630be`);
            const actdata=await res.json();
            setdata(actdata.articles);
            const cres=await fetch(`
        https://newsapi.org/v2/everything?q=india&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const cactdata=await cres.json();
        setcdata(cactdata.articles);
        
    }
    useEffect(()=>{
        getNewsData();

    },[]);
    return(
        <>
        <div className="main1">
        <div className="box1">
        <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ></img>
        </div>
        <div className="box2">
        <img src=" https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjBuZXdzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ></img>
       
        </div>
        <div className="box3">
        <img src="https://images.unsplash.com/photo-1509602742943-0bf62bd36166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhJTIwbmV3c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" ></img>
        </div>
        <div className="box4">
        <img src="https://images.unsplash.com/photo-1516709678571-a33ff0114ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhJTIwbmV3c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" ></img>
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

export default National;