import React, { useEffect ,useState} from 'react';
import "./main1.css";

function Main1(){

    const [data,setdata] = useState([]);
    const [cdata,setcdata] = useState([]);
    const getNewsData = async()=>{
        
            const res=await fetch(`
            https://gnews.io/api/v4/search?q=india&token=7995e8afd133ac404c076193e126e981`);
            const actdata=await res.json();
            setdata(actdata.articles);

            const cres=await fetch(`https://gnews.io/api/v4/search?q=news&token=7995e8afd133ac404c076193e126e981`);
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
            <img src="https://media.istockphoto.com/photos/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-picture-id1219980553?b=1&k=20&m=1219980553&s=170667a&w=0&h=HGLxwS06WjWFl9TSEKwmRbPtz9AS4og49opQ_2uxYCk=" alt=""></img>
            </div>
            <div className="box2">
            <img src=" https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFraW5nJTIwbmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
           
            </div>
            <div className="box3">
            <img src=" https://media.istockphoto.com/photos/roadside-sign-trailer-mobile-warning-sign-parked-by-road-with-words-picture-id1136703181?b=1&k=20&m=1136703181&s=170667a&w=0&h=HlJgenMjanhsrl6HfHggLBn0yjxhJfwiEYjz6pa52Jo=" alt=""></img>
            </div>
            <div className="box4">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""></img>
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

export default Main1;