import React from 'react'

import '../styles/ProfileViews.css'
import '../styles/FeaturedPlaylists.css'

const ProfileViews = () => {

    return (
        <div className="profileViews-Container">
            <p className="profileViews-header">
                Profile Views
            </p>
            <div className="profileViews-content">
                <a href="a">
                    <img src="/assets/view1.jpg" alt="View1" />
                    <div className="profileViews-info">
                        <p className="profile-info">
                            Jenny Villa
                        </p>
                        <p className= "day-info">
                            1 day ago
                        </p>
                        <p className="profile-albuns">
                            4 albuns
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/view2.jpg" alt="View2" />
                    <div className="profileViews-info">
                        <p className="profile-info">
                            Aquila
                        </p>
                        <p className= "day-info">
                            3 day ago
                        </p>
                        <p className="profile-albuns">
                            2 albuns
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/view3.jpg" alt="View3" />
                    <div className="profileViews-info">
                        <p className="profile-info">
                            This is War
                        </p>
                        <p className= "day-info">
                            3 week ago
                        </p>
                        <p className="profile-albuns">
                            6 albuns
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProfileViews