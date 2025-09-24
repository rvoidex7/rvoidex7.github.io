import React from 'react';

const Friend: React.FC<{ name: string; id: number }> = ({ name, id }) => (
  <div className="person">
    <a href="#">
      <img 
        src={`https://picsum.photos/seed/${id}/80/80`} 
        alt={name} 
      />
    </a>
    <p>{name}</p>
  </div>
);

const FriendSpace: React.FC = () => {
  const friends = [
    { name: 'Friend 1', id: 101 },
    { name: 'Friend 2', id: 102 },
    { name: 'Friend 3', id: 103 },
    { name: 'Friend 4', id: 104 },
    { name: 'Friend 5', id: 105 },
    { name: 'Friend 6', id: 106 },
    { name: 'Friend 7', id: 107 },
    { name: 'Friend 8', id: 108 },
  ];

  return (
    <div className="friends-space" style={{ marginTop: '1rem' }}>
      <div className="heading" style={{ padding: '0.5rem', border: 'ridge 3px black', textAlign: 'center', boxShadow: '0px 2px 2px white' }}>
        <h4>My Friend Space</h4>
      </div>
      <div className="inner">
        <p style={{ marginBottom: '0.75rem' }}>
          I have <strong>{friends.length}</strong> Friends.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {friends.map(friend => (
            <Friend key={friend.id} name={friend.name} id={friend.id} />
          ))}
        </div>
        <div style={{ textAlign: 'right', marginTop: '0.5rem', fontSize: '0.875rem' }}>
          <a href="#">View All of My Friends</a>
        </div>
      </div>
    </div>
  );
};

export default FriendSpace;
