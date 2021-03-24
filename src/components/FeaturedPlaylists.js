import React from 'react'

import '../styles/FeaturedPlaylists.css'

const FeaturedPlaylists = () => {

    return (
        <div className="featuredPlaylists-container">
            <p className="featuredPlaylists-header">
                Featured Playlists
            </p>
            <div className="playlists-scroll-menu">
                <a href="a">
                    <img src="/assets/playlist1.jpg" alt="Playlist 1" />
                    <div className="subtitle-playlist">
                        <p className="title-playlist">
                            Only STARDUST
                        </p>
                        <p className="info-playlist">
                            24 tracks
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/playlist2.jpg" alt="Playlist 2" />
                    <div className="subtitle-playlist">
                        <p className="title-playlist">
                            Mike Vella
                        </p>
                        <p className="info-playlist">
                            12 tracks
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/playlist3.jpg" alt="Playlist 3" />
                    <div className="subtitle-playlist">
                        <p className="title-playlist">
                            the best singles s2
                        </p>
                        <p className="info-playlist">
                            163 tracks
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/playlist4.jpg" alt="Playlist 4" />
                    <div className="subtitle-playlist">
                        <p className="title-playlist">
                            Indie
                        </p>
                        <p className="info-playlist">
                            150 tracks
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default FeaturedPlaylists