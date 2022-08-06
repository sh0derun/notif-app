import React from "react";
import "./Notification.css"

export default function Notification(props){

    return (
        <li>
            <a href={`#${props.index}`} className="notif-link">
                <ul className={`notif ${props.index&1 ? "odd" : "even"}`}>
                    <li>{props.time}</li>
                    <li><span className="fromUser">{props.fromUser}</span> {props.event}.</li>
                </ul>
            </a>
        </li>
    )
}