import React from 'react';
import Link from 'next/link';

export default function VideoCard({ video }) {
  return (
    <div className='video-card'>
      <Link href={/player/}>
        <a className='thumb'>
          <div className='thumb-img' style={{ backgroundImage: url() }} />
        </a>
      </Link>
      <div className='meta'>
        <h4>{video.title}</h4>
        <p className='duration'>{video.duration}s</p>
      </div>

      <style jsx>{
        .video-card {
          width: 100%;
          max-width: 420px;
          margin: 8px auto;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          background: #fff;
        }
        .thumb { display:block; }
        .thumb-img {
          background-size: cover;
          background-position: center;
          height: 220px;
          width: 100%;
        }
        .meta { padding: 12px; }
        .meta h4 { margin: 0 0 6px 0; font-size: 16px; }
        .duration { color: #777; font-size: 13px; margin:0 }
        @media (max-width:600px){
          .thumb-img{ height: 180px }
        }
      }</style>
    </div>
  );
}
