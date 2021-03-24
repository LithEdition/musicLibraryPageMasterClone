import React from 'react'

import '../styles/Tracks.css'
import '../styles/FeaturedPlaylists.css'

const Tracks = () => {

    return (
        <div className="tracks-container">
            <p className="tracks-header">
                Tracks
            </p>
            <div className="tracks-scroll-menu">
                <a href="a">
                    <img src="/assets/track1.jpg" alt="Track 1" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Mahara Bon
                        </p>
                        <p className="info-tracks">
                            Sexy in Paris
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/track2.jpg" alt="Track 2" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Donna
                        </p>
                        <p className="info-tracks">
                            Pseudo-Life
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/track3.jpg" alt="Track 3" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Avven
                        </p>
                        <p className="info-tracks">
                            Magic
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/track4.jpg" alt="Track 4" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Angels Like You
                        </p>
                        <p className="info-tracks">
                            Miley Cyrus
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/track5.jpg" alt="Track 5" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Sebz
                        </p>
                        <p className="info-tracks">
                            Big Room
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/track6.jpg" alt="Track 6" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Deadline
                        </p>
                        <p className="info-tracks">
                            The Mix
                        </p>
                    </div>
                </a>
                <a href="a">
                    <img src="/assets/track7.jpg" alt="Track 7" />
                    <div className="subtitle-tracks">
                        <p className="title-tracks">
                            Traxsource
                        </p>
                        <p className="info-tracks">
                            Terry Hunter
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Tracks