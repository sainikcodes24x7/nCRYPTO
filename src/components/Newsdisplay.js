import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import News from './News';
import './news.css' ;
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [curstate,setcurstate] = useState('landing');
  const [news,setnews] = useState(News) ;
  const [displaynews,setdisplaynews] = useState(News.slice(0,11)) ;
  const [counter,setCounter] = useState(0) ;
  var options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
      'x-rapidapi-key': '935b422371msh4f2c689aabdb6afp1940b4jsn18c6d304cb8e'
    }
  };
  useEffect(() => {
      /*
      axios.request(options).then(function (response) {
        console.log(response.data);
        var res = response.data.slice(0,11)
        setnews(response.data) ;
        setdisplaynews(res) ;
      }).catch(function (error) {
        console.error(error);
      }); 
      */

  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };



  return (
    <div>
    <h2>Latest Crypto news</h2>
    {
      news.length>0?(
        <marquee direction="up" height="500vh">
          {
            displaynews.map(item =>{
              return (
                <div className='component'>
                <a href={item.url} target="_blank">
                  <p>{item.title}</p>
                  <p>{item.source}</p>
                  Read more ...</a>  
                </div>
              )
            })
          }
        </marquee>
      ):<></>
    }
    </div>
  );
}

export default App;

const Navbar = styled.div`
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
    padding: 0.5rem 5vw;
    padding-left: 0.5rem;
    /* color: white; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #1a1a1c;
    border-bottom: 1px solid #efe1e1;
`

const Logo = styled.div`
    font-size: 1rem;
    font-weight: 700;
    /* color: white; */
`

const Menu = styled.div`
    width: 400px;
    overflow: hidden;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
`

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 0.75rem;
    color: white;

    &:hover{
        color: yellow;
        transition-duration: 250ms;
    }

`

const MenuItemEnlightened = styled.a`
    cursor: pointer;
    border-radius: 6px;
    font-size: 1rem;
    padding: 0.55rem 1rem;
    text-decoration: none;
    
    &:hover{
        color: yellow;
        transition-duration: 250ms;
    }
`