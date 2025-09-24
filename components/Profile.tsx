import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="profile-pic" style={{ backgroundColor: 'rgba(0,0,0,0.7)', textAlign: 'center', padding: '1rem', border: 'solid 2px rgb(48, 25, 52)' }}>
      <img
        src="https://aniyuki.com/wp-content/uploads/2021/12/l-death-note-aniyuki-46.jpg"
        alt="Profile picture of L Lawliet from Death Note"
        style={{ width: '150px', height: '150px', margin: '0 auto', objectFit: 'cover' }}
      />
      <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.125rem' }}>Yakup Ekrem Özcan <img src="https://i.ibb.co/rZctnwP/onlinebw.gif" alt="Online Status" className="online" style={{display: 'inline-block'}} /></p>
      <p style={{ fontSize: '0.875rem', color: '#ccc' }}>Computer Engineer / Turkey</p>
      <p style={{ fontSize: '0.875rem', color: '#ccc' }}>Last Login: 01/01/2024</p>

      <div className="mood" style={{ marginTop: '1rem', textAlign: 'left', fontSize: '0.875rem' }}>
        <p><strong>Status:</strong> Optimize, create, and drift through code.</p>
        <p><strong>View My:</strong> <a href="#" style={{ color: '#00ffff' }}>Projects</a> | <a href="#" style={{ color: '#00ffff' }}>Code</a></p>
      </div>
    </div>
  );
};

export default Profile;