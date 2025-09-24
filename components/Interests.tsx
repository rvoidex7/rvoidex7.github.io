import React from 'react';

const Interests: React.FC = () => {
  return (
    <div style={{ marginBottom: '1rem', padding: '1rem' }}>
      <h4>My Interests</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.875rem', marginTop: '1rem' }}>
        <div>
          <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid rgb(48, 25, 52)', marginBottom: '0.25rem' }}>General</h5>
          <p>Mobile dev, React Native, C#, Linux (Arch + zen), Cyber-security, Chess, Racing games (Mazda RX-7 FD), Retro/Vaporwave design.</p>
        </div>
        <div>
          <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid rgb(48, 25, 52)', marginBottom: '0.25rem' }}>Music</h5>
          <p>Synthwave, Vaporwave, Retrowave. Energetic beats for late-night coding.</p>
        </div>
        <div>
          <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid rgb(48, 25, 52)', marginBottom: '0.25rem' }}>Movies & Series</h5>
          <p>Sci-Fi classics, cyberpunk aesthetics, and mind-bending thrillers.</p>
        </div>
        <div>
          <h5 style={{ fontWeight: 'bold', borderBottom: '1px solid rgb(48, 25, 52)', marginBottom: '0.25rem' }}>Books</h5>
          <p>Technology, open-source philosophy, and creative coding references.</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;