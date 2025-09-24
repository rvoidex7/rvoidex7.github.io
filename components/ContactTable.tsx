import React from 'react';

const ContactTable: React.FC = () => {
  const contactItems = [
    { text: "GitHub", url: "https://github.com/rvoidex7", iconUrl: "https://64.media.tumblr.com/2eda27b89aa523112a20120571343753/tumblr_inline_p8s62iBJ5j1r632x0_500.gif" },
    { text: "LinkedIn", url: "#", iconUrl: "https://gifdb.com/images/high/pixel-art-spinning-computer-ouzg3ax1l7w2gtx4.gif" },
    { text: "Send Message", url: "#", iconUrl: "https://www.retrovideogames.net/wp-content/uploads/2021/08/mail-icon.gif" },
    { text: "Add to Friends", url: "#", iconUrl: "https://media.tenor.com/Fw-bUQNpEZ4AAAAi/add-pixel.gif" },
    { text: "Block User", url: "#", iconUrl: "https://i.gifer.com/origin/d7/d76f8a291244033da78a1a367c76891a_w200.gif" }
  ];

  return (
    <div className="contact-table" style={{ border: 'solid 2px rgb(48, 25, 52)', marginTop: '1rem', background: 'rgba(0,0,0,0.7)' }}>
      <h4 style={{ padding: '0.5rem', background: 'rgb(48, 25, 52)' }}>Contacting Me</h4>
      <div style={{ padding: '0.75rem' }}>
        {contactItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '0.25rem' }}>
              <img src={item.iconUrl} alt={`${item.text} icon`} className="contact-icon" />
              <a href={item.url} target={item.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ color: '#00ffff', fontWeight: 'bold' }}>{item.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTable;