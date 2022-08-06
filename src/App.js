import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NotificationsBox from './components/NoticationsBox';

export default function App() {

    const [isNotifShown, setIsNotifShown] = useState(false);
    const [notifCount, setNotifCount] = useState(0);

    const handleBellClick = isShown => {
        if (isShown) {
            setNotifCount(0);
        }
        setIsNotifShown(isShown);
    };

    const handleNotifCounter = () => {
        setNotifCount(notifCount => notifCount + 1);
    }

    return (
        <div className="App">
            <Navbar handleBellClick={handleBellClick} notifCount={notifCount} />
            <NotificationsBox notifsCounterHandler={handleNotifCounter} isShown={isNotifShown} />
        </div>
    );
}
