import React, { useEffect ,useState} from 'react';
import "./main1.css";

function Edu(){

    const [data,setdata] = useState([]);
    const [cdata,setcdata] = useState([]);
    const [gdata,setgdata] = useState([]);
    const getNewsData = async()=>{
        
        
        const res=await fetch(`
        https://newsapi.org/v2/everything?q=sciences&from=2021-12-18&to=2021-12-18&sortBy=popularity&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const actdata=await res.json();
        setdata(actdata.articles);
        const cres=await fetch(`
        https://newsapi.org/v2/everything?q=technology&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
        const cactdata=await cres.json();
        setcdata(cactdata.articles);
        const gres=await fetch(`
        https://newsapi.org/v2/everything?q=solar&from=2021-11-19&sortBy=publishedAt&apiKey=2dca8b21038b44c5bb588850fa026dc6`);
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
        <img src="https://images.unsplash.com/photo-1585422168344-4d9e7a8c91ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cm9ib3RzJTIwaGR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ></img>
        </div>
        <div className="box2">
        <img src=" https://images.unsplash.com/photo-1483750356451-828d7d2cec30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1YXRpb25zJTIwaGR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ></img>
       
        </div>
        <div className="box3">
        <img src="https://media.istockphoto.com/photos/processor-chip-tech-environment-blockchain-concept-picture-id1347310477?b=1&k=20&m=1347310477&s=170667a&w=0&h=vpwoqCD2JzcwuL89lfDlNldCsQBzbcvTqd1oVMIrLF8=" ></img>
        </div>
        <div className="box4">
        <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBzeXN0ZW0lMjBoZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" ></img>
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

export default Edu;