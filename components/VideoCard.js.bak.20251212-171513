// components/VideoCard.js
import React from 'react';

export default function VideoCard({ video }) {
  if (!video) return null;
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: 'auto' }} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>

      <style jsx>{`
        .video-card {
          width: 100%;
          max-width: 420px;
          margin: 8px auto;
          padding: 8px;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .video-card h3 {
          margin: 8px 0 4px;
          font-size: 1.05rem;
        }
        .video-card p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}