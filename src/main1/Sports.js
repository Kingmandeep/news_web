import React, { useEffect ,useState} from 'react';
import "./main1.css";

function Sports(){

    const [data,setdata] = useState([]);
    const [cdata,setcdata] = useState([]);
    const [gdata,setgdata] = useState([]);
    const getNewsData = async()=>{
        
        
        const res=await fetch(`
        https://newsapi.org/v2/everything?q=football&from=2021-12-18&to=2021-12-18&sortBy=popularity&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const actdata=await res.json();
        setdata(actdata.articles);
        const cres=await fetch(`
        https://newsapi.org/v2/everything?q=cricket&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const cactdata=await cres.json();
        setcdata(cactdata.articles);
        const gres=await fetch(`
        https://newsapi.org/v2/everything?q=games&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
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
        <img src="https://media.istockphoto.com/photos/cricket-leather-ball-resting-on-bat-on-the-stadium-pitch-picture-id1255328634?b=1&k=20&m=1255328634&s=170667a&w=0&h=kPODQbM_ZecfQOPipjG-iTfyvDwrlx6CQwECg2iGvQg=" ></img>
        </div>
        <div className="box2">
        <img src=" https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdGJhbGx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ></img>
       
        </div>
        <div className="box3">
        <img src="https://media.istockphoto.com/photos/american-football-in-action-picture-id492784352?b=1&k=20&m=492784352&s=170667a&w=0&h=k51vKGRg6_iPdZtYOR48eFcbhpTfmA2IoZbsy6D1Ka8=" ></img>
        </div>
        <div className="box4">
        <img src="https://images.unsplash.com/photo-1600250395178-40fe752e5189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb3RiYWxsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ></img>
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

export default Sports;