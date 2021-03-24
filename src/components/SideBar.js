import React from 'react'
import SideBarComponents from './SideBarComponents'
import '../styles/SideBar.css'

const SideBar = () => {
    return (
        <div className="sideBar-container">
            <div className="sideBar-profile-container">
                <div className="sideBar-user-img">
                    <img src="/assets/profile.jpg" alt="User" />
                </div>
                <div className="sideBar-profile">
                    <p>Dany Schudle</p>
                    <button>
                        Edit profile
                        <span>
                            <img src="/icons/edit-icon.svg" alt="Edit" />
                        </span>
                    </button>
                </div>
            </div>
            <SideBarComponents />
        </div>
    )
}

export default SideBar