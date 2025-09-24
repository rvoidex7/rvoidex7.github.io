import React from 'react';

const Blurbs: React.FC = () => {
  return (
    <div className="blurbs" style={{ padding: '1rem', marginTop: '1rem' }}>
      <div className="inner">
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ borderBottom: '1px solid rgb(48, 25, 52)', marginBottom: '0.5rem' }}>About me:</h4>
          <p>
            Hello! I’m Yakup Ekrem Özcan, a computer engineering graduate from Turkey with a strong passion for mobile app development—especially using React Native. I enjoy exploring operating systems like Arch Linux and fine-tuning my laptop for performance and security.
            I love combining tech with art: vaporwave and retro themes inspire many of my personal projects, including my experimental “Diagonal Feed UI” concept. Outside of coding, you’ll find me playing chess (also a certified referee and coach) or drifting through racing games.
          </p>
        </div>
        <div>
          <h4 style={{ borderBottom: '1px solid rgb(48, 25, 52)', marginBottom: '0.5rem' }}>Projects & Ideas:</h4>
          <p>
            • rvoidex7 personal brand and portfolio site<br/>
            • Diagonal Feed UI: a dynamic scrolling concept where content flows from bottom-left to top-right<br/>
            • Multi-factor, privacy-friendly login methods for mobile apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blurbs;