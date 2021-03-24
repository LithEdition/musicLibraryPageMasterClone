import React from 'react'
import SideBar from './components/SideBar'
import SearchBar from './components/SearchBar'
import FeaturedPlaylists from './components/FeaturedPlaylists'
import Tracks from './components/Tracks'
import ProfileViews from './components/ProfileViews'

import './styles/global.css'

const App = () => {

    return (
        <div className="app">
            <SideBar />
            <SearchBar />
            <FeaturedPlaylists />
            <Tracks />
            <ProfileViews />
        </div>
    )
}

export default App