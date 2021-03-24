import React from 'react'
import '../styles/SideBarComponents.css'

const SideBarComponents = () => {
    return (
        <div className="sideBarComponents-container">
            <div className="group-components">
                <a href="a" className="first-element">
                    <img src="/icons/overview-icon.svg" alt="Overview" />
                    <p>Overview</p>
                </a>
                <a href="a">
                    <img src="/icons/news-icon.svg" alt="News" />
                    <p>News</p>
                </a>
                <a href="a">
                    <img src="/icons/playlist-icon.svg" alt="Playlist" />
                    <p>Playlist</p>
                </a>
                <a href="a">
                    <img src="/icons/discovery-icon.svg" alt="Discovery" />
                    <p>Discover</p>
                </a>
            </div>
            <div className="group-components">
                <a href="a">
                    <img src="/icons/dashboard-icon.svg" alt="Dashboard" />
                    <p>Dashboard</p>
                </a>
                <a href="a">
                    <img src="/icons/message-icon.svg" alt="Messages" />
                    <p>Messages</p>
                </a>
                <a href="a">
                    <img src="/icons/notification-icon.svg" alt="Notifications" />
                    <p>Notifications</p>
                </a>
                <a href="a">
                    <img src="/icons/user-icon.svg" alt="Account" />
                    <p>Account</p>
                </a>
            </div>
        </div>
    )
}

export default SideBarComponents