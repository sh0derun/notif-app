import './Navbar.css';
import clocklogo from './clock.png';
import bellicon from './bell.png';
import { useEffect, useState } from 'react';


export default function Navbar({handleBellClick, notifCount}){

    const [isShown, setIsShown] = useState(false);
    const [notifsCount, setNotifsCount] = useState(0);

    useEffect(()=>{
        handleBellClick(isShown);
        setNotifsCount(notifCount);
    })

    return (
        <div>
            <nav>
                <img src={clocklogo}/>
                <h2 className="nav-title">Notification Demo</h2>
                <img className={isShown ? "active-bell" : "normal-bell"} src={bellicon} onClick={()=>{
                    if(isShown){
                        console.log("should be set to 0");
                        setNotifsCount(0);
                    }
                    setIsShown(!isShown);
                    handleBellClick(isShown);
                }}/>
                <div className={`notif-count ${notifsCount > 0 ? 'visible' : 'hidden'}`}>
                    <span>{notifsCount}</span>
                </div>
            </nav>
        </div>
    );
}