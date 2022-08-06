import React, { useEffect, useState } from "react";
import Notification from "./Notification";
import './NoticationsBox.css';
import users from "../data/Users";
import events from "../data/Events";
import notifications from "../data/Notifications";

export default function NotificationsBox({notifsCounterHandler, isShown}){

    const [list, setList] = useState(notifications);

    useEffect(()=>{
        //simulate new notif from api
        const intervalId = setInterval(()=>{
            if(Math.round(Math.random()*4) >= 3){
                const currentHour = new Date().toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                })
                notifications.unshift({isToday: true, time:currentHour, globalTime:null, fromUser:users[Math.round(Math.random()*(users.length-1))], event:events[Math.round(Math.random()*(events.length-1))]});
                setList([...notifications]);
                notifsCounterHandler();
            }
        },3000);
        return ()=>clearInterval(intervalId);
    }, []);

    return (
        <div className={`notifs-box ${isShown ? 'visible' : 'hidden'}`}>
            <div className="header">
                <h3>Notifications</h3>
            </div>
            <div className="items">
                <ul className="notif-list">
                    {list.map((notif, i)=>
                        <Notification time={notif.isToday?notif.time:notif.globalTime} fromUser={notif.fromUser} event={notif.event} index={i}/>
                    )}
                </ul>
            </div>
        </div>
    )
}