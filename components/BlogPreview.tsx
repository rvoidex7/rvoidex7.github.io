import React from 'react';

const BlogPreview: React.FC = () => {
  return (
    <div className="blog-preview">
      <h4>My Latest Blog Entry</h4>
      <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
        <div style={{ borderBottom: '1px dashed #666', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            <a href="#">Diagonal Feed UI Concept</a>
            <span style={{ color: '#999', marginLeft: '0.5rem' }}>(Date: 01/01/2024)</span>
        </div>
         <div style={{ borderBottom: '1px dashed #666', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
            <a href="#">My New Retro Portfolio Site!</a>
            <span style={{ color: '#999', marginLeft: '0.5rem' }}>(Date: 12/25/2023)</span>
        </div>
        <div>
            <a href="#">Tuning Arch Linux for Dev</a>
            <span style={{ color: '#999', marginLeft: '0.5rem' }}>(Date: 12/15/2023)</span>
        </div>
      </div>
       <div style={{ textAlign: 'right', marginTop: '0.75rem', fontSize: '0.875rem' }}>
        <a href="#">[View All Blog Entries]</a>
      </div>
    </div>
  );
};

export default BlogPreview;