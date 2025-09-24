import React from 'react';

const MusicPlayer: React.FC = () => {
  const videoId = 'uJFrI5d0wHg';
  
  // To loop a single video, the `playlist` parameter must be set to the video ID.
  // The user requested controls=1, but the iframe is hidden, so this has no visual effect.
  // The URL structure is corrected from the user's snippet for proper functionality.
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1`;

  return (
    <iframe
      width="0"
      height="0"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ border: 'none', overflow: 'hidden', position: 'absolute' }} // Ensure it is completely hidden
    ></iframe>
  );
};

export default MusicPlayer;