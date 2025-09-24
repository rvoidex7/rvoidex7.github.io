import React from 'react';
import Profile from './components/Profile';
import ContactTable from './components/ContactTable';
import Interests from './components/Interests';
import FriendSpace from './components/FriendSpace';
import MusicPlayer from './components/MusicPlayer';
import Blurbs from './components/Blurbs';
import BlogPreview from './components/BlogPreview';

const App: React.FC = () => {
  return (
    <div className="container">
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h1>Yakup Ekrem Özcan (a.k.a. rvoidex7)</h1>
          <p>"Creative Mobile Developer • Arch Linux Enthusiast • Retro & Vaporwave Aesthetics"</p>
        </div>
        <MusicPlayer />
      </header>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        {/* Left Column */}
        <div style={{ width: '33.333333%' }}>
          <Profile />
          <ContactTable />
        </div>

        {/* Right Column */}
        <div style={{ width: '66.666667%' }}>
          <main>
            <Interests />
            <Blurbs />
            <BlogPreview />
            <FriendSpace />
          </main>
        </div>
      </div>

    </div>
  );
};

export default App;