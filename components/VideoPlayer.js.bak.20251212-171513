import React from 'react';

export default function VideoPlayer({ src, title }) {
  return (
    <div className='player-wrap'>
      <video controls playsInline style={{ width: '100%', borderRadius:8 }} src={src} />
      <style jsx>{
        .player-wrap { max-width: 900px; margin: 12px auto; }
        @media (max-width:600px) {
          .player-wrap { padding: 8px; }
        }
      }</style>
    </div>
  );
}
