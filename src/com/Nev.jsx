import react ,{useState,useEffect} from 'react';
import './nev.css'
import logo from '../assets/logo.png'
// import { useEffect, useState } from 'react';
function Nev() {
        // let size;
        const [wd,setwd]=useState(window.innerWidth);
        const [dd,stedd]=useState(false);
    //    document.getElementById('a').style.di
        useEffect(() => {
            // size = window.innerWidth;
            window.addEventListener('resize', () => { setwd( window.innerWidth) })
            // console.log(size)
            return () => window.removeEventListener('resize', () => { setwd( window.innerWidth) })
        }, [])
    return (<>
        <div className='Nw'>
            <nev>
                <div style={{display:wd>670?'none':''}} onClick={()=>stedd(!dd)}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 30 30">
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                    </svg>
                </div>
                <img src={logo} style={{height:'23px',marginRight:'auto'}} ></img>
              { wd>670? <div className="nev-body">
                    <button>Services <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.96667 10.141C8.85602 10.1424 8.7463 10.1202 8.64458 10.0759C8.54286 10.0317 8.45139 9.96623 8.37605 9.88388L0.7823 2.1696C0.4448 1.82674 0.4448 1.29531 0.7823 0.952455C1.1198 0.609598 1.64292 0.609598 1.98042 0.952455L8.98355 8.06674L15.9698 0.969598C16.3073 0.626741 16.8304 0.626741 17.1679 0.969598C17.5054 1.31246 17.5054 1.84388 17.1679 2.18674L9.57417 9.90103C9.40542 10.0725 9.18605 10.1582 8.98355 10.1582L8.96667 10.141Z" fill="black" />
                    </svg>
                    </button>
                    <button>Pricing</button>
                    <button>Industries <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.96667 10.141C8.85602 10.1424 8.7463 10.1202 8.64458 10.0759C8.54286 10.0317 8.45139 9.96623 8.37605 9.88388L0.7823 2.1696C0.4448 1.82674 0.4448 1.29531 0.7823 0.952455C1.1198 0.609598 1.64292 0.609598 1.98042 0.952455L8.98355 8.06674L15.9698 0.969598C16.3073 0.626741 16.8304 0.626741 17.1679 0.969598C17.5054 1.31246 17.5054 1.84388 17.1679 2.18674L9.57417 9.90103C9.40542 10.0725 9.18605 10.1582 8.98355 10.1582L8.96667 10.141Z" fill="black" />
                    </svg>
                    </button>
                    <button>Blog</button>
                    <button>Contact us</button>
                </div>:<div>
                    <div >
                        {/* Menue <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.96667 10.141C8.85602 10.1424 8.7463 10.1202 8.64458 10.0759C8.54286 10.0317 8.45139 9.96623 8.37605 9.88388L0.7823 2.1696C0.4448 1.82674 0.4448 1.29531 0.7823 0.952455C1.1198 0.609598 1.64292 0.609598 1.98042 0.952455L8.98355 8.06674L15.9698 0.969598C16.3073 0.626741 16.8304 0.626741 17.1679 0.969598C17.5054 1.31246 17.5054 1.84388 17.1679 2.18674L9.57417 9.90103C9.40542 10.0725 9.18605 10.1582 8.98355 10.1582L8.96667 10.141Z" fill="black" />
                        </svg> */}
                  
                    <div className={`${dd?'ddmenue':'closed'}`} id='a' >
                          <button>Services <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.96667 10.141C8.85602 10.1424 8.7463 10.1202 8.64458 10.0759C8.54286 10.0317 8.45139 9.96623 8.37605 9.88388L0.7823 2.1696C0.4448 1.82674 0.4448 1.29531 0.7823 0.952455C1.1198 0.609598 1.64292 0.609598 1.98042 0.952455L8.98355 8.06674L15.9698 0.969598C16.3073 0.626741 16.8304 0.626741 17.1679 0.969598C17.5054 1.31246 17.5054 1.84388 17.1679 2.18674L9.57417 9.90103C9.40542 10.0725 9.18605 10.1582 8.98355 10.1582L8.96667 10.141Z" fill="black" />
                    </svg>
                    </button>
                    <button>Pricing</button>
                    <button>Industries <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.96667 10.141C8.85602 10.1424 8.7463 10.1202 8.64458 10.0759C8.54286 10.0317 8.45139 9.96623 8.37605 9.88388L0.7823 2.1696C0.4448 1.82674 0.4448 1.29531 0.7823 0.952455C1.1198 0.609598 1.64292 0.609598 1.98042 0.952455L8.98355 8.06674L15.9698 0.969598C16.3073 0.626741 16.8304 0.626741 17.1679 0.969598C17.5054 1.31246 17.5054 1.84388 17.1679 2.18674L9.57417 9.90103C9.40542 10.0725 9.18605 10.1582 8.98355 10.1582L8.96667 10.141Z" fill="black" />
                    </svg>
                    </button>
                    <button>Blog</button>
                    <button>Contact us</button>
                    </div>
                    </div>
                    </div>}
                <button className='bluebutton' style={{marginLeft:'auto'}}>Get a Consultation</button>
            </nev>
        </div>
    </>);
}

export default Nev;